## Proyecto: demo-typescript
<p>Este proyecto es un ejemplo de como iniciar en el aprendizaje de la programación con TypeScrip.</p>
<p>El resultado a obtener es una página web que cambia el color de fondo cuando se presiona un botón, con esto entendemos el concepto base de iniciar proyectos usando typescript, lo demás se aprende con la práctica.</p><br>


## Este ejemplo lo puede descargar:
<p>Puedes clonar este repositorio desde <b>GitHub: </b>[<b>alfonsochb/demo-typescript</b>](https://github.com/alfonsochb/demo-typescript)</p><br>


## TypeScript desde cero
1. Para poder ejecutar Typescript, debemos tener instalado el entorno de ejecución para JavaScript "Node Js"

2. Ahora instalamos TypeScript de forma global ejecutando en una terminal el comando:
    ```bash
    npm install -g typescript
    ```

3. Iniciamos nuestro proyecto de ejemplo creando el directorio "demo-typescript", esto puede ser en nuestro escritorio.

4. Dentro del directorio crearemos los sub directorios "src y  public":
    <ul>
        <li>src: donde se guardan los archivos ts</li>
        <li>public: donde se crean los archivos compilados</li>
    </ul>

    ```html 
    \demo-typescript\public\js
    \demo-typescript\src
    ```
    <br>

5. Para configurar el proyecto en caso de que se necesitaran dependencias de paquetes, ejecutamos el comando:
    ```bash
    tsc --init
    ```
    Se creará en nuestro directorio el archivo: "package.json"


6. Para iniciar el archivo de configuración de typescript ejecutamos el comando:
    ```bash
    tsc --init
    ```
    Se creará en nuestro directorio el archivo: "tsconfig.json"


7. Ingresamos al archivo creado "tsconfig.json" y configuramos de donde se tomarán las fuentes "TS" y donde se implementa el resultado compilado "JS", básicamente modificamos estas líneas:
    ```json
     "outDir": "./demo-typescript/public/js", /* La salida compilada, sub directorio creado */
     "rootDir": "./demo-typescript/src", /* El origen de typescript, sub directorio creado */
    ```

8. Ya estando configurado nuestro proyecto, crearemos en el "src" nuestro primer archivo ts y lo llamaremos "index.ts" y le adicionamos de prueba la línea:
    ```javascript
    console.log("Hola mundo desde typescript");
    ```

9. Para compilar este archivo ejecutaremos el comando:
    ```bash
    tsc
    ```
    o el comando para compilar en automático:
    ```bash
    tsc -w
    ```
    Esto nos genera el archivo "./demo-typescript/public/js/index.js"

10. Finalmente realizaremos nuestra lógica de programación en el archivo "index.ts", compilamos, creamos en el directorio raiz nuestro "index.html", incluimos el archivo "js/index.js" y verificaremos nuestras pruebas. 

<b>Nota:</b> tome el ejemplo "html y js" de los ejemplos en este repositorio.

## Reconocimiento
Autor: [Alfonso Chávez Baquero](https://github.com/alfonsochb?target=_blank)"Proyecto de ejemplo con GITHUB, toda la explicaci�n." 
