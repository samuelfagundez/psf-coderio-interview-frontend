#### Pedro Samuel Fagundez
#### Coderio Interview Frontend

## Correlo con docker:

### docker build -t timezones_app .

Dependiendo de tu entorno debes colocar sudo al comienzo.
Se encarga de crear la imagen del frontend.

### docker run --name timezones_app -p 3000:3000 timezones_app:latest

Dependiendo de tu entorno debes colocar sudo al comienzo.
Se encarga de correr la imagen del frontend.
Ahora tienes una instancia del frontend corriendo en el puerto 3000.

## Correlo standalone

### `yarn install`

Debes ejecutarlo instalar los paquetes necesarios en el proyecto.

### `yarn start`

Corre la aplicación.
Ahora tienes una instancia del frontend corriendo en el puerto 3000.
