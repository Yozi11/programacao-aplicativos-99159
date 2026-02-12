const botaoAdicionar = document.getElementById("btnAdicionar");
const campoTexto = document.getElementById("novo aprovado");
const lista = document.getElementById("listaAprovados");


botaoAdicionar.addEventListener("click",function(){
    const nome = campoTexto.value;


    if (nome.trim()!==""){
        const novoItem = document.createElement("li");

        novoItem.textContent = nome;
        lista.appendChild(novoItem);

        campoTexto.value = "";
        campoTexto.focus();
    } else{
        alert("por favor,digite um nome!");
    }
})            