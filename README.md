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


# 3. Peticiones Basadas en Eventos del Usuario
- Permite que el usuario realice una petición a la API mediante una interacción, como un botón para recargar la lista de doctores o servicios médicos.
## Explicaciòn de los cambios:
**Añadi un Botón:** que, al hacer clic, recargue la lista de doctores desde la API.
**Funcionalidad de Recarga:** Cuando se haga clic en el botón, se llamará a la función que carga los doctores.
**Función loadDoctors:** La función que carga los doctores ahora se puede llamar tanto al montarse el componente como al hacer clic en el botón. Ahora también resetea el estado de error cada vez que se intenta cargar los doctores.
**Estado de Carga y Manejo de Errores:** Durante la recarga, el estado de carga se establece y si hay errores previos, se reinicia.

# 4. Manejo de Errores en Peticiones Asíncronas
- Implementa una estrategia de manejo de errores cuando la API falle o no responda.
- Muestra un mensaje en la interfaz indicando que ocurrió un error, y permite al usuario intentar realizar la petición nuevamente.

## Explicación de los cambios:

**Manejo de Errores:**
Si ocurre un error en la petición (ya sea que la API falle o no responda), se captura y se actualiza el estado de error mediante setError() para mostrar un mensaje adecuado en la interfaz de usuario.
**Mostrar Mensaje de Error:**
Si hay un error al cargar los doctores, se muestra un mensaje al usuario indicando que no se pudieron cargar los doctores.
**Botón para Intentar de Nuevo:**
Se agrega un nuevo botón "Presiona para intentar nuevamente la carga" que permite al usuario hacer clic para volver a intentar cargar los doctores. Este botón llama a la misma función loadDoctors.

# Optimización del Rendimiento al Omitir Efectos en useEffect 
- Implementa una optimización en useEffect para evitar que las peticiones se realicen
múltiples veces innecesariamente. Asegúrate de que la petición se realice solo cuando
el componente se monte o cuando haya un cambio relevante (por ejemplo, al hacer clic
en el botón para recargar los datos de doctores).

## Cambios Realizados
**Dependencias en useEffect:**
Cambié la línea del useEffect para que ahora sólo haga llamado a loadDoctors cuando el componente se monte, utilizando [] como dependencia. Esto evita que la función se ejecute múltiples veces innecesariamente cuando cambia el estado del componente.
Con esta modificación, el rendimiento de tu componente DoctorList está optimizado, asegurando que las solicitudes a la API se realicen solo cuando sea necesario.

**Llamada a loadDoctors en el Click:**

Cuando el usuario hace clic en el botón "Recargar Doctores", se llama a la función loadDoctors, lo que permite recargar los datos solo cuando es necesario.

**El estado loading y error** se gestionan adecuadamente para proporcionar retroalimentación al usuario durante la carga y en caso de un error.
