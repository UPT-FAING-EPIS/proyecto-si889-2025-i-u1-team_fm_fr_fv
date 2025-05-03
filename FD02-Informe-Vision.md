# UNIVERSIDAD PRIVADA DE TACNA

## FACULTAD DE INGENIERÍA
### Escuela Profesional de Ingeniería de Sistemas

---

## Proyecto: Aplicación para la Generación Automatizada de un Diccionario de Datos
### Curso: Patrones de Software
#### Docente: Mag. Patrick Cuadros Quiroga

#### Integrantes:
- Daleska Nicolle Fernandez Villanueva (2021070308)
- Andree Sebastian Flores Melendez (2017057494)
- Mario Antonio Flores Ramos (2018000597)

---

### Tacna – Perú
### 2025

---

## CONTROL DE VERSIONES
| Versión | Hecha por | Revisada por | Aprobada por | Fecha      | Motivo         |
|---------|-----------|--------------|--------------|------------|----------------|
| 1.0     | DFV       | AFM             |  MFR            | 21/04/2025 | Versión Original |

---

## Aplicación para la Generación Automatizada de un Diccionario de Datos
### Documento de Visión

#### Versión {1.0}

## CONTROL DE VERSIONES
| Versión | Hecha por | Revisada por | Aprobada por | Fecha      | Motivo         |
|---------|-----------|--------------|--------------|------------|----------------|
| 1.0     | DFV       |  AFM            |  MFR            | 21/04/2025 | Versión Original |

---

## ÍNDICE GENERAL
1. [Introducción](#introducción)  
   1.1 Propósito  
   1.2 Alcance  
   1.3 Definiciones, Siglas y Abreviaturas  
   1.4 Referencias  
   1.5 Visión General  
2. [Posicionamiento](#posicionamiento)  
   2.1 Oportunidad de negocio  
   2.2 Definición del problema  
3. [Descripción de los interesados y usuarios](#descripción-de-los-interesados-y-usuarios)  
   3.1 Resumen de los interesados  
   3.2 Resumen de los usuarios  
   3.3 Entorno de usuario  
   3.4 Perfiles de los interesados  
   3.5 Perfiles de los Usuarios  
   3.6 Necesidades de los interesados y usuarios  
4. [Vista General del Producto](#vista-general-del-producto)  
   4.1 Perspectiva del producto  
   4.2 Resumen de capacidades  
   4.3 Suposiciones y dependencias  
   4.4 Costos y precios  
   4.5 Licenciamiento e instalación  
5. [Características del producto](#características-del-producto)  
6. [Restricciones](#restricciones)  
7. [Rangos de calidad](#rangos-de-calidad)  
8. [Precedencia y Prioridad](#precedencia-y-prioridad)  
9. [Otros requerimientos del producto](#otros-requerimientos-del-producto)  
   a) Estándares legales  
   b) Estándares de comunicación  
   c) Estándares de cumplimiento de la plataforma  
   d) Estándares de calidad y seguridad  
10. [Conclusiones](#conclusiones)  
11. [Recomendaciones](#recomendaciones)  
12. [Bibliografía](#bibliografía)  
13. [Webgrafía](#webgrafía)  

---

## 1. Introducción  

### 1.1 Propósito
Este documento presenta la visión del proyecto "Aplicación para la Generación Automatizada de un Diccionario de Datos". Su objetivo es desarrollar una herramienta que permita extraer, organizar, visualizar y generar la estructura de un diccionario de datos de forma rápida y precisa. La aplicación facilitará la documentación y el análisis de los datos, ayudando a los estudiantes, desarrolladores y administradores de bases de datos a crear este documento de manera eficiente. Con ello, se mejorará la optimización del proceso de documentación, reduciendo el tiempo necesario para generar un diccionario de datos estructurado.

### 1.2 Alcance
El sistema se encargará de:
- Desarrollo de una aplicación web para la generación automatizada de diccionarios de datos.
- Compatibilidad inicial con bases de datos relacionales como MySQL y SQL Server y con posibilidad de compatibilidad con otras a futuro.
- Permitir la extracción automática de metadatos (tablas, columnas, tipos de datos, claves primarias/foráneas, etc.).
- Generación del diccionario de datos estructurado y exportable en formatos como PDF y Word.
- Inclusión de una interfaz de usuario amigable, orientada tanto a usuarios técnicos como estudiantes.
- Implementación de funcionalidades básicas de seguridad para proteger el acceso a la información.
- Mejora en los procesos de documentación, mantenimiento y comprensión de estructuras de bases de datos.

### 1.3 Definiciones, Siglas y Abreviaturas
- **Diccionario de Datos:** Documento que describe la estructura de una base de datos, incluyendo sus entidades, atributos y relaciones.
- **ERD (Entity-Relationship Diagram):** Representación gráfica de las relaciones entre entidades en una base de datos.

### 1.4 Referencias
Para el desarrollo de la "Aplicación para la Generación Automatizada de un Diccionario de Datos", se han consultado diversas fuentes que abarcan desde los principios fundamentales de las bases de datos hasta las mejores prácticas en la documentación técnica.
- **Date, C. J.** (2004). *An Introduction to Database Systems* (8th ed.). Este libro proporciona una sólida comprensión de los principios fundamentales que sustentan las bases de datos, los cuales son esenciales para la implementación del sistema propuesto.
- **Elmasri, R., & Navathe, S. B.** (2015). *Fundamentals of Database Systems* (7th ed.). Este trabajo profundiza en los fundamentos teóricos de las bases de datos, incluidos los modelos de datos, las relaciones entre entidades y la normalización, los cuales son principios básicos para entender cómo manejar las bases de datos de manera eficiente.

### 1.5 Visión General
El sistema será una aplicación web diseñada para ayudar a los desarrolladores y estudiantes en la generación automática de diccionarios de datos. Facilitará la documentación y análisis de la estructura de las bases de datos, permitiendo visualizar de manera clara las entidades, atributos y relaciones mediante diagramas y formatos exportables.

---

## 2. Posicionamiento  

### 2.1 Oportunidad de negocio
La documentación de bases de datos es fundamental para la escalabilidad, mantenimiento y auditoría de sistemas de información. Sin embargo, muchos desarrolladores y estudiantes de bases de datos deben realizar este proceso manualmente, lo que consume tiempo y aumenta la probabilidad de errores. Una aplicación que automatice este proceso mejorará la eficiencia y agilización en la documentación de bases de datos.

### 2.2 Definición del problema
Los sistemas de bases de datos suelen carecer de documentación actualizada y estructurada, lo que dificulta su comprensión para nuevos desarrolladores o administradores. La falta de un diccionario de datos automatizado complica la integración y mantenimiento de los sistemas. Este problema se resuelve proporcionando una herramienta que extraiga automáticamente la información del esquema de la base de datos y la presente de manera organizada y visual.

---

## 3. Descripción de los interesados y usuarios  

### 3.1 Resumen de los interesados
Los principales interesados en el sistema incluyen:
- Desarrolladores de Software: Necesitan documentación clara para la integración y mantenimiento de bases de datos.
- Administradores de Bases de Datos: Requieren herramientas eficientes para gestionar y documentar la estructura de bases de datos.
- Gerentes de TI: Buscan optimizar procesos de documentación y garantizar la correcta administración de datos en la organización.
- Estudiantes e Investigadores: Necesitan documentar bases de datos como parte de su formación académica y proyectos de investigación.

### 3.2 Resumen de los usuarios
Los usuarios del sistema serán:
- Analistas de Datos: Utilizarán la aplicación para comprender y analizar la estructura de la base de datos.
- Estudiantes e Investigadores: Utilizarán la aplicación para documentar bases de datos en sus trabajos académicos y de investigación.
- Equipos de Auditoría: Verificarán la documentación de bases de datos en procesos de cumplimiento normativo.

### 3.3 Entorno de usuario
El sistema está diseñado para ser utilizado por usuarios con diferentes niveles de experiencia y necesidades. Los usuarios clave incluyen desarrolladores de software, administradores de bases de datos, estudiantes y analistas de datos.

- **Desarrolladores de software:** Utilizan la herramienta para generar documentación precisa de bases de datos como parte del proceso de desarrollo o mantenimiento de sistemas.
- **Administradores de bases de datos:** Son responsables de mantener la integridad de las bases de datos, y usan la herramienta para asegurar que la documentación de las estructuras de bases de datos esté siempre actualizada y accesible.
- **Estudiantes e investigadores:** Usan la herramienta principalmente para fines académicos, para entender mejor las bases de datos, generar informes o proyectos de investigación.
- **Analistas de datos:** Aprovechan la herramienta para explorar la estructura de bases de datos y hacer análisis de datos eficientemente.

---

## 4. Vista General del Producto  

### 4.1 Perspectiva del producto
El sistema será una aplicación web que permitirá la generación automatizada de diccionarios de datos, proporcionando una solución eficiente para la documentación y análisis de la estructura de bases de datos. También incluirá funcionalidades avanzadas para la exportación de reportes en diferentes formatos y la integración con plataformas de gestión de bases de datos.

### 4.2 Resumen de capacidades
El sistema permitirá la conexión con bases de datos relacionales, la extracción automática de su estructura, la generación de diccionarios en diversos formatos y la creación de diagramas Entidad-Relación con Mermaid.js. También contará con una interfaz optimizada para la visualización y exportación de información, además de un módulo educativo que brindará soporte a estudiantes y docentes en el aprendizaje de bases de datos.

---

## 5. Características del producto
- **Automatización completa:** Generación automática de diccionarios de datos con extracción directa de bases de datos.
- **Exportación flexible:** Soporte para múltiples formatos como PDF y Word.
- **Compatibilidad con bases de datos:** Inicialmente soportará MySQL y SQL, con planes de expansión a otros motores.
- **Visualización interactiva:** Diagramas Entidad-Relación con Mermaid.js para una mejor comprensión de la estructura de datos.
- **Seguridad avanzada:** Protección de datos mediante cifrado y autenticación basada en roles.

---

## 6. Restricciones
- Solo será compatible con bases de datos relacionales en su versión inicial.
- El rendimiento puede verse afectado con bases de datos extremadamente grandes.

---

## 7. Rangos de calidad
- Precisión del 99.9% en la extracción de metadatos y generación de reportes.
- Interfaz intuitiva y responsiva que garantice una experiencia de usuario eficiente.
- Soporte para múltiples idiomas para ampliar su accesibilidad a diferentes regiones.

---

## 8. Precedencia y Prioridad
- **Prioridad alta:** Generación de diccionarios de datos, compatibilidad con bases de datos y exportación de reportes.
- **Prioridad media:** Personalización de documentos y generación de reportes avanzados.
- **Prioridad baja:** Integración con herramientas de inteligencia de negocios y soporte para bases de datos SQL.

---

## 9. Otros requerimientos del producto  

### a) Estándares legales
Cumplimiento con normativas internacionales de protección de datos como GDPR y la Ley de Protección de Datos Personales. Uso de cifrado en la transmisión de datos para garantizar la seguridad de la información.

### b) Estándares de comunicación
El sistema empleará los protocolos HTTP/HTTPS para la comunicación web y SQL para interactuar con bases de datos. Los mensajes de error serán claros y estructurados, facilitando la solución de problemas. Además, la aplicación garantizará la interoperabilidad con otros sistemas mediante la exportación de documentos en formatos como PDF y Word, y su compatibilidad con herramientas de gestión de bases de datos. Se asegurará la accesibilidad al ofrecer soporte multilingüe y una interfaz intuitiva, y protegerá la comunicación mediante cifrado SSL/TLS para salvaguardar la información sensible.

### c) Estándares de cumplimiento de la plataforma
Compatible con los principales navegadores web y sistemas operativos. Diseño responsivo para su correcto funcionamiento en dispositivos móviles y de escritorio.

### d) Estándares de calidad y seguridad
Aplicación de pruebas de seguridad periódicas para detectar vulnerabilidades. Control de acceso basado en roles para restringir el uso no autorizado.

---

## 10. Conclusiones
La aplicación automatiza la documentación de bases de datos, facilitando su gestión y mantenimiento. Su uso beneficiará tanto a profesionales como a estudiantes que necesiten generar reportes documentados de manera eficiente. La integración de herramientas de visualización y exportación mejora la comprensión de las estructuras de bases de datos. Se garantiza la escalabilidad del sistema, permitiendo su expansión con nuevas funcionalidades en el futuro.

---

## 11. Recomendaciones
- **Ampliar compatibilidad:** Incluir soporte para otros motores de bases de datos.
- **Optimizar rendimiento:** Implementar mejoras en la extracción de datos para bases de datos de gran tamaño.
- **Capacitación y tutoriales:** Desarrollar guías interactivas para facilitar el aprendizaje de nuevos usuarios.
- **Mejorar seguridad:** Aplicar auditorías constantes para reforzar la protección de la información.

---

## 12. Bibliografía

---

## 13. Webgrafía
