terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 4.0.0"
    }
  }
  required_version = ">= 0.14.9"
}

variable "suscription_id" {
    type = string
    description = "Azure subscription id"
}

variable "sqladmin_username" {
    type = string
    description = "Administrator username for server"
}

variable "sqladmin_password" {
    type = string
    description = "Administrator password for server"
}

provider "azurerm" {
  features {}
  subscription_id = var.suscription_id
}

# Generate a random integer to create a globally unique name
resource "random_integer" "ri" {
  min = 100
  max = 999
}

# Create the resource group
resource "azurerm_resource_group" "rg" {
  name     = "upt-arg-${random_integer.ri.result}"
  location = "eastus"
}

resource "azurerm_mssql_server" "sqlsrv" {
  name                         = "upt-dbs-${random_integer.ri.result}"
  resource_group_name          = azurerm_resource_group.rg.name
  location                     = azurerm_resource_group.rg.location
  version                      = "12.0"
  administrator_login          = var.sqladmin_username
  administrator_login_password = var.sqladmin_password
}

resource "azurerm_mssql_firewall_rule" "sqlaccessrule" {
  name             = "PublicAccess"
  server_id        = azurerm_mssql_server.sqlsrv.id
  start_ip_address = "0.0.0.0"
  end_ip_address   = "255.255.255.255"
}

resource "azurerm_mssql_database" "sqldb" {
  name      = "DataDicGenDATABASE"
  server_id = azurerm_mssql_server.sqlsrv.id
  sku_name = "Basic"
}

# Plan de servicio de App Service
resource "azurerm_service_plan" "appserviceplan" {
  name                = "upt-asp-${random_integer.ri.result}"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  os_type             = "Windows"
  sku_name            = "F1" # Nivel Gratuito
}

# App Service para el backend
resource "azurerm_windows_web_app" "backend" {
  name                = "datagen-api-${random_integer.ri.result}"
  resource_group_name = azurerm_resource_group.rg.name
  location            = azurerm_resource_group.rg.location
  service_plan_id     = azurerm_service_plan.appserviceplan.id

  site_config {
    application_stack {
      dotnet_version = "v8.0" # Corregido: se añadió 'v' antes del número de versión
    }
    always_on        = false # Debe ser false en F1 (limitación del nivel gratuito)
    ftps_state       = "Disabled"
  }

  app_settings = {
    "ASPNETCORE_ENVIRONMENT"                 = "Production"
    "ConnectionStrings__DefaultConnection"   = "Server=${azurerm_mssql_server.sqlsrv.fully_qualified_domain_name};Database=${azurerm_mssql_database.sqldb.name};User Id=${var.sqladmin_username};Password=${var.sqladmin_password};TrustServerCertificate=True;"
    "WEBSITE_RUN_FROM_PACKAGE"               = "1"
  }

  # Habilitar logs
  logs {
    detailed_error_messages = true
    failed_request_tracing  = true
    application_logs {
      file_system_level = "Information"
    }
    http_logs {
      file_system {
        retention_in_days = 7
        retention_in_mb   = 35
      }
    }
  }

  # Configuración de implementación
  # The 'deployment' block has been removed as it is not valid for this resource.

  # Opciones de identidad
  identity {
    type = "SystemAssigned"
  }
}

# Outputs
output "database_server" {
  value = azurerm_mssql_server.sqlsrv.fully_qualified_domain_name
}

output "database_name" {
  value = azurerm_mssql_database.sqldb.name
}

output "backend_url" {
  value = "https://${azurerm_windows_web_app.backend.default_hostname}"
}