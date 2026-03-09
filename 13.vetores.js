// vetores

const listaDeNomes = ["Marta","Jose","Maria"]

console.log("exibindo todos os elementos: ")
console.log (listaDeNomes)

console.log("\nExibindo o primeiro elementos: ")
console.log(listaDeNomes[0])


console.log("\nAdicionando um elemento: ")
listaDeNomes.push("marilia")
console.log(listaDeNomes)

console.log("adicionando outro elemento: ")
listaDeNomes.push("vitor")
console.log(listaDeNomes)


console.log("\nRemovendo um elemento: ")
// no indice 2,remover o 1 apenas elemento.
listaDeNomes.splice(2,1)
console.log(listaDeNomes)



console.log("\nRemovendo outro elemento")
listaDeNomes.splice(1,2)
console.log(listaDeNomes)

console.log("\nremovendo apenas o ultimo elemento: ")
listaDeNomes.pop()
console.log(listaDeNomes)


console.log("\nRemovendo apenas o primeiro elemento: ")
listaDeNomes.shift()
console.log(listaDeNomes)


