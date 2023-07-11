$(document).ready(function() {

  $('#comprar-ahora').click(function() {
    $('#accion').val('comprar-ahora');
    $('#formulario-ficha').submit();
  });

  $('#agregar-al-carrito').click(function() {
    $('#accion').val('agregar-al-carrito');
    $('#formulario-ficha').submit();
  });

  var button = document.getElementById('registrar'); 
  button.addEventListener('click', function() {
      // Almacenar el mensaje en el almacenamiento local
      localStorage.setItem('mensajeRegistro', 'Debes registrarte para realizar la compra.');
  });
});