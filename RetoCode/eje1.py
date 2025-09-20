def nombre_de_consola():
    nombre = input()  
    
    
    if nombre.isalpha() and nombre.isascii() and len(nombre) <= 10:
        print ("Hello " + nombre + "!")
        return 0
    else:
        return -1
        
nombre_de_consola()
