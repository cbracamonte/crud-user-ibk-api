# API REST de Usuarios

Esta es una API REST diseñada para gestionar usuarios. Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) en una base de datos de usuarios.

## Requisitos

Antes de utilizar esta API, asegúrate de tener instalado lo siguiente:

````
    Node.js
    MongoDB
    MongoCompass
    npm (Node Package Manager)
`````

## Instalación

1. Clona este repositorio en tu máquina local:

````
git clone https://github.com/cbracamonte/crud-user-ibk-api

cd <nombre_de_la_carpeta>

npm install

npm start
````

## Creación de base de datos MongoDB

- Crear la base de datos MongoDB llamado ````crud-users-ibk```` y la colección ````users````

# Uso de la API REST de Usuarios

Esta guía te proporciona instrucciones sobre cómo interactuar con la API REST de Usuarios. Puedes acceder a la API utilizando tu navegador o herramientas como Postman.

## Crear un Nuevo Usuario

Para agregar un nuevo usuario, realiza una solicitud POST a la siguiente URL:

````
http://localhost:5000/api/users/add
````

Asegúrate de incluir los datos del usuario en el cuerpo de la solicitud.

## Obtener Todos los Usuarios

Para obtener la lista completa de usuarios, realiza una solicitud GET a la siguiente URL:

````
http://localhost:5000/api/users
````

## Obtener un Usuario por ID

Si deseas obtener información sobre un usuario específico, realiza una solicitud GET a la siguiente URL, reemplazando `:id` con el ID real del usuario:

````
http://localhost:5000/api/users/:id
````

## Actualizar un Usuario

Si necesitas actualizar los datos de un usuario, realiza una solicitud PUT a la siguiente URL, reemplazando `:id` con el ID real del usuario:

````
http://localhost:5000/api/users/:id
````

Proporciona los nuevos datos en el cuerpo de la solicitud.

## Eliminar un Usuario

Para eliminar un usuario, realiza una solicitud DELETE a la siguiente URL, reemplazando `:id` con el ID real del usuario:

````
http://localhost:5000/api/users/:id
````

## Eliminar Todos los Usuarios

Si deseas eliminar todos los usuarios, realiza una solicitud DELETE a la siguiente URL:

````
http://localhost:5000/api/users
````

## Pueden ejecutar Docker

- Para esto deben tener creada la base datos en MongoDB con el nombre de: ````crud-users-ibk```` y la colección ````users````

````
docker-run-image-mongo

docker-build

docker-run
````

Se ejecutará en el puerto 5000

## Pizza Owner

    Hernan Bracamonte 
     - https://www.linkedin.com/in/hernanbracamonte/
