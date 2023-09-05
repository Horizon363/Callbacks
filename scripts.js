document.getElementById('ejercicio1').addEventListener('click', () => {
    function mostrarMensaje(callback) {
        callback('Este es un mensaje de prueba.');
    }

    mostrarMensaje(console.log);
});

document.getElementById('ejercicio2').addEventListener('click', () => {
    function identificarTipoYContenido(variable, callback) {
        const tipo = typeof variable;
        callback(`Tipo de dato: ${tipo}, Contenido: ${variable}`);
    }

    const ejemplo = 'Hola, soy una cadena.';
    identificarTipoYContenido(ejemplo, console.log);
});

document.getElementById('ejercicio3').addEventListener('click', () => {
    function operaciones(numero1, numero2, callback) {
        callback(numero1 + numero2);
    }

    operaciones(5, 3, console.log);
    operaciones(7, 2, console.warn);
    operaciones(10, 4, console.error);
});

document.getElementById('ejercicio4').addEventListener('click', () => {
    function convertirCadena(cadena, callback) {
        callback(cadena.toLowerCase());
        callback(cadena.toUpperCase());
    }

    const ejemplo = 'PejeLagarto';
    convertirCadena(ejemplo, console.log);
    convertirCadena(ejemplo, console.warn);
});

document.getElementById('ejercicio5').addEventListener('click', () => {
    function filtrarTiempo(tiempo, callback) {
        const horas = tiempo.map(minutos => minutos / 60);
        const resultado = horas.filter(hora => hora > 2);
        callback(resultado);
    }

    const tiempos = [120, 80, 200, 100];
    filtrarTiempo(tiempos, console.log);
});
