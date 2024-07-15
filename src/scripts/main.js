document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('forme-sorte').addEventListener('submit', function(evento) {
        let numeroMaximo = document.getElementById('numero-maximo').value;
        evento.preventDefault();
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);

        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})