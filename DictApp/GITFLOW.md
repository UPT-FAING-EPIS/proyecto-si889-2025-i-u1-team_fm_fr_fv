# GitFlow para el Backend de DictApp

Este documento explica cómo usar el flujo de trabajo GitFlow configurado para el desarrollo del backend de DictApp.

## Estructura de Ramas

Nuestro flujo de trabajo de Git sigue el modelo GitFlow con las siguientes ramas:

- **main**: Código en producción. Solo se actualiza mediante fusiones de ramas `release/` o `hotfix/`.
- **develop**: Rama principal de desarrollo, contiene el código más reciente listo para la próxima versión.
- **feature/nombre-caracteristica**: Ramas para desarrollar nuevas características.
- **release/X.Y.Z**: Ramas para preparar una nueva versión para producción.
- **hotfix/descripcion-fix**: Ramas para corregir errores críticos en producción.

## Flujo de Trabajo

### Desarrollo de Nuevas Características

1. Crear una rama `feature/` desde `develop`:
   ```bash
   git checkout develop
   git pull
   git checkout -b feature/nombre-caracteristica
   ```

2. Implementar y commitear los cambios:
   ```bash
   git add .
   git commit -m "Descripción del cambio"
   ```

3. Publicar la característica:
   ```bash
   git push -u origin feature/nombre-caracteristica
   ```

4. Crear un Pull Request a `develop` cuando la característica esté completa.

### Preparación de Releases

1. Crear una rama `release/` desde `develop`:
   ```bash
   git checkout develop
   git pull
   git checkout -b release/X.Y.Z
   ```

2. Ajustes finales, correcciones de bugs menores:
   ```bash
   git add .
   git commit -m "Ajuste para release X.Y.Z"
   ```

3. Finalizar la release:
   ```bash
   git checkout main
   git pull
   git merge release/X.Y.Z --no-ff
   git tag -a vX.Y.Z -m "Versión X.Y.Z"
   git push origin main --tags
   
   git checkout develop
   git merge release/X.Y.Z --no-ff
   git push origin develop
   ```

### Corrección de Errores en Producción

1. Crear una rama `hotfix/` desde `main`:
   ```bash
   git checkout main
   git pull
   git checkout -b hotfix/descripcion-fix
   ```

2. Implementar la corrección:
   ```bash
   git add .
   git commit -m "Fix: descripción del error corregido"
   ```

3. Finalizar el hotfix:
   ```bash
   git checkout main
   git pull
   git merge hotfix/descripcion-fix --no-ff
   git tag -a vX.Y.Z+1 -m "Versión X.Y.Z+1"
   git push origin main --tags
   
   git checkout develop
   git merge hotfix/descripcion-fix --no-ff
   git push origin develop
   ```

## Integración Continua

El proyecto tiene configurados workflows de GitHub Actions para:

1. **Compilación y pruebas** en cada push a cualquier rama principal o PR.
2. **Análisis de código con SonarCloud** tras cada compilación exitosa.
3. **Despliegue automático**:
   - En `develop`: Despliegue al entorno de desarrollo
   - En `release/*`: Despliegue al entorno de staging
   - En `main`: Despliegue al entorno de producción

## Reglas Importantes

- No se permiten commits directos a `main` o `develop`.
- Todas las características se desarrollan en ramas `feature/`.
- Las nuevas versiones se preparan en ramas `release/`.
- Las correcciones urgentes en producción se implementan en ramas `hotfix/`.