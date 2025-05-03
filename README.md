[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/IlvMPK2Y)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=18793491)
# PROYECTO APLICACION PARA LA GENERACION AUTOMATIZADA DE UN DICCIONARIO DE DATOS

<center>

![./media/logo-upt.png](./media/logo-upt.png)

# **UNIVERSIDAD PRIVADA DE TACNA**  
## **FACULTAD DE INGENIERÍA**  
### **ESCUELA PROFESIONAL DE INGENIERÍA DE SISTEMAS**  

---

# **APLICACIÓN PARA LA GENERACIÓN AUTOMATIZADA DE UN DICCIONARIO DE DATOS**

## **Curso:** Inteligencia de Negocios  
## **Docente:** Mag. Patrick Cuadros Quiroga  

---

### **Integrantes:**  
- **Flores Melendez Andree Sebastian**  
- **Flores Ramos Mario Anthonio**  
- **Fernandez Villanueva Daleska Fernandez**  

---

## Objetivo Principal:
Desarrollar una aplicación capaz de conectarse a bases de datos relacionales para extraer automáticamente los metadatos y generar un diccionario de datos estructurado y exportable, facilitando la documentación técnica en proyectos de software.

## Objetivos Secundarios:
- Automatizar la extracción de metadatos de bases de datos.
- Generar un diccionario de datos estructurado en un formato accesible.
- Implementar una interfaz de usuario amigable para gestionar y actualizar los diccionarios de datos.
- Facilitar la integración de la aplicación con sistemas de gestión de bases de datos.

---

## RoadMap:

![Roadmap](./media/roadmap.png)

---


## Despliegue: GitHub + Azure

### Pre-requisitos
- Azure Subscription
- GitHub Account
- Terraform ≥ 1.0
- .NET SDK 8.0
- Node.js ≥ 18.0

### Configuración Azure

```bash
az ad sp create-for-rbac --name "GitHubActionsDataDicGen" --role contributor \
  --scopes /subscriptions/{ID-SUSCRIPCION} --sdk-auth
```

### Secretos GitHub
- AZURE_CREDENTIALS → Service Principal (JSON)
- SUBSCRIPTION_ID → ID de suscripción Azure
- SQL_USER → Admin SQL
- SQL_PASS → Password SQL

### Infraestructura

El `main.tf` despliega:
- Resource Group: `upt-arg-xxx`
- SQL Server + Database: `upt-dbs-xxx`
- App Service Plan: `upt-asp-xxx` (F1)
- Web App: `datagen-api-xxx` (.NET 8)

### Pipeline de Despliegue

1. **Terraform apply** → 5-10 min
2. **Build Backend** → Restore, Build, Publish
3. **Build Frontend** → npm install, build
4. **Deploy to Azure** → Web App deploy

### Monitoreo y Logs

- Azure Portal → App Service → Logs
- Application Insights → Performance

### Conexión BD

```
Server={server}.database.windows.net;
Database=DataDicGenDATABASE;
User={SQL_USER};Password={SQL_PASS};
TrustServerCertificate=True;
```

### Estructura Principal
```
DataDictGen.sln
├── Application  → Servicios, DTOs
├── Domain       → Entidades core
├── Frontend     → React/TypeScript
├── Infrastructure → Persistencia, migraciones
├── WebAPI       → Controllers API
└── Tests        → Testing
```

### Troubleshooting Rápido

| Problema | Acción |
|----------|--------|
| Error 503 | Revisar logs App Service |
| Fallo BD | Verificar credenciales y firewall |
| CI/CD | Revisar GitHub Actions logs |

---

*Team FM_FR_FV - UPT 2025*


</center>
