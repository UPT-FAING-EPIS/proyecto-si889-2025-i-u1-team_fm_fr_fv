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

Informe de Factibilidad

Versión *1.0*

|CONTROL DE VERSIONES||||||
| :-: | :- | :- | :- | :- | :- |
|Versión|Hecha por|Revisada por|Aprobada por|Fecha|Motivo|
|1\.0|MPV|AFM|ARV|10/10/2020|Versión Original|

<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

# **INDICE GENERAL**

[1. Descripción del Proyecto](#_Toc52661346)

[2. Riesgos](#_Toc52661347)

[3. Análisis de la Situación actual](#_Toc52661348)

[4. Estudio de Factibilidad](#_Toc52661349)

[4.1 Factibilidad Técnica](#_Toc52661350)

[4.2 Factibilidad económica](#_Toc52661351)

[4.3 Factibilidad Operativa](#_Toc52661352)

[4.4 Factibilidad Legal](#_Toc52661353)

[4.5 Factibilidad Social](#_Toc52661354)

[4.6 Factibilidad Ambiental](#_Toc52661355)

[5. Análisis Financiero](#_Toc52661356)

[6. Conclusiones](#_Toc52661357)


<div style="page-break-after: always; visibility: hidden">\pagebreak</div>

# Informe de Factibilidad

## 1. Descripción del Proyecto

### 1.1 Nombre del proyecto
Aplicación para la Generación Automatizada de un Diccionario de Datos

### 1.2 Duración del proyecto
6 meses (desde la fase de análisis hasta la implementación y prueba del sistema)

### 1.3 Descripción 
El proyecto se enfoca en crear una aplicación web que permita generar de forma automática un diccionario de datos a partir de la estructura de bases de datos relacionales como SQL Server. Esta herramienta está pensada para que desarrolladores, administradores de bases de datos, estudiantes y otros profesionales puedan documentar de manera rápida, ordenada y visual toda la información de una base de datos.

### 1.4 Objetivos

#### 1.4.1 Objetivo general
Desarrollar una aplicación que permita la generación automatizada de diccionarios de datos a partir de bases de datos existentes, facilitando la gestión y actualización continua de la información en sistemas de bases de datos.

#### 1.4.2 Objetivos Específicos
- Automatizar la extracción de metadatos de bases de datos.
- Generar un diccionario de datos estructurado en un formato accesible.
- Implementar una interfaz de usuario amigable para gestionar y actualizar los diccionarios de datos.
- Facilitar la integración de la aplicación con sistemas de gestión de bases de datos.

## 2. Riesgos
Existen varios riesgos que podrían afectar el éxito del proyecto tales como:
- La aplicación podría fallar o volverse lenta si procesa bases de datos muy grandes o muchos usuarios a la vez.
- Bases de datos mal diseñadas pueden generar diccionarios con errores o incompletos.
- Al inicio solo funcionará con SQL Server, lo que limita su uso en otros entornos.

## 3. Análisis de la Situación actual

### 3.1 Planteamiento del problema
Hoy en día la mayoría de desarrolladores y administradores de bases de datos tienen que documentar manualmente la estructura de sus bases de datos. Esto no solo es tardado y tedioso, sino que también aumenta las probabilidades de cometer errores o de que la documentación no esté actualizada. Además, la falta de documentación estructurada complica el mantenimiento de sistemas y puede hacer más difícil que otros desarrolladores entiendan cómo funciona la base de datos. Este proyecto busca resolver estas problemáticas mediante el desarrollo de una Aplicación para la Generación Automatizada de Diccionarios de Datos, que permitirá documentar bases de datos de manera rápida, visual y precisa, mejorando así la eficiencia y el acceso a la información técnica dentro de los entornos académicos y profesionales.

### 3.2 Consideraciones de hardware y software

#### Equipos (Hardware)
Se utilizarán 3 computadoras con características adecuadas para el desarrollo y prueba del sistema:
- Procesador: Intel Core i5 de octava generación o similar, con buen rendimiento para trabajar en programación, hacer pruebas y administrar el sistema.
- Sistema Operativo: Windows 10 o versiones más recientes. En caso de servidores, se recomienda usar Linux (si el proveedor de hosting lo permite) por ser más estable y económico.
- Memoria RAM: 16 GB DDR4, que permite trabajar sin problemas con el entorno de desarrollo, ejecutar servidores locales y usar varias aplicaciones al mismo tiempo.
- Accesorios: Monitor, teclado y mouse comunes serán suficientes para realizar las tareas necesarias.

#### Programas y Herramientas (Software)
- Lenguaje de programación: Se utilizará C# como lenguaje principal, junto con el framework ASP.NET Core para desarrollar el backend del sistema. Para la parte visual (frontend), se emplearán tecnologías web como HTML, CSS y JavaScript, lo que permitirá crear una interfaz interactiva y fácil de usar.
- Base de datos: La información se almacenará en SQL Server, incluyendo estructuras de bases de datos, relaciones y otros datos importantes generados por la aplicación.
- Entorno de desarrollo: Se trabajará con Visual Studio, ya que ofrece un entorno completo y eficiente para programar en C#, además de integrarse bien con SQL Server.
- Hosting y dominio: El sistema se alojará en un servidor con dominio propio, compatible con aplicaciones desarrolladas en ASP.NET Core y SQL Server.

## 4. Estudio de Factibilidad
Antes de empezar con el desarrollo del sistema, realizamos un estudio de factibilidad para asegurarnos de que el proyecto pueda llevarse a cabo sin problemas. Evaluamos si contamos con los recursos técnicos necesarios, analizamos los costos involucrados y revisamos si su implementación sería viable en la práctica. Durante este proceso, revisamos herramientas de programación, analizamos el equipo e infraestructura disponibles y estimamos los posibles gastos operativos. Luego de esta revisión, llegamos a la conclusión de que el proyecto sí es viable y que podemos desarrollarlo con éxito.

### 4.1 Factibilidad Técnica
- **Hardware**: Se utilizarán computadoras de gama media para el desarrollo, cada una con procesadores Intel Core i5 o superior y al menos 8 GB de RAM, suficientes para programar, probar y administrar el sistema de manera fluida. Para la gestión de datos y documentación, se requerirá un servidor con almacenamiento en la nube, lo que permitirá acceso remoto y seguro a la información generada por la aplicación.
- **Software**: El sistema se desarrollará en C#, utilizando ASP.NET Core para el backend y la creación de la interfaz web. Para manejar la visualización y exportación de la información, se usarán herramientas compatibles con formatos PDF, Excel y JSON. La base de datos será SQL Server, ideal para almacenar estructuras, relaciones y metadatos de las bases de datos analizadas. El proyecto se gestionará con GitHub, permitiendo control de versiones y trabajo colaborativo entre los desarrolladores.
- **Infraestructura de Red**: Se requerirá una conexión a internet estable con una velocidad mínima de 100 Mbps, tanto para acceder al servidor como para garantizar la correcta sincronización del sistema, especialmente en su versión en la nube.

### 4.2 Factibilidad Económica
Se analizaron los gastos relacionados con la creación, implementación y soporte continuo de la aplicación, concluyendo que el proyecto es sostenible desde el punto de vista económico. A continuación, se detallan los principales costos asociados a su desarrollo y funcionamiento.

#### 4.2.1 Costos Generales 
| Concepto | Cantidad | Costo unitario (S/) | Subtotal (S/) |
|----------|----------|---------------------|---------------|
| Computadoras para desarrollo | 3 | 2,500 | 7,500 |
| Licencias de software | 0 | 0 | 0 |
| Material de oficina (papelería, impresora, tinta) | - | 500 | 500 |
| **Total** | | | **8,000** |

#### 4.2.2 Costos operativos durante el desarrollo 
| Concepto | Cantidad | Costo Mensual (S/) | Total (S/) (6 meses) |
|----------|----------|---------------------|----------------------|
| Servicios básicos (agua, luz, internet) | 1 | 300 | 1,800 |
| Servidor en la nube | 1 | 250 | 1,500 |
| **Total** | | | **3,300** |

#### 4.2.3 Costos del ambiente
| Concepto | Costos (S/) |
|----------|-------------|
| Hosting | 250 |
| Dominio web (.com o .org) | 100 |
| Infraestructura de red (router, cableado) | 400 |
| **Total** | **750** |

#### 4.2.4 Costos de personal
| Rol | Cantidad | Salario Mensual (S/) | Duración (Mensual) | Subtotal (S/) |
|-----|----------|----------------------|---------------------|---------------|
| Desarrollador Backend | 1 | 1,000 | 6 | 6,000 |
| Desarrollador Frontend | 1 | 1,200 | 6 | 7,200 |
| Analista de Requerimientos | 1 | 1,000 | 6 | 6,000 |
| **Total** | | | | **19,200** |

#### 4.2.5 Costos totales del desarrollo del sistema
| Categoría | Costos Total (S/) |
|-----------|--------------------|
| Costos generales | 8,000 |
| Costos operativos | 3,300 |
| Costos del ambiente | 750 |
| Costos de personal | 19,200 |
| **Total** | **31,250** |

### 4.3 Factibilidad Operativa
El sistema propuesto está enfocado en mejorar la documentación de bases de datos, facilitando el trabajo de desarrolladores, administradores y estudiantes al automatizar la creación de diccionarios de datos. Esta herramienta busca ahorrar tiempo y esfuerzo, evitando que los usuarios tengan que elaborar manualmente reportes en formatos como PDF, Excel o JSON. Además, permitirá integrar fácilmente la documentación con otras plataformas o herramientas de trabajo colaborativo.
Ventajas del sistema:
- **Automatización de la documentación:** Permite generar diccionarios de datos de manera automática, reduciendo el riesgo de errores y agilizando el proceso de documentación técnica.
- **Mejor organización de la información:** La estructura de la base de datos se presentará de forma clara y ordenada, facilitando su uso en auditorías, mantenimiento y desarrollo.
- **Escalable y adaptable:** El sistema podrá ser actualizado e incluir nuevas funciones a futuro, como soporte para más motores de bases de datos o integraciones adicionales, según las necesidades del usuario.

### 4.4 Factibilidad Legal
El desarrollo e implementación de esta aplicación deberá seguir todas las normas legales y de seguridad informática vigentes, garantizando que la información extraída de las bases de datos sea tratada de forma segura, ética y conforme a la ley.
- **Protección de datos personales:** El sistema debe proteger la privacidad de la información procesada, evitando accesos no autorizados. Para ello, se aplicarán medidas de seguridad como cifrado y control de acceso, asegurando que los datos almacenados estén bien resguardados.
- **Propiedad intelectual:** Se definirán términos de uso claros para evitar conflictos sobre la propiedad de la información documentada. La aplicación no podrá usarse para manipular, copiar o distribuir información de bases de datos sin la debida autorización.
- **Seguridad digital:** La plataforma incluirá autenticación de usuarios y protocolos que eviten filtraciones de datos o accesos indebidos, cumpliendo con buenas prácticas en ciberseguridad.
- **Uso ético:** Se promoverá un uso responsable de la aplicación, asegurando que la documentación generada sea utilizada con fines legales y profesionales, no para actividades indebidas.

### 4.5 Factibilidad Social
La aplicación tendrá un impacto social positivo, ya que facilitará la documentación de bases de datos y fomentará el uso de herramientas digitales modernas. Al ser una aplicación gratuita y fácil de usar, permitirá que estudiantes y profesionales organicen y visualicen información sin necesidad de software costoso o conocimientos técnicos avanzados. Su diseño intuitivo garantiza que cualquier persona pueda aprovechar sus beneficios, promoviendo así la accesibilidad y el uso responsable de la tecnología en entornos educativos y laborales

### 4.6	Factibilidad Ambiental
- **Optimización del consumo energético:** La automatización del proceso evita tareas manuales prolongadas, lo que permite un uso más eficiente de los equipos y menor consumo de energía.
- **Menor huella de carbono:** Al permitir que los usuarios accedan a la documentación de forma remota, se reduce la necesidad de desplazarse, contribuyendo a la disminución de emisiones contaminantes.
- **Uso eficiente del almacenamiento digital:** La organización automática y el control de versiones evitan la creación de archivos duplicados, optimizando el espacio en servidores y dispositivos.
- **Conciencia ecológica:** Al utilizar esta herramienta, los usuarios desarrollan mayor conciencia sobre la importancia de la digitalización y el cuidado del medio ambiente en sus actividades académicas y profesionales.


## 5. Análisis Financiero

### 5.1 Justificación de la Inversión

#### 5.1.1 Beneficios del Proyecto

La implementación de la **Aplicación para la Generación Automatizada de un Diccionario de Datos** proporciona una serie de beneficios tanto tangibles como intangibles, que impactan directamente en la eficiencia y calidad de los procesos de desarrollo de software dentro de la organización.

**Beneficios Tangibles**:
- **Reducción del tiempo de documentación**: La automatización de la creación del diccionario de datos minimiza el tiempo invertido por analistas y desarrolladores en tareas manuales repetitivas.
- **Disminución de errores humanos**: La automatización reduce significativamente la posibilidad de inconsistencias o errores en la documentación técnica.
- **Ahorro en costos operativos**: Al mejorar la eficiencia en el proceso de documentación, se reducen los costos asociados al uso prolongado de recursos y herramientas.

**Beneficios Intangibles**:
- **Mayor confiabilidad de la información**: La información generada por la aplicación es precisa, actualizada y estructurada, lo que mejora la calidad general del proyecto.
- **Toma acertada de decisiones**: La disponibilidad inmediata de un diccionario de datos confiable facilita la toma de decisiones técnicas durante el desarrollo del sistema.
- **Mejora en la planificación y control de proyectos**: Contar con documentación estructurada desde etapas tempranas permite una mejor planificación y seguimiento de avances.
- **Cumplimiento de estándares de calidad y normativas**: La documentación automatizada ayuda a cumplir con buenas prácticas de desarrollo y requisitos exigidos por metodologías formales o auditorías.

#### 5.1.2 Criterios de Inversión

##### 5.1.2.1 Relación Beneficio/Costo (B/C)

**Egresos**:
Los gastos operacionales son parte del funcionamiento del software en producción.

| Gasto                                   | Precio Unitario (S/) | Cantidad | Subtotal (S/) |
|-----------------------------------------|----------------------|----------|---------------|
| Infraestructura cloud                   | 259                  | 1        | 259           |
| Especialista cloud                      | 400                  | 1        | 400           |
| Base de datos SQL en la nube (infraestructura) | 0.93               | 1        | 0.93          |
| Desarrollador                            | 350                  | 1        | 350           |
| **Total de Egresos**                    |                      |          | **1,009.93**   |

**Total de egresos anuales (12 meses)**: S/ 12,119.16

**Ingresos Anuales Estimados**:
- **Aumento de ingresos (por aumento en demanda)**: 25% → S/ 3,500
- **Reducción en costos operativos (por eficiencia)**: 20% → S/ 10,940
- **Ahorro en infraestructura (por migración a la nube o mejoras)**: 15% → S/ 21,100

**Ingreso total anual estimado**: **S/ 35,540.00**

**Tabla de Flujo de Caja y Evaluación Financiera del Proyecto**:

| Periodo | Ingreso (S/) | Egreso (S/)   | Flujo Efectivo (S/) |
|---------|--------------|---------------|---------------------|
| 0       | 0            | -31,250       | -31,250             |
| 1       | 35,540       | 12,119.16     | 23,420.84           |
| 2       | 25,540       | 12,119.16     | 13,420.84           |
| 3       | 25,540       | 12,119.16     | 13,420.84           |

**Evaluación Financiera**:

- **VAN**: S/ 43,146.41
- **VAN Positivo** (S/ 11,896.41): El proyecto es rentable, ya que genera un excedente por encima de la inversión inicial y la tasa de descuento (9%).
- **TIR**: 32% - Supera ampliamente el costo de oportunidad (9%), lo que confirma su viabilidad financiera.
- **Índice de Rentabilidad (B/C)**: 1.38 - Por cada sol invertido, se recupera S/ 1.38, reforzando su atractivo económico.

### 5.1.2.2 Valor Actual Neto (VAN)
El análisis del **VAN**, calculado en S/ 11,896.41, demuestra que el proyecto es financieramente viable, al superar la tasa de descuento del 9% y generar un retorno positivo sobre la inversión inicial de S/ 31,250.00. Esto se alinea con la **TIR** del 32%, indicando una alta rentabilidad.

### 5.1.2.3 Tasa Interna de Retorno (TIR)
La **TIR** del 32% no solo confirma la viabilidad del proyecto, sino que su amplio margen sobre la tasa de descuento (9%) sugiere un bajo riesgo financiero. Este resultado, junto al VAN positivo y un Índice de Rentabilidad de 1.38, justifica la implementación de la inversión.

## 6. Conclusiones

- **Viabilidad Financiera Comprobada**: El proyecto demuestra rentabilidad económica con un **VAN positivo** de S/ 11,896.41, una **TIR del 32%** que supera ampliamente la tasa de descuento del 9%, y un **Índice de Rentabilidad** de 1.38, confirmando que genera valor para los inversionistas.
  
- **Alta Rentabilidad y Sostenibilidad**: La significativa diferencia entre la **TIR (32%)** y la tasa mínima requerida (9%) garantiza un amplio margen de seguridad, asegurando la sostenibilidad del proyecto incluso ante posibles fluctuaciones del mercado.

- **Eficiencia en el Uso de Recursos**: El análisis de flujos de caja evidencia una estructura financiera eficiente, con capacidad para generar retornos positivos desde el primer año y mantener una trayectoria de crecimiento constante durante el período evaluado.

- **Bajo Riesgo Operativo**: Los indicadores financieros, respaldados por proyecciones conservadoras, sugieren un perfil de riesgo controlado, con capacidad para absorber variaciones moderadas en los costos operativos o ingresos.

### Recomendación de Implementación
Considerando los resultados del análisis financiero, técnico y de mercado, se recomienda la ejecución del proyecto, estableciendo un sistema de monitoreo periódico para garantizar el cumplimiento de las proyecciones y la rentabilidad esperada.

**Observación Final**:  
El proyecto cumple con todos los criterios de evaluación económica y financiera establecidos, demostrando ser una inversión segura y rentable bajo las condiciones actuales del mercado. Se sugiere implementar los controles de gestión necesarios para optimizar su desempeño operativo y financiero durante la etapa de ejecución.


