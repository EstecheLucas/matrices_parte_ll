def cargar_persona():  # Función para cargar personas
    nombre = input("Ingresa el nombre: ")  # Se usa input para que el usuario ingrese los datos
    apellido = input("Ingresa el apellido: ")
    dni = input("Ingresa el DNI: ")

    # Ingresamos los teléfonos y los hijos como listas separadas por comas
    telefonos = input("Ingresa los teléfonos separados por comas: ").split(",")  # Separar por comas
    telefonos = [telefono.strip() for telefono in telefonos]  # Limpiamos los espacios extra

    hijos = input("Ingresa los nombres de los hijos separados por comas: ").split(",")  # Separar por comas
    hijos = [hijo.strip() for hijo in hijos]  # Limpiamos los espacios extra

    return [nombre, apellido, dni, telefonos, hijos]  # Devuelve la lista con los datos

def mostrar_datos(personas):  # Función para mostrar todos los datos
    print("\nDatos ingresados:")
    for persona in personas:  # Recorremos la lista de personas
        nombre, apellido, dni, telefonos, hijos = persona
        print(f"{nombre} {apellido}, DNI: {dni}, Teléfonos: {len(telefonos)} teléfono(s), Hijos: {len(hijos)}")

def filtrar_por_dni(personas):  # Función para filtrar por DNI
    dni_buscar = input("Ingresa el DNI para filtrar: ")
    encontrado = False
    for persona in personas:  # Recorremos la lista de personas
        nombre, apellido, dni, telefonos, hijos = persona
        if dni == dni_buscar:  # Si encontramos la persona con el DNI ingresado
            print(f"\nDatos de {nombre} {apellido}:")
            print(f"DNI: {dni}, Teléfonos: {len(telefonos)} teléfono(s), Hijos: {len(hijos)}")
            encontrado = True
            break
    if not encontrado:
        print("No se encontró una persona con ese DNI.")

def main():  # Función principal
    personas = []  # Creamos una lista para almacenar las personas

    while True:
        print("\n--- Menú ---")
        print("1. Ingresar nueva persona")
        print("2. Mostrar todos los datos")
        print("3. Filtrar por DNI")
        print("4. Salir")
        opcion = input("Elige una opción: ")

        if opcion == "1":  # Opción para ingresar nueva persona
            personas.append(cargar_persona())  # Se agrega la persona a la lista
        elif opcion == "2":  # Opción para mostrar todos los datos
            mostrar_datos(personas)  # Llamamos a la función que muestra todos los datos
        elif opcion == "3":  # Opción para filtrar por DNI
            filtrar_por_dni(personas)  # Llamamos a la función de filtrado por DNI
        elif opcion == "4":  # Opción para salir
            print("Saliendo del programa...")
            break  # Sale del bucle y termina el programa
        else:
            print("Opción no válida. Por favor elige una opción correcta.")

if __name__ == "__main__":  # Si el archivo se ejecuta directamente
    main()  # Se llama a la función principal
