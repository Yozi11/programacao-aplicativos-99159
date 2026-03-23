document.getElementById('formNotas').addEventListener('submit', function(evento) {
    // Impede a página de recarregar ao enviar o formulário
    evento.preventDefault();

    // Captura os valores dos inputs e converte para números decimais
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    
    const divResultado = document.getElementById('resultado');

    // Remove classes antigas para limpar o estado
    divResultado.classList.remove('oculto', 'aprovado', 'recuperacao', 'reprovado', 'erro');

    // Validação: Garante que as notas estão entre 0 e 10
    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
        divResultado.innerHTML = "<strong>Erro:</strong> As notas devem ser valores entre 0 e 10. Por favor, corrija e tente novamente.";
        divResultado.classList.add('erro');
        return; // Para a execução do código aqui
    }

    // Cálculo da média
    const media = (nota1 + nota2 + nota3) / 3;
    let status = "";
    let classeStatus = "";

    // Lógica de verificação do status
    if (media >= 7) {
        status = "Aprovado";
        classeStatus = "aprovado";
    } else if (media >= 5) {
        // Se não é >= 7, mas é >= 5, então está entre 5 e 6.9
        status = "Recuperação";
        classeStatus = "recuperacao";
    } else {
        // Se não caiu em nenhuma das anteriores, é < 5
        status = "Reprovado";
        classeStatus = "reprovado";
    }

    // Atualiza o HTML com o resultado formatado (toFixed(1) deixa apenas 1 casa decimal)
    divResultado.innerHTML = `Média: <strong>${media.toFixed(1)}</strong> <br> Situação: <strong>${status}</strong>`;
    divResultado.classList.add(classeStatus);
});