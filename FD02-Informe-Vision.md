<center>

[comment]: <img src="./media/media/image1.png" style="width:1.088in;height:1.46256in" alt="escudo.png" />

![./media/media/image1.png](./media/logo-upt.png)

**UNIVERSIDAD PRIVADA DE TACNA**

**FACULTAD DE INGENIERIA**

**Escuela Profesional de Ingeniería de Sistemas**

**Proyecto *Aplicación para la Generación Automatizada de un Diccionario de Datos***

Curso: *Patrones de Software*

Docente: *Mag. Patrick Cuadros Quiroga*

Integrantes:  

Daleska Nicolle Fernandez Villanueva                 (2021070308)  
Andree Sebastián Flores Meléndez                     (2017057494)  
Mario Antonio Flores Ramos                           (2018000597)  

**Tacna – Perú**

***2025***

</center>
<div style="page-break-after: always; visibility: hidden">\pagebreak</div>


*Aplicación para la Generación Automatizada de un Diccionario de Datos*

Docuemnto de Vision

Versión *1.0*

|CONTROL DE VERSIONES||||||
| :-: | :- | :- | :- | :- | :- |
|Versión|Hecha por|Revisada por|Aprobada por|Fecha|Motivo|
|1\.0|MPV|AFM|ARV|10/10/2020|Versión Original|

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>


**INDICE GENERAL**
#
[1.	Introducción](#_Toc52661346)

1.1	Propósito

1.2	Alcance

1.3	Definiciones, Siglas y Abreviaturas

1.4	Referencias

1.5	Visión General

[2.	Posicionamiento](#_Toc52661347)

2.1	Oportunidad de negocio

2.2	Definición del problema

[3.	Descripción de los interesados y usuarios](#_Toc52661348)

3.1	Resumen de los interesados

3.2	Resumen de los usuarios

3.3	Entorno de usuario

3.4	Perfiles de los interesados

3.5	Perfiles de los Usuarios

3.6	Necesidades de los interesados y usuarios

[4.	Vista General del Producto](#_Toc52661349)

4.1	Perspectiva del producto

4.2	Resumen de capacidades

4.3	Suposiciones y dependencias

4.4	Costos y precios

4.5	Licenciamiento e instalación

[5.	Características del producto](#_Toc52661350)

[6.	Restricciones](#_Toc52661351)

[7.	Rangos de calidad](#_Toc52661352)

[8.	Precedencia y Prioridad](#_Toc52661353)

[9.	Otros requerimientos del producto](#_Toc52661354)

b) Estandares legales

c) Estandares de comunicación	](#_toc394513800)37

d) Estandaraes de cumplimiento de la plataforma	](#_toc394513800)42

e) Estandaraes de calidad y seguridad	](#_toc394513800)42

[CONCLUSIONES](#_Toc52661355)

[RECOMENDACIONES](#_Toc52661356)

[BIBLIOGRAFIA](#_Toc52661357)

[WEBGRAFIA](#_Toc52661358)


<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

**<u>Informe de Visión</u>**

# 1. Introducción

## 1.1 Propósito
Este documento presenta la visión del proyecto "Aplicación para la Generación Automatizada de un Diccionario de Datos". Su objetivo es desarrollar una herramienta que permita extraer, organizar, visualizar y generar la estructura de un diccionario de datos de forma rápida y precisa.  
La aplicación facilitará la documentación y el análisis de los datos, ayudando a los desarrolladores y administradores de bases de datos a crear este documento de manera eficiente. Con ello, se mejorará la optimización del proceso de documentación, reduciendo el tiempo necesario para generar un diccionario de datos estructurado.

## 1.2 Alcance
El sistema se encargará de:
- Extraer la estructura de la base de datos (tablas, columnas, tipos de datos, relaciones y restricciones).
- Generar una representación en formato exportable a Excel o PDF.
- Integrarse con bases de datos relacionales como SQL, con la posibilidad de expandirse a otros motores en el futuro.
- Permitir la personalización de las descripciones de los elementos del diccionario de datos.
- Brindar una interfaz intuitiva para la navegación y exportación de la información.

## 1.3 Definiciones, Siglas y Abreviaturas
- **Diccionario de Datos**: Documento que describe la estructura de una base de datos, incluyendo sus entidades, atributos y relaciones.
- **ERD (Entity-Relationship Diagram)**: Representación gráfica de las relaciones entre entidades en una base de datos.
- **SGBD (Sistema de Gestión de Bases de Datos)**: Software que permite la creación, manipulación y administración de bases de datos.

## 1.4 Referencias
Este documento se ha elaborado tomando como base la documentación oficial de Microsoft SQL Server y el lenguaje de programación C#, así como guías de buenas prácticas en el desarrollo de aplicaciones orientadas a bases de datos. También se han considerado conceptos fundamentales del modelado de datos y la generación automatizada de documentación técnica.

## 1.5 Visión General
El sistema será una aplicación web diseñada para ayudar a los desarrolladores y estudiantes en la generación automática de diccionarios de datos. Facilitará la documentación y análisis de la estructura de las bases de datos, permitiendo visualizar de manera clara las entidades, atributos y relaciones mediante diagramas y formatos exportables.

# 2. Posicionamiento

## 2.1 Oportunidad de negocio
La documentación de bases de datos es fundamental para la escalabilidad, mantenimiento y auditoría de sistemas de información. Sin embargo, muchos desarrolladores y estudiantes de bases de datos deben realizar este proceso manualmente, lo que consume tiempo y aumenta la probabilidad de errores. Una aplicación que automatice este proceso mejorará la eficiencia y agilización en la documentación de bases de datos.

## 2.2 Definición del problema
Los sistemas de bases de datos suelen carecer de documentación actualizada y estructurada, lo que dificulta su comprensión para nuevos desarrolladores o administradores. La falta de un diccionario de datos automatizado complica la integración y mantenimiento de los sistemas. Este problema se resuelve proporcionando una herramienta que extraiga automáticamente la información del esquema de la base de datos y la presente de manera organizada y visual.

# 3. Descripción de los interesados y usuarios

## 3.1 Resumen de los interesados
Los principales interesados en el sistema incluyen:
- Desarrolladores de Software: Necesitan documentación clara para la integración y mantenimiento de bases de datos.
- Administradores de Bases de Datos: Requieren herramientas eficientes para gestionar y documentar la estructura de bases de datos.
- Gerentes de TI: Buscan optimizar procesos de documentación y garantizar la correcta administración de datos en la organización.
- Estudiantes e Investigadores: Necesitan documentar bases de datos como parte de su formación académica y proyectos de investigación.

## 3.2 Resumen de los usuarios
Los usuarios del sistema serán:
- **Analistas de Datos**: Utilizarán la aplicación para comprender y analizar la estructura de la base de datos.
- **Estudiantes e Investigadores**: Utilizarán la aplicación para documentar bases de datos en sus trabajos académicos y de investigación.
- **Equipos de Auditoría**: Verificarán la documentación de bases de datos en procesos de cumplimiento normativo.

## 3.3 Entorno de usuario
La aplicación estará disponible a través de un navegador web moderno, por lo que los usuarios podrán acceder a ella desde equipos de escritorio o portátiles con conexión a Internet. El entorno de uso está pensado principalmente para sistemas operativos Windows, ya que la herramienta estará desarrollada en C# bajo el entorno .NET, y se integrará con Microsoft SQL Server como base de datos principal. Se recomienda una resolución de pantalla mínima de 1366x768 para una visualización adecuada de los componentes gráficos y reportes generados.

## 3.4 Perfiles de los interesados
- **Desarrolladores de Software**: Usuarios con conocimientos técnicos que necesitan documentación estructurada para proyectos de desarrollo.
- **Administradores de Bases de Datos**: Expertos en gestión de bases de datos que requieren herramientas avanzadas para administración y documentación.
- **Directivos y Gerentes de TI**: Responsables de supervisar la correcta gestión de la información en la empresa.
- **Estudiantes e Investigadores**: Usuarios en formación que requieren comprender y documentar bases de datos para sus estudios o proyectos de investigación.

## 3.5 Perfiles de los Usuarios
- **Analistas de Datos**: Profesionales que requieren comprender y documentar la estructura de bases de datos.
- **Estudiantes e Investigadores**: Necesitan documentar estructuras de bases de datos en sus trabajos académicos.
- **Equipos de Auditoría**: Revisan documentación de bases de datos para garantizar el cumplimiento de normativas.

## 3.6 Necesidades de los interesados y usuarios
- **Automatización de la documentación**: Reducir el tiempo y esfuerzo manual en la generación de diccionarios de datos.
- **Visualización clara**: Proveer diagramas interactivos para facilitar la comprensión de la estructura de la base de datos.
- **Facilidad de aprendizaje**: Proveer documentación accesible y explicaciones para estudiantes e investigadores sin experiencia en bases de datos.

# 4. Vista General del Producto

## 4.1 Perspectiva del producto
El sistema será una aplicación web que permitirá la generación automatizada de diccionarios de datos, proporcionando una solución eficiente para la documentación y análisis de la estructura de bases de datos. También incluirá funcionalidades avanzadas para la exportación de reportes en diferentes formatos y la integración con plataformas de gestión de bases de datos.

## 4.2 Resumen de capacidades
El sistema permitirá la conexión con bases de datos relacionales, la extracción automática de su estructura, la generación de diccionarios en diversos formatos y la creación de diagramas Entidad-Relación con Mermaid.js. También contará con una interfaz optimizada para la visualización y exportación de información, además de un módulo educativo que brindará soporte a estudiantes y docentes en el aprendizaje de bases de datos. En el ámbito empresarial, se incorporará compatibilidad con herramientas de gestión documental para facilitar la auditoría de bases de datos.

## 4.3 Suposiciones y dependencias
- La aplicación requerirá conexión a Internet estable para su funcionamiento óptimo en la nube.
- Se dependerá de la estructura de la base de datos, por lo que bases de datos mal diseñadas podrían afectar la calidad del diccionario generado.
- La compatibilidad inicial se enfocará SQL, con planes de expansión a otros sistemas de bases de datos en futuras versiones.
- Se prevé que los usuarios tendrán conocimientos básicos de bases de datos para interpretar la documentación generada correctamente.

## 4.4 Costos y precios
- **Versión gratuita**: Incluirá funcionalidades básicas como la visualización de estructuras y exportación en formatos limitados.
- **Versión premium**: Incluirá generación avanzada de reportes, exportación en múltiples formatos y personalización de documentos.
- **Licencias empresariales**: Se ofrecerán planes personalizados para empresas que necesiten soporte técnico especializado y mayor seguridad en la gestión de datos.
- **Costo de infraestructura**: La versión en la nube requerirá inversiones en servidores y seguridad para el almacenamiento de datos y procesamiento en tiempo real.

## 4.5 Licenciamiento e instalación
- **Licencia de uso**: Se ofrecerán modelos de licencia open-source para la comunidad y una versión comercial para empresas.
- **Instalación en servidores**: La aplicación podrá instalarse en servidores propios o utilizarse como un servicio en la nube.
- **Actualizaciones automáticas**: La versión en la nube recibirá actualizaciones periódicas sin necesidad de intervención del usuario.

# 5. Características del producto
- **Automatización completa**: Generación automática de diccionarios de datos con extracción directa de bases de datos.
- **Exportación flexible**: Soporte para múltiples formatos como JSON, PDF, Excel y HTML.
- **Compatibilidad con bases de datos**: Inicialmente soportará MySQL y SQL, con planes de expansión a otros motores.
- **Visualización interactiva**: Diagramas Entidad-Relación con Mermaid.js para una mejor comprensión de la estructura de datos.
- **Seguridad avanzada**: Protección de datos mediante cifrado y autenticación basada en roles.

# 6. Restricciones
- Solo será compatible con bases de datos relacionales en su versión inicial.
- El rendimiento puede verse afectado con bases de datos extremadamente grandes.

# 7. Rangos de calidad
- **Precisión** del 99.9% en la extracción de metadatos y generación de reportes.
- **Interfaz** intuitiva y responsiva que garantice una experiencia de usuario eficiente.
- **Soporte** para múltiples idiomas para ampliar su accesibilidad a diferentes regiones.

# 8. Precedencia y Prioridad
- **Prioridad alta**: Generación de diccionarios de datos, compatibilidad con bases de datos y exportación de reportes.
- **Prioridad media**: Personalización de documentos y generación de reportes avanzados.
- **Prioridad baja**: Integración con herramientas de inteligencia de negocios y soporte para bases de datos SQL.

# 9. Otros requerimientos del producto

### a) Estándares legales
- Cumplimiento con normativas internacionales de protección de datos como GDPR y la Ley de Protección de Datos Personales.
- Uso de cifrado en la transmisión de datos para garantizar la seguridad de la información.

### b) Estándares de comunicación
- La aplicación utilizará el protocolo HTTPS para garantizar la comunicación segura entre el cliente y el servidor.
- Las solicitudes entre el frontend y el backend se manejarán mediante servicios RESTful, utilizando formatos de intercambio de datos como JSON.
- Se aplicarán encabezados de seguridad (como CORS, Content-Security-Policy y X-Content-Type-Options) para proteger la integridad y confidencialidad de los datos transmitidos.
- Se implementarán mecanismos de autenticación y autorización en las solicitudes para validar el acceso a los recursos.

### c) Estándares de cumplimiento de la plataforma
- Compatible con los principales navegadores web y sistemas operativos.
- Diseño responsivo para su correcto funcionamiento en dispositivos móviles y de escritorio.

### d) Estándares de calidad y seguridad
- Aplicación de pruebas de seguridad periódicas para detectar vulnerabilidades.
- Control de acceso basado en roles para restringir el uso no autorizado.

# CONCLUSIONES
- La aplicación automatiza la documentación de bases de datos, facilitando su gestión y mantenimiento.
- Su uso beneficiará tanto a profesionales como a estudiantes que necesiten generar reportes documentados de manera eficiente.
- La integración de herramientas de visualización y exportación mejora la comprensión de las estructuras de bases de datos.
- Se garantiza la escalabilidad del sistema, permitiendo su expansión con nuevas funcionalidades en el futuro.

# RECOMENDACIONES
- **Ampliar compatibilidad**: Incluir soporte para otros motores de bases de datos.
- **Optimizar rendimiento**: Implementar mejoras en la extracción de datos para bases de datos de gran tamaño.
- **Capacitación y tutoriales**: Desarrollar guías interactivas para facilitar el aprendizaje de nuevos usuarios.
- **Mejorar seguridad**: Aplicar auditorías constantes para reforzar la protección de la información.

# BIBLIOGRAFÍA

# WEBGRAFÍA
