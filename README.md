# SimpleDriveAPI
Simple Drive API es un servidor hecho en node.js que funciona como intermediario entre los servicios de alojamiento de ficheros y los distintos clientes. Se complementa internamente con el proyecto PythonSFS, un servicio hecho en Python para la subida y bajada de ficheros.

### Version 1.0:
-   GET de todas las imagenes
          
            localhost:3000/images
            
    -   GET de una imagen
    
            localhost:3000/<name>

### Funcionalidad por hacer
-   Crear rama POST para una imagen
-   El GET de todas las imágenes no diferencia entre ficheros y carpetas
-   Contemplar distitnas extensiones de fichero (jpg, jpeg, png, swf, etc)
-   Crear ramas para navegar entre carpetas