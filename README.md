# Heroes API

Este proyecto es una API para gestionar héroes utilizando NestJS y TypeORM. La API permite crear, actualizar, buscar y eliminar héroes. Además, proporciona una documentación interactiva utilizando Swagger.

## Requisitos

- Node.js (versión 12 o superior)
- npm (versión 6 o superior)

## Instalación

1. Clona el repositorio:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd <NOMBRE_DEL_REPOSITORIO>
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Configura las variables de entorno:

    Renombra el archivo `.env.example` a `.env` y asegúrate de que contenga las siguientes variables:
    ```
    PORT=3000
    DB_NAME=verceldb
    DB_USER=default
    DB_PASS=sIf4rSVqjld9
    DB_HOST=ep-mute-smoke-a4deemv5-pooler.us-east-1.aws.neon.tech
    ```

4. Inicia el servidor de desarrollo:
    ```bash
    npm run start:dev
    ```

## Uso

Una vez que el servidor esté en funcionamiento, puedes acceder a la documentación Swagger para explorar y probar los endpoints disponibles. La documentación Swagger estará disponible en:

[http://localhost:3000/api](http://localhost:3000/api)

## Endpoints

### Crear un héroe

- **URL:** `/heroes`
- **Método:** `POST`
- **Cuerpo:**
  ```json
  {
    "name": "SuperMan",
    "power": "Strong, laser vision",
    "comicHouse": "DC"
  }
