function cargarPersona() {  // Función para cargar personas
    let nombre = prompt("Ingresa el nombre:");  // Se usa prompt para que el usuario ingrese los datos
    let apellido = prompt("Ingresa el apellido:");
    let dni = prompt("Ingresa el DNI:");

    // Ingreso de teléfonos e hijos como listas separadas por comas
    let telefonos = prompt("Ingresa los teléfonos separados por comas:").split(",");  // Separar por comas
    telefonos = telefonos.map(telefono => telefono.trim());  // Limpiamos los espacios extra

    let hijos = prompt("Ingresa los nombres de los hijos separados por comas:").split(",");  // Separar por comas
    hijos = hijos.map(hijo => hijo.trim());  // Limpiamos los espacios extra

    return [nombre, apellido, dni, telefonos, hijos];  // Devuelve un array con los datos
}

function mostrarDatos(personas) {  // Función para mostrar todos los datos
    alert("\nDatos ingresados:");
    personas.forEach(persona => {  // Recorremos la lista de personas
        const [nombre, apellido, dni, telefonos, hijos] = persona;
        alert(`${nombre} ${apellido}, DNI: ${dni}, Teléfonos: ${telefonos.length} teléfono(s), Hijos: ${hijos.length}`);
    });
}

function filtrarPorDni(personas) {  // Función para filtrar por DNI
    let dniBuscar = prompt("Ingresa el DNI para filtrar:");
    let encontrado = false;

    personas.forEach(persona => {  // Recorremos la lista de personas
        const [nombre, apellido, dni, telefonos, hijos] = persona;
        if (dni === dniBuscar) {  // Si encontramos la persona con el DNI ingresado
            alert(`\nDatos de ${nombre} ${apellido}:`);
            alert(`DNI: ${dni}, Teléfonos: ${telefonos.length} teléfono(s), Hijos: ${hijos.length}`);
            encontrado = true;
        }
    });

    if (!encontrado) {
        alert("No se encontró una persona con ese DNI.");
    }
}

function main() {  // Función principal
    let personas = [];  // Creamos una lista para almacenar las personas

    while (true) {
      
        let opcion = prompt("Elige una opción: 1.Ingresar nueva persona\n2. Mostrar todos los datos\n3. Filtrar por DNI\n4. Salir");

        if (opcion === "1") {  // Opción para ingresar nueva persona
            personas.push(cargarPersona());  // Se agrega la persona a la lista
        } else if (opcion === "2") {  // Opción para mostrar todos los datos
            mostrarDatos(personas);  // Llamamos a la función que muestra todos los datos
        } else if (opcion === "3") {  // Opción para filtrar por DNI
            filtrarPorDni(personas);  // Llamamos a la función de filtrado por DNI
        } else if (opcion === "4") {  // Opción para salir
            alert("Saliendo del programa...");
            break;  // Sale del bucle y termina el programa
        } else {
            console.log("Opción no válida. Por favor elige una opción correcta.");
        }
    }
}

// Ejecutar el programa en la consola del navegador
main();
