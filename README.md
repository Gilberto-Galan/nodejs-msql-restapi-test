# Proyecto NodeJS
Creado con el uso de NodeJs, Express & MYSQL

## Ejecutar localmente

Clona el repositorio

```bash
  git clone https://link-to-project
```

Ve a la direccion del 

```bash
  cd nodejs-mysql-restapi
```

### Instalacion de paqueteria

Inicialmente arrancamos iniciando el npm
```bash
    npm init -yes
```

Otro paquete que se recomienda usar es nodemon, con este evitamos estar reiniciando el servidor por cada cambio y este nos ayuda seguir ejecutando el codigo
```bash
    npm i nodemon -D
```

usando npm instalamos la siguiente paqueteria:

```bash 
    npm i express mysql2
```
En este entorno se uso el `env` para configuracion que se utiliza para almacenar variables de entorno y esto nos resulta facil la configuración
```bash
    npm i dotenv
```

**Ejecutar servidor local**

```bash
  npm run dev
```

## Explicacion del Proyecto RESTAPI

Es una aplicación construida utilizando Node.js como el entorno de ejecución del lado del servidor, MySQL como la base de datos, y sigue el estilo arquitectónico REST para la comunicación entre el cliente y el servidor.

 Una explicación detallada de cada componente y cómo funcionan juntos:

 * **Node.js**  : Es un entorno de ejecución de JavaScript del lado del servidor que permite ejecutar código JavaScript en el servidor. Node.js es conocido por su rendimiento y escalabilidad, y es ampliamente utilizado para construir aplicaciones web y APIs.

 * **MySQL**: Es un sistema de gestión de bases de datos relacional (RDBMS) que utiliza el lenguaje SQL (Structured Query Language) para administrar y manipular datos en una base de datos. MySQL es una opción popular para almacenar datos estructurados en aplicaciones web debido a su rendimiento, confiabilidad y facilidad de uso.

 * **API REST**: Es un estilo arquitectónico para diseñar sistemas de software distribuidos que utilizan el protocolo HTTP para la comunicación entre el cliente y el servidor. Una API REST expone recursos como URLs (Uniform Resource Locators) y utiliza los métodos HTTP (GET, POST, PUT, DELETE) para realizar operaciones CRUD (Create, Read, Update, Delete) en esos recursos.

 ### Para verificacion de peticiones de CRUD de este test RESTAPI se uso Thunder Client

 ## Autor

- [@Gilberto-Galan](https://github.com/Gilberto-Galan)
