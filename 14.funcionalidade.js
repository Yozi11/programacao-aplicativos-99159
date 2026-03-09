// novo recursos ES6

//verto de numeros

const listaDeNumeros = [1, 2, 3, 4,5]

console.log("exibindo  numeros do vetor: ")
console.log(listaDeNumeros)

console.log("\nMultiplicando numeros do vetor: ")
const dobrados = listaDeNumeros.map(n => n * 2)
console.log(dobrados)


console.log("\nFiltrar numeros pares do vetor: ")
const pares = listaDeNumeros.filter(n => n % 2 == 0)
console.log(pares)



console.log("\nsomando todos os numeros vetores: ")
const soma =  listaDeNumeros.reduce((soma,atual) => soma + atual, 0)
console.log(soma)