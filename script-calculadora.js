// Esta é a função que é ativada quando o usuário clica no botão "Calcular"
function calcularResultados() {
    
    // 1. CAPTURAR OS DADOS
    // 'document.getElementById' vai no HTML e pega as caixas de texto.
    // 'parseFloat' transforma o texto que o usuário digitou em um número com casas decimais.
    let num1 = parseFloat(document.getElementById('numero1').value);
    let num2 = parseFloat(document.getElementById('numero2').value);

    // Pega a caixa vazia (div) onde os resultados vão aparecer no HTML.
    let areaResultado = document.getElementById('areaResultado');

    // 2. VERIFICAR ERROS (VALIDAÇÃO)
    // isNaN significa "Is Not a Number" (Não é um número). 
    // Se o usuário deixar em branco ou digitar letras, ele entra aqui e exibe um erro.
    if (isNaN(num1) || isNaN(num2)) {
        // innerHTML injeta esse texto de erro lá na caixa vazia do HTML
        areaResultado.innerHTML = `<div class="error-message">Por favor, digite dois números válidos!</div>`;
        return; // O 'return' faz o código parar aqui, ele não tenta calcular nada se houver erro.
    }

    // 3. FAZER AS CONTAS
    let soma = num1 + num2;
    let media = soma / 2;
    let produto = num1 * num2;
    // Math.max e Math.min são ferramentas prontas do JavaScript para achar o maior e o menor.
    let maior = Math.max(num1, num2);
    let menor = Math.min(num1, num2);

    // Adiciona uma linhazinha cinza em cima dos resultados só para ficar bonito
    areaResultado.style.borderTop = "2px solid #f1f5f9";
    areaResultado.style.paddingTop = "25px";

    // 4. PREPARAR A RESPOSTA (O TEXTO FINAL)
    // Usamos a crase (`) para poder pular linhas no código e injetar variáveis usando ${ }
    let textoResultado = `
        <div class="result-line">
            <span class="result-icon">📊</span>
            <span class="result-label">Média:</span>
            <span class="result-value">${media}</span>
        </div>
        <div class="result-line">
            <span class="result-icon">➕</span>
            <span class="result-label">Soma:</span>
            <span class="result-value">${soma}</span>
        </div>
        <div class="result-line">
            <span class="result-icon">✖️</span>
            <span class="result-label">Produto:</span>
            <span class="result-value">${produto}</span>
        </div>
        <div class="result-line">
            <span class="result-icon">🔝</span>
            <span class="result-label">Maior número:</span>
            <span class="result-value">${maior}</span>
        </div>
        <div class="result-line">
            <span class="result-icon">🔚</span>
            <span class="result-label">Menor número:</span>
            <span class="result-value">${menor}</span>
        </div>
    `;

    // 5. EXIBIR NA TELA
    // Pega todo aquele texto HTML que montamos acima e joga de volta na tela do usuário.
    areaResultado.innerHTML = textoResultado;
}
