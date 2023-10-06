
## Básicos
****
### Ver el status

``` bash
git status
```

****
### Clonar un repositorio

``` bash
git clone https://www.github.com/usuario/repositorio.git
```

Clona (descarga) un repositorio remoto

****
### Añadir nuevos archivos al repositorio

```bash
git add <archivo>
```

Añade nuevos directorios o archivos

****
### Hacer commit a los cambios

```bash 
git commit -m "mensaje"
```

```bash 
git commit -a
```

El comando `git commit` permite confirmar los cambios

*****
### Subir los cambios del repositorio remoto

```bash
git push
```

Sube los cambios del repositorio local al repositorio remoto

**** 

### Bajar los cambios del repositorio remoto

```bash
git pull
```

Descarga los cambios que se hayan hecho en el repositorio remoto a tu repositorio local

****
## Ramas
****
### Ver las ramas

``` bash
git branch
```

****
### Crear una rama

``` bash
git branch nombre-de-la-rama
```

****
### Cambiar a una rama

``` bash
git checkout nombre-de-la-rama
```

****
### Combinar una rama

``` bash
git merge origin/rama
```

****