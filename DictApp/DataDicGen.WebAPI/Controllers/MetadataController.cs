using Microsoft.AspNetCore.Mvc;
using DataDicGen.Application.Dtos;
using DataDicGen.Application.Interfaces.Services;

namespace DataDicGen.WebAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MetadataController : ControllerBase
{
    private readonly IDatabaseMetadataService _metadataService;
    private readonly IDocumentGenerator _documentGenerator;
    private readonly ICredentialsCacheService _credentialsCache;

    public MetadataController(
        IDatabaseMetadataService metadataService, 
        IDocumentGenerator documentGenerator,
        ICredentialsCacheService credentialsCache)
    {
        _metadataService = metadataService;
        _documentGenerator = documentGenerator;
        _credentialsCache = credentialsCache;
    }

    /// <summary>
    /// Conecta a la base de datos y guarda las credenciales para uso posterior
    /// </summary>
    [HttpPost("connect")]
    public async Task<ActionResult<ConnectionResponseDto>> Connect([FromBody] DatabaseConnectionDto dto)
    {
        try
        {
            // Verificar la conexión obteniendo los metadatos
            var tablas = await _metadataService.ObtenerDiccionarioAsync(dto);
            
            if (tablas == null || !tablas.Any())
            {
                return NotFound(new ConnectionResponseDto 
                { 
                    Message = "No se encontraron tablas en la base de datos."
                });
            }
            
            // Almacenar credenciales y generar token
            string token = _credentialsCache.StoreCredentials(dto);
            
            return Ok(new ConnectionResponseDto 
            { 
                Token = token,
                Message = $"Conexión exitosa. Se encontraron {tablas.Count} tablas."
            });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new ConnectionResponseDto
            {
                Message = $"Error al conectar: {ex.Message}"
            });
        }
    }

    /// <summary>
    /// Descarga el diccionario de datos en formato PDF usando credenciales almacenadas
    /// </summary>
    [HttpGet("diccionario/pdf/{token}")]
    public async Task<IActionResult> DescargarDiccionarioPorToken(string token)
    {
        try
        {
            // Validar el token
            if (!_credentialsCache.HasToken(token))
                return BadRequest("Token inválido o expirado. Por favor, vuelva a conectarse.");
                
            // Obtener credenciales
            var credentials = _credentialsCache.GetCredentials(token);
            
            // Generar el PDF
            var tablas = await _metadataService.ObtenerDiccionarioAsync(credentials);
            var pdfBytes = _documentGenerator.GenerarDiccionarioPdf(tablas);

            return File(pdfBytes, "application/pdf", "diccionario_datos.pdf");
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Error al generar el PDF: {ex.Message}");
        }
    }

    /// <summary>
    /// Método original que requiere las credenciales en cada llamada
    /// </summary>
    [HttpPost("diccionario/pdf")]
    public async Task<IActionResult> DescargarDiccionario([FromBody] DatabaseConnectionDto dto)
    {
        try
        {
            var tablas = await _metadataService.ObtenerDiccionarioAsync(dto);
            var pdfBytes = _documentGenerator.GenerarDiccionarioPdf(tablas);

            return File(pdfBytes, "application/pdf", "diccionario_datos.pdf");
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"Error al generar el PDF: {ex.Message}");
        }
    }
}
