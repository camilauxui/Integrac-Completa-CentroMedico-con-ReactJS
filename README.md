# Centro Médico  

**Contexto:**
Implementar el consumo de una API para obtener y
mostrar datos del sistema del hospital, como la información de doctores o servicios médicos.
Utilizando useEffect y useState, se espera que realicen peticiones asíncronas, gestionen el
estado y manejen los errores de manera eficiente. Podrán utilizar Fetch API o Axios según su
preferencia.

 # 1. Implementación de Peticiones con useEffect y useState
## Explicación de los Cambios
**Actualizar fetch:**
Cambié la URL dentro de fetch para que apunte a la API externa: https://mocki.io/v1/3e709d3c-d526-49a0-b882-525a5af0b5bb.
Esto ahora traerá los datos de doctores desde esa API en lugar de un archivo JSON local y se muestra en las card de los doctores.

**Estado de Errores:**
Se agregó un estado error para manejar cualquier error en la carga de datos.
En la implementación del componente `DoctorList`, he incluido un manejo de errores adecuado para garantizar una buena experiencia de usuario:  

- Si la respuesta de la red no es satisfactoria (por ejemplo, códigos 404 o 500), se lanza una excepción que es capturada por el bloque `catch`.

**Uso de loading:**
- Un mensaje de carga es mostrado mientras los datos están siendo recuperados, y si ocurre un error, se informa al usuario que no se pudieron cargar los doctores.  




# Uso de Fetch API o Axios para el Consumo de la API

## Elección de Fetch API  

Para la implementación de las solicitudes a la API y la obtención de datos, he elegido utilizar la **Fetch API** en lugar de Axios por las siguientes razones:  

1. **Integración Nativa**: La Fetch API es una funcionalidad nativa de JavaScript, lo que significa que no se requiere instalar bibliotecas externas. Esto simplifica la gestión de dependencias en el proyecto.  

2. **Sintaxis Simple**: La Fetch API ofrece una sintaxis más sencilla y moderna que facilita la comprensión del código y hace que sea más fácil realizar solicitudes asíncronas.  

3. **Promesas**: La Fetch API devuelve promesas, lo que se alinea bien con el uso del async/await en el código, proporcionando un manejo legible de las solicitudes asíncronas.  

4. **Flexibilidad**: La Fetch API brinda una gran flexibilidad para manejar diferentes tipos de solicitudes (GET, POST, etc.) y configurar encabezados y otros parámetros.  

### Comparación con Axios  

Aunque Axios tiene muchas características útiles, incluyendo un mejor manejo de respuestas de error y cancelación de solicitudes, para este proyecto en particular, he considerado que Fetch es suficiente y proporciona una buena experiencia sin la sobrecarga de una biblioteca externa.