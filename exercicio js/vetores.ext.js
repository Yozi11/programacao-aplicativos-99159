// exercicio


// cire um vetor com nome de seus familiares
// com seis nomes 

// use todos os comandos vistos em vetores apos criar uma lista 

const listadenomes = ["Carla","vitor","matheus","Natanael","Darlan","Daniel"]

// exibir o primeiro elemento 
console.log(listadenomes[0])


// adicionando mais um elemento
console.log("adicionando um nome")
listadenomes.push("jose")
console.log(listadenomes)

// remover um elemento 
console.log("removendo")
listadenomes.splice(5,1)
console.log(listadenomes)


console.log("removendo o ultimo elemento")
listadenomes.pop()
console.log(listadenomes)

console.log("removendo o primeiro elemento")
listadenomes.shift()
console.log(listadenomes)
