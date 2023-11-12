function calcularMedia() {
    var valores = document.querySelectorAll('input[type="value"]');
    var valoresPreenchidos = [];

    for (var i = 0; i < valores.length; i++) {
        var valor = parseFloat(valores[i].value.replace(',', '.'));

        if (isNaN(valor)) {
            continue;
        }

        valoresPreenchidos.push(valor);
    }

    if (valoresPreenchidos.length > 0) {
        var media = valoresPreenchidos.reduce((a, b) => a + b, 0) / valoresPreenchidos.length;
        exibirResultado(media);
    } else {
        document.getElementById("resultado").innerHTML = "Preencha pelo menos uma caixa para calcular a média.";
    }
}

function exibirResultado(media) {
    var resultado = "A média aritmética é: " + media.toFixed(2).replace('.', ',') + "<br>";
    document.getElementById("resultado").innerHTML = resultado;
}

function novoCalculo() {
    document.getElementById("valor1").value = "";
    document.getElementById("valor2").value = "";
    document.getElementById("valor3").value = "";
    document.getElementById("valor4").value = "";
    document.getElementById("valor5").value = "";
    document.getElementById("resultado").innerHTML = "";
}