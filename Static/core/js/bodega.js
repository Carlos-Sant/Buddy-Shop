$(document).ready(function() {

  $('#form').validate({ 
    rules: {
        'categoria': {
            required: true,
            min: 1,
        },
        'producto': {
            required: true,
            min: 1,
        },
        'cantidad': {
            required: true,
            digits: true,
            number: true,
            min: 1
        },
    },
    messages: {
        'categoria': {
            required: 'Debe seleccionar la categoría del producto',
            min: 'Debe seleccionar la categoría del producto',
        },
        'producto': {
            required: 'Debe seleccionar el nombre del producto',
            min: 'Debe seleccionar el nombre del producto',
        },
        'cantidad': {
            required: 'Debe ingresar la cantidad',
            number: 'Debe ingresar un número',
            digits: 'Debe ingresar un número entero',
            min: 'Debe ingresar un número mayor que cero',
        },
    },
    errorPlacement: function(error, element) {
        error.insertAfter(element); // Inserta el mensaje de error después del elemento
        error.addClass('error-message'); // Aplica una clase al mensaje de error
    },
  });

  var sin_imagen = '/static/core/images/sin-imagen.png';

  $("#id_categoria").change(function() {
    var categoriaId = $(this).val();

    var categoria_id = $(this).val();

    if (categoria_id === '') {
        $('#id_producto').html('<option value="">No hay productos</option>');
        $('#id_producto').prop('disabled', true);
    } else {
        // Hacer una solicitud AJAX para obtener los productos de la categoría seleccionada
        $.getJSON('/obtener_productos', {'categoria_id': categoria_id}, function(data) {
            var options = '';
            if (data.length > 0) {
                $.each(data, function(index, producto) {
                    options += '<option value="' + producto.id + '">' + producto.nombre + '</option>';
                });
                $('#id_producto').prop('disabled', false);  // Habilitar el segundo combobox
            } else {
                options += '<option value="">No hay existencias</option>';
                $('#id_producto').prop('disabled', true);  // Deshabilitar el segundo combobox
            }
            $('#id_producto').html(options);
        });
    }
});


  $("#id_producto").change(function() {
    var opcionSeleccionada = $(this).find(':selected');
    var imagen = opcionSeleccionada.data('imagen');
    $('#admin-bodega-imagen').attr('src', imagen);
  });

  $("#id_nuevo").click(function() {
    $("#id_categoria").val('');
    $("#id_producto").empty();
    $("#id_producto").prop('disabled', true);
    $("#id_cantidad").val('');
    $('#admin-bodega-imagen').attr('src', sin_imagen);
    $("#categoria_id").focus();
  });

});
