import React, { useState } from 'react';
import { 
  Box, Button, Card, CardContent, TextField, Typography, 
  CircularProgress, Alert, Grid, Divider
} from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DescriptionIcon from '@mui/icons-material/Description';
import { DatabaseConnectionDto } from '../types/api-types';
import { apiService } from '../services/api-service';

const SqlConnectionForm: React.FC = () => {
  // Estado para los datos del formulario
  const [connectionData, setConnectionData] = useState<DatabaseConnectionDto>({
    server: '',
    database: '',
    user: '',
    password: ''
  });

  // Estados para manejar la interacción con el usuario
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [connectionToken, setConnectionToken] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);

  // Manejar cambios en los campos del formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setConnectionData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Resetear el estado de conexión si cambian los datos
    if (isConnected) {
      setIsConnected(false);
      setSuccessMessage(null);
    }
  };

  // Conectar a la base de datos
  const handleConnect = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);
    setIsConnected(false);

    try {
      const response = await apiService.connectToDatabase(connectionData);
      setConnectionToken(response.token);
      setSuccessMessage(response.message);
      setIsConnected(true);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Error al conectar con la base de datos');
      }
    } finally {
      setLoading(false);
    }
  };

  // Descargar el diccionario en PDF
  const handleDownloadPdf = async () => {
    try {
      setLoading(true);
      
      let pdfBlob;
      if (connectionToken) {
        // Usar el token si existe
        pdfBlob = await apiService.downloadPdfDictionary(connectionToken);
      } else {
        // Usar las credenciales directamente
        pdfBlob = await apiService.downloadPdfWithCredentials(connectionData);
      }
      
      // Crear una URL para el blob y descargar
      const url = window.URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'diccionario_datos.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
      
      setSuccessMessage('Diccionario en PDF descargado exitosamente');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Error al descargar el PDF');
      }
    } finally {
      setLoading(false);
    }
  };

  // Descargar el diccionario en Word
  const handleDownloadWord = async () => {
    try {
      setLoading(true);
      
      let wordBlob;
      if (connectionToken) {
        // Usar el token si existe
        wordBlob = await apiService.downloadWordDictionary(connectionToken);
      } else {
        // Usar las credenciales directamente
        wordBlob = await apiService.downloadWordWithCredentials(connectionData);
      }
      
      // Crear una URL para el blob y descargar
      const url = window.URL.createObjectURL(wordBlob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'diccionario_datos.docx');
      document.body.appendChild(link);
      link.click();
      link.remove();
      
      setSuccessMessage('Diccionario en Word descargado exitosamente');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Error al descargar el Word');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card variant="outlined" sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Conexión a SQL Server
        </Typography>
        
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        
        {successMessage && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {successMessage}
          </Alert>
        )}
        
        <form onSubmit={handleConnect}>
          <TextField
            label="Servidor"
            name="server"
            value={connectionData.server}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            placeholder="localhost"
          />
          <TextField
            label="Base de datos"
            name="database"
            value={connectionData.database}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Usuario"
            name="user"
            value={connectionData.user}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Contraseña"
            name="password"
            type="password"
            value={connectionData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          
          <Box sx={{ mt: 3 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
              fullWidth
            >
              {loading ? <CircularProgress size={24} /> : 'Conectar'}
            </Button>
          </Box>
        </form>
        
        {isConnected && (
          <>
            <Divider sx={{ my: 4 }} />
            
            <Typography variant="h6" component="h3" gutterBottom>
              Generar Diccionario de Datos
            </Typography>
            
            <Typography variant="body2" color="text.secondary" paragraph>
              Conexión establecida. Ahora puede generar el diccionario en diferentes formatos.
            </Typography>
            
            <Grid container spacing={3} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleDownloadPdf}
                  disabled={loading}
                  fullWidth
                  startIcon={<PictureAsPdfIcon />}
                  sx={{ py: 1.5 }}
                >
                  Generar PDF
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleDownloadWord}
                  disabled={loading}
                  fullWidth
                  startIcon={<DescriptionIcon />}
                  sx={{ py: 1.5 }}
                >
                  Generar Word
                </Button>
              </Grid>
            </Grid>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default SqlConnectionForm;