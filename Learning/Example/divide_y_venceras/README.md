# Divide y Venceras 
***
*Nombre del Tema:* divide_y_venceras
*Autor:* Maria Guedez <mariaaguedez.08@gmail.com>
* Creado:* 03/10/2023
* Versión:* 1.0
***
## Descripcion
***
La funcion **numeroMayor** toma la matriz y devuelve un vector que contiene los valores maximos de cada subvector, luego imprime en pantalla los resultados.
***
## Estructura Python
* Matriz
* Función
    * Vector
    * Ciclo repetitivo **For**
    * **max()** Function
    * **append()** Function
    * **return** value
* Imprime vector **resultado**
* Imprime vector el _máximo_ del vector **resultado**

```python

matriz = [
    [21, 545, 56, 32, 86],
    [345, 156, 78, 10, 98],
    [46, 96, 357, 489],
    [456, 789, 72, 8756],
]

def numeroMayor(matriz):
    resultado = []      
    for i in matriz:  
        maximo = max(i)  
        resultado.append(maximo)   
    return resultado 

maximos = numeroMayor(matriz)
print("Vector 'resultado' que muestra los mayores de cada vector en la matriz:  " + str(maximos))

maximoResultado = max(numeroMayor(matriz))
print(" Este es el número mayor de toda la matriz:  " + str(maximoResultado))

```