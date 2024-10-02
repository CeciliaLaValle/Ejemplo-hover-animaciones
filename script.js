// Seleccionamos todos los elementos con la clase 'dias-semana'
const dias = document.querySelectorAll('.dias-semana');

let sonidoActual; // Variable global para almacenar el objeto de audio

// Recorremos cada día
dias.forEach(dia => {
    // Añadimos un evento 'mouseover' para que suene el audio al pasar el mouse
    dia.addEventListener('mouseover', function() {
        // Si hay un sonido reproduciéndose, deténlo
        if (sonidoActual) {
            sonidoActual.pause(); // Detener el sonido
            sonidoActual.currentTime = 0; // Reiniciar el tiempo de reproducción
        }
        // Crear un nuevo objeto de audio y reproducirlo
        sonidoActual = new Audio(this.getAttribute('data-sonido')); // Obtener el sonido de data-sonido
        sonidoActual.play(); // Reproducir el sonido
    });

    // Añadimos un evento 'mouseout' para detener el sonido cuando el mouse sale
    dia.addEventListener('mouseout', function() {
        if (sonidoActual) {
            sonidoActual.pause(); // Detener el sonido
            sonidoActual.currentTime = 0; // Reiniciar el tiempo de reproducción
        }
    });
});
