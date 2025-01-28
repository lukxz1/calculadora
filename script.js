function openPopup() {
    const popup = window.open('', 'Calculadora de Idade Geológica', 'width=400,height=500');

    if (!popup) {
        alert('Por favor, permita pop-ups para usar esta funcionalidade.');
        return;
    }
    popup.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calculadora de Idade Geológica</title>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        <h2>Calculadora de Idade Geológica</h2>
        <p class="instructions">Insira sua idade em anos no campo abaixo e clique no botão "Calcular" para descobrir sua idade geológica aproximada em bilhões de anos.</p>
        <label for="idade">Digite sua idade em anos:</label>
        <input type="number" id="idade" class="input-field" placeholder="Ex: 30">
        <button class="calculate-btn" onclick="calcularIdadeGeologica()">Calcular</button>
        <p class="result" id="resultado"></p>

        <script>
          function calcularIdadeGeologica() {
            const idade = document.getElementById('idade').value;
            const resultado = document.getElementById('resultado');

            if (idade && idade > 0) {
              const idadeGeologica = (idade * 4.54) / 100;
              resultado.textContent = 'Sua idade geológica é aproximadamente ' + idadeGeologica.toFixed(2) + ' bilhões de anos!';
            } else {
              resultado.textContent = 'Por favor, insira uma idade válida!';
            }
          }
        </script>
      </body>
      </html>
    `);
}