function gerarTabuada() {

    
    // obtendo o numero do input no html
    const numeroInput = document.getElementById("numeroInpunt");
    let numero = parent(numeroInput.value);

    // elementos do html onde o resultado sera exibido 
    const resultadoDiv = document.getElementById("resultadoTabuada");
    resultadoDiv.innerHTML = "";


    // verificar se a entrada e um numero valido

    if (isNaN(numero)|| numero === numero || numero === ""){
        resultadoDiv.innerHTML = "<p>Por favor, digite um numero valido."
        // return; este comando sai da funçao
    }

    // adicionar titulo para a tabuada 
    resultadoDiv.innerHTML += `<h2>Tabuada do numero ${numero}`;

    // laça de repitiçao para  gerar tabua 
    for (let i = 1; i <= 10; i++){
        let resultado = numero * i;
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}<p>`;
    }
}

const botaoGerar = document.getElementById("btgerar");
botaoGerar.addEventListener("click", gerarTabuada);

