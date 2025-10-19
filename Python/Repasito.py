def saludar():
    name = "Julian "
    apellido = "Rivera"
    edad = 18
    print(f"Hola, {name + apellido} tu edad es: {edad}")

def prod():
    n1 = 3
    n2 = 6
    print(f"{n1} * {n2} = {n1*n2}")

def resta():
    name1 = input("Hola, cual es tu nombre: ")
    n = int(input("Perfecto, ingresa un numero: "))
    m = int(input("Ingresa otro numero: "))
    print(name1, "La resta es: ", n - m)

def main():
    print("1. Saludar")
    print("2. Multiplicar")
    print("3. Restar")
    opc = int(input("Ingrese la opcion deseada: "))

    if(opc == 1):
        saludar()
    elif(opc == 2):
        prod()
    elif(opc == 3):
        main()
        

main()
