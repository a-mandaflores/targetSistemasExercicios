// a) 1, 3, 5, 7, ___ Soma 2 ao elemento
// Resolvendo...

var listaA = [1,3,5,7]

let prevA = listaA.length - 1
listaA.push(listaA[prevA] + 2)



// b) 2, 4, 8, 16, 32, 64, ____ Multiplica por 2
// Resolvendo...

var listaB = [2, 4, 8, 16, 32, 64]

let prevB = listaB.length - 1 
let resolvendoB = listaB[prevB] * 2
listaB.push(resolvendoB)


// c) 0, 1, 4, 9, 16, 25, 36, ____ Multiplica por ele mesmo
// Resolvendo...

var listaC = [0, 1, 4, 9, 16, 25, 36]

let prevC = listaC.length - 1 
let resolvendoC = prevC * prevC
listaC.push(resolvendoC)

// d) 4, 16, 36, 64, ____ Multiplica por numeros pares
// Resolvendo...

var listaD = [4, 16, 36, 64]

let resolvendoD = 10 * 10
listaD.push(resolvendoD)

// e) 1, 1, 2, 3, 5, 8, ____ Somando numero da direita ao numero atual é o valor do proximo
// Resolvendo...

var listaE = [1, 1, 2, 3, 5, 8]

let prevE = listaE.length - 1
let direitaE = listaE.length - 2
let resolvendoE = listaE[prevE] + listaE[direitaE]
listaE.push(resolvendoE)

// f) 2,10, 12, 16, 17, 18, 19, ____ Todos os numeros começam com a letra D.
// Resolvendo...

var listaF = [2, 10, 12, 16, 17, 18, 19]
listaF.push(200)


console.log("a)", listaA)
console.log("b)", listaB)
console.log("c)", listaC)
console.log("d", listaD)
console.log("e)", listaE)
console.log("f)", listaF)