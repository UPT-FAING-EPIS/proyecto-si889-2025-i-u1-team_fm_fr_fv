# Aplicación para la Generación Automatizada de un Diccionario de Datos

## Introducción

### Propósito (Diagrama 4+1)

La Aplicación para la Generación Automatizada de un Diccionario de Datos tiene como objetivo crear una herramienta que permita extraer, organizar y generar un diccionario de datos de forma rápida y precisa. Facilitará la documentación y el análisis de bases de datos, ayudando a desarrolladores y administradores a crear diccionarios de forma eficiente, optimizando el proceso y reduciendo significativamente el tiempo de trabajo.

Desde una visión global de arquitectura basada en el modelo 4+1:

- **Vista lógica:** módulos que extraen, procesan y presentan los datos.
- **Vista de procesos:** prioriza la eficiencia para procesar grandes bases de datos rápidamente.
- **Vista de desarrollo:** estructura modular y fácil de mantener.
- **Vista física:** se puede instalar en servidores locales o en la nube.

---

## Alcance

El sistema se encargará de:

- Extraer la estructura de la base de datos (tablas, columnas, tipos de datos, relaciones y restricciones).
- Generar una representación en formato exportable a PDF o Word.
- Integrarse con bases de datos relacionales como SQL, con la posibilidad de expandirse a otros motores en el futuro.
- Brindar una interfaz intuitiva para la navegación y exportación de la información.

---

## Definición, siglas y abreviaturas

- **Diccionario de Datos:** Documento que describe la estructura de una base de datos, incluyendo sus entidades, atributos y relaciones.
- **ERD (Entity-Relationship Diagram):** Representación gráfica de las relaciones entre entidades en una base de datos.
- **SGBD (Sistema de Gestión de Bases de Datos):** Software que permite la creación, manipulación y administración de bases de datos.

---

## Objetivos y Restricciones Arquitectónicas

El objetivo es desarrollar una aplicación web que automatice la extracción, organización y generación de diccionarios de datos a partir de bases de datos relacionales, optimizando el proceso de documentación y facilitando su análisis y actualización.

---

### Priorización de Requerimientos

| ID | Nombre del Requisito | Descripción de Requisito | Prioridad |
|----|-----------------------|---------------------------|-----------|
| CU-001 | Ingreso y validación de credenciales para conexión a base de datos | El sistema debe permitir a un usuario nuevo ingresar los parámetros necesarios para establecer una conexión con una base de datos. | Alta |
| CU-002 | Generación automática de diccionario técnico desde la base de datos | El sistema debe extraer la estructura completa de la base de datos y generar un diccionario técnico organizado. | Alta |
| CU-003 | Generación automática de descripciones y objetivos de tablas usando IA | Utiliza IA para generar descripción y objetivo de cada tabla basándose en nombres y columnas. | Alta |
| CU-004 | Visualización de tablas en formato de plantilla tipo ficha | Presenta cada tabla con sus detalles en formato de ficha navegable. | Media-Alta |
| CU-005 | Generación de documento Word o PDF con el diccionario de datos | Exportación del diccionario completo en documento profesional. | Alta |
| CU-006 | Inicio de sesión para usuarios | Autenticación de usuarios mediante formulario. | Alta |
| CU-007 | Registro de nuevos usuarios | Registro mediante correo, nombre de usuario y contraseña. | Alta |

---

## Requerimientos Funcionales

| ID | Nombre del Requisito | Descripción de Requisito | Prioridad |
|----|-----------------------|---------------------------|-----------|
| RF-001 | Registro de Usuario | Permitir registro con nombre, correo y contraseña. | Alta |
| RF-002 | Validación de Correo y Usuario | Validar que no se repita correo o usuario. | Alta |
| RF-003 | Validación de Contraseña | Mínimo 8 caracteres, 1 mayúscula, 1 minúscula y 1 carácter especial. | Alta |
| RF-004 | Inicio de Sesión | Login con usuario o correo + contraseña. | Alta |
| RF-005 | Mensaje de Error en Login | Notificar credenciales incorrectas. | Alta |
| RF-006 | Recuperación de Contraseña | Envío de enlace al correo del usuario. | Alta |
| RF-007 | Ingreso de Credenciales de Conexión | Formulario para ingresar datos de conexión a la base. | Alta |
| RF-008 | Validación de Campos de Conexión | Verifica que todos los campos estén completos. | Alta |
| RF-009 | Validación de Formato de Conexión | Valida formatos correctos en los campos. | Alta |
| RF-010 | Intento de Conexión | Prueba conexión y muestra mensaje de resultado. | Alta |
| RF-011 | Guardar Credenciales | Opción para guardar credenciales para el futuro. | Media |
| RF-012 | Extracción de Estructura | Obtiene toda la información de tablas, campos y relaciones. | Alta |
| RF-013 | Generación de Diccionario Técnico | Genera automáticamente el diccionario estructurado. | Alta |
| RF-014 | Visualización de Tablas | Muestra la información en plantillas visuales. | Alta |
| RF-015 | Generación de Descripción de Tablas | Crea descripciones basadas en nombres y columnas. | Alta |
| RF-016 | Generación de Objetivo | Utiliza IA para describir la función de cada tabla. | Alta |
| RF-017 | Revisión de Descripciones y Objetivos | El usuario revisa antes de guardar los textos generados. | Alta |
| RF-018 | Almacenamiento de Descripciones y Objetivos | Permite guardar las descripciones y objetivos generados. | Alta |
| RF-019 | Visualización de Plantillas | Muestra tablas en fichas con toda la información relevante. | Alta |
| RF-020 | Navegación entre Fichas | Permite navegar entre fichas de forma eficiente. | Alta |
| RF-021 | Presentación Clara y Ordenada | Interfaz amigable, clara y bien estructurada. | Alta |
| RF-022 | Generación de Documento Word o PDF | Exporta el diccionario completo en formato profesional. | Alta |
| RF-023 | Plantilla Profesional | Documento debe seguir un diseño profesional. | Alta |
| RF-024 | Descarga de Documento | Permite descargar el archivo generado. | Alta |
| RF-025 | Diccionario de Datos Completo | Debe incluir tablas, campos, claves, descripciones y relaciones. | Alta |

---

## Requerimientos No Funcionales – Atributos de Calidad

| ID | Nombre del Requisito | Descripción de Requisito | Prioridad |
|----|----------------------|---------------------------|-----------|
| RNF-001 | Seguridad de Acceso | Contraseñas deben almacenarse con hashing y autenticación segura. | Alta |
| RNF-002 | Escalabilidad | Soporte para crecimiento en usuarios y volumen de datos. | Alta |
| RNF-003 | Interfaz de Usuario (UI) | Interfaz intuitiva, responsive y compatible con móviles. | Alta |
| RNF-004 | Seguridad de Comunicación | Comunicación cifrada con HTTPS/TLS. | Alta |

---

## Restricciones

- **Presupuestarias:**  
  - Se usará un presupuesto limitado.  
  - Se priorizarán tecnologías gratuitas o de código abierto.

- **Temporales:**  
  - Plazo máximo: 6 meses.  
  - Debe incluir fases de análisis, desarrollo, pruebas e implementación.

---
