const listaDeAlunos = [
    {nome:"Ana", nota:5.0},
    {nome:"Bruno", nota:10.0},
    {nome:"Carla", nota:2.0},
    {nome:"Andrea", nota:7.0},
    {nome:"Marta", nota:6.0},

]

console.log("Encontre a aluna Marta e mostre o nome e a media dela.")
const usuarioEncontra = listaDeAlunos.find(u => u.nome === "Marta" )
console.log(usuarioEncontra)
console.log(`Nome:${usuarioEncontra.nome}\nNota:${usuarioEncontra.nota}`)


console.log("Mostre a media geral da turma.")
const media = listaDeAlunos.reduce((total, media) => total + media.nota, 0)
console.log(media)




