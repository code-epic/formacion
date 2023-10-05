
"""
@version 1.0
@autor Maria Guedez <mariaaguedez.08@gmail.com>
"""

vectores = [
    [21, 545, 56, 32, 86],
    [345, 156, 78, 10, 98],
    [46, 96, 357, 489],
    [456, 789, 72, 8756],
]

def numeroMayor(vectores):
    resultado = []      
    for i in vectores:  
        maximo = max(i)  
        resultado.append(maximo)   
    return resultado 

maximos = numeroMayor(vectores)
print("Vector 'resultado' que muestra los mayores de cada vector en la matriz:  " + str(maximos))

maximoResultado = max(numeroMayor(vectores))
print(" Este es el número mayor de toda la matriz:  " + str(maximoResultado))
