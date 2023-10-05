matriz = [
    [839, 4321, 543, 5432, 541, 13],
    [432, 532, 98, 431, 723, 983, 958],
    [789, 543256, 7654, 5432, 6543, 7564],
    [5432, 5432, 54, 5432, 789, 789, 678],
    [4321, 42134,  876, 3421, 754, 1265]
];

// Funcion para obtener el numero mayor en cada posicion de 'matriz'
function obtNumMax(){

    var resultados = []

    // Bucle para recorrer 'matriz'
    for (let i = 0; i < matriz.length; i++) {
        let matrizActual = matriz[i];
        let maximo = Math.max(...matrizActual);
        resultados.push(maximo);
    };

    // obtener el numero de 'resultados'
    let numeroMayor = Math.max(...resultados)
    console.log(numeroMayor)
};

obtNumMax()