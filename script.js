// Función para validar el formulario de contacto
function validarFormulario(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de inmediato

    // Obtener los valores de los campos del formulario
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('mensaje').value;

    // Validación de los campos (comprobamos si están vacíos)
    if (nombre === '' || email === '' || mensaje === '') {
        alert('Por favor, completa todos los campos.');
        return false; // No enviamos el formulario si falta algún dato
    }

    // Validación simple para el formato del correo electrónico
    let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regexEmail.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return false; // No enviamos el formulario si el correo no es válido
    }

    // Si todo está correcto, mostramos un mensaje de confirmación
    alert('¡Gracias por ponerte en contacto con nosotros! Te responderemos pronto.');
    
    // Limpiar los campos del formulario después de enviar
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensaje').value = '';
    
    return true; // El formulario puede enviarse
}

// Agregar un evento para escuchar el envío del formulario
document.getElementById('formContacto').addEventListener('submit', validarFormulario);

// Función para mostrar el mensaje de bienvenida cuando se hace clic en el botón
function mostrarBienvenida() {
    alert('¡Bienvenido a la plataforma de microempresas locales! Estamos aquí para ayudarte a hacer crecer tu negocio.');
}

// Asignamos el evento de clic al botón de bienvenida
document.getElementById('btnBienvenida').addEventListener('click', mostrarBienvenida);
