console.time()
function generarMatriz(filas, columnas) {
    let matriz = [];
    for (let i = 0; i < filas; i++) {
      let fila = [];
      for (let j = 0; j < columnas; j++) {
        let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        fila.push(numeroAleatorio);
      }
      matriz.push(fila);
    }
    return matriz;
  }
  
  function obtNumeroMaximo(matriz) {
    let resultado = [];
    for (let i = 0; i < matriz.length; i++) {
      let maximo = matriz[i][0];
      for (let j = 1; j < matriz[i].length; j++) {
        if (matriz[i][j] > maximo) {
          maximo = matriz[i][j];
        }
      }
      resultado.push(maximo);
    }
    return resultado;
  }
  
  // Generar matriz
  let matriz = generarMatriz(3, 4);
  // Obtener números máximos
  let resultado = obtNumeroMaximo(matriz);
  console.log("Números máximos en cada posición:" + resultado);
  
  // Encontrar número máximo en resultado
  let maximoGlobal = resultado[0];
  for (let i = 1; i < resultado.length; i++) {
    if (resultado[i] > maximoGlobal) {
      maximoGlobal = resultado[i];
    }
  }
  console.log("Número máximo encontrado en el vector resultado:" + maximoGlobal);
  console.timeEnd()
