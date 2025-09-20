def lista_de_letra_por_consola():
    lista = input().upper()
    
    letraT = lista.count('T')
    letraC = lista.count('C') 
    letraS = lista.count('S')
    
    if letraC == letraT == letraS:
        print("YES")
        return True
    else:
        print("NO")
        return False

lista_de_letra_por_consola()