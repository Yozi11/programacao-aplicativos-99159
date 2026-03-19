function calcularMedia() {

    let nota1 = parseFloat(document.getElementById(`nota1`).value);
    let nota2 = parseFloat(document.getElementById(`nota2`).value);
    let nota3 = parseFloat(document.getElementById(`nota3`).value);

    let resultadodadivisao = document.getElementById(`resultado`);


    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        resultadodadivisao.innerHTML = `<div class "error-message">por favor, digite dois numero validos! </div>`;
        return;
    }

    let media = (nota1 + nota2 + nota3) / 3;

    if (media < 7){
        resultadodadivisao.innerHTML = `media: ${media.toFixed(1)}<br> Status:Reprovado;`
        resultadodadivisao.className = "reprovado";
    } else {
        resultadodadivisao.innerHTML = `media: ${media.toFixed(1)}<br> Status: Aprovado`;
        resultadodadivisao.className = "aprovado";
    }    
    
}