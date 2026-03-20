function verificarVoto() {
    let inputIdade = document.getElementById(`idade`).value;
    let divisaoResultado = document.getElementById(`resultado`);
    

    if (inputIdade === "" || inputIdade < 0) {
        mostrarResultado("por favor digite a idade certa ");
        return;
    }

    let idade = parseInt(inputIdade);
    let mensagem = "";
    let classeCor = "";

    if (idade < 16){
        mensagem = `Com ${idade} anos, <strong> voce nao pode votar </strong>.`;
        classeCor = "proibido"; //vermelho

    }else if (idade >= 16 && idade < 18){
        mensagem = `com ${idade} anos voto e <strong>opcional</strong>.`;
        classeCor = "opciona";//amarelo
    }else if (idade >= 18 && idade <= 65){
        mensagem = `com ${idade} anos, seu voto e <strong>obrigatorio</strong>`;
        classeCor = "obrigatorio";//verde
    } else {
    // maior que 65
        mensagem = `COm${idade}anos seu voto e <strong>opcional</strong>.`;
        classeCor = "opcional";//amarelo
    }
    
    //exive o resultado na tela
    mostrarResultado(mensagem, classeCor);



}

function mostrarResultado(mensagem,classe) {
    let divisaoResultado = document.getElementById(`resultado`);

    divisaoResultado.innerHTML = mensagem;
    divisaoResultado.className = `resultado-box ${classe}`;
    
}