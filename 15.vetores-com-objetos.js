// exemplo com vetor de nome 
const ListaDeNomes = ["Ana","Maria","Joana"]


// exemplo com vetor de numeros 

// vetor de objetos com dados de nome e idade
// um obejeto carrega dados como uma classe 
const listaDeUsuarios = [
    {nome:"Ana",idade:25},
    {nome:"Ana",idade:35},
    {nome:"joana",idade:45}


]

const listaDeUsuariosMenores = [
    {nome:"Vitor",idade:16},
    {nome:"matheus:",idade:15},
    {nome:"Natanael:",idade:14}
]

const ListadeNumeros = [1,2,3,4,5,6]


const listDeNomes = [
    
]

    


// percorrendo e exibindo os elementos do vetor
// forEach e uma funçao com laço de repitaçao
console.log("exibindo todos os usuarios do vetor.")
listaDeUsuarios.forEach( usuario => {
    console.log(`${usuario.nome} tem ${usuario.idade} anos`)
    console.log("senai")
        
    
})

console.log ("\nExibindo todos os usuarios do vetor")
for (let i = 0; i < listaDeUsuarios.length;i++){
    console.log(`${listaDeUsuarios[i].nome}tem ${listaDeUsuarios[i].idade} anos.`)
}

console.log("\nFiltrando maiores de 18 anos .")
const maioridade = listaDeUsuarios.filter(usuarios => usuarios.idade >= 18)
// use as {} caso precise de mais uma linha . 
maioridade.forEach( usuario =>
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
)

console.log ("\nFiltrando menores de 18 anos.")
const menoridade = listaDeUsuariosMenores.filter(usuarios => usuarios.idade <= 18)

menoridade.forEach(usuarios =>
    console.log(`${usuarios.nome} tem ${usuarios.idade} anos`)
)

console.log("\nNa lista de numeros, filtre e msotre apenas numeros pares.")
const pares = ListadeNumeros.filter(n => n % 2 == 0 )
console.log (pares)
 

console.log("\nNa lista de nomes, mostre todos os nomes com forEach.")



