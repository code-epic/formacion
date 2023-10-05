# Divide y Venceras 
***
*Nombre del Tema:* arreglo
*Autor:* Maria Guedez <mariaaguedez.08@gmail.com>
* Creado:* 03/10/2023
* Versión:* 1.0
***
## Descripcion
***
La funcion **numeroMayor** toma la matriz y devuelve un vector que contiene los valores maximos de cada subvector, luego imprime en pantalla los resultados.
***
## Estructura Python
* matriz
* funcion
    * vector
    * ciclo repetitivo
    * 

```python
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
```