

var xhttp= new XMLHttpRequest(); 
xhttp.onreadystatechange = function (){
if (this.readyState ==4 && this.status == 200){
    document.getElementById('menu-superior').innerHTML
    = this.responseText; 
}
}

xhttp.open('GET','menu-superior.html',true);
xhttp.send();

// Esta parte es en donde se encuentra la api de ropa
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
    const cardsContainer = document.getElementById('cards-container');
    
    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('card');
      
      const img = document.createElement('img');
      img.src = product.image;
      img.alt = product.title;
      card.appendChild(img);
      
      const title = document.createElement('h2');
      title.textContent = product.title;
      card.appendChild(title);
      
      const price = document.createElement('p');
      price.textContent = `$${product.price.toFixed(2)}`;
      card.appendChild(price);
      
      const description = document.createElement('p');
      description.textContent = product.description;
      card.appendChild(description);
      
      cardsContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error al obtener los datos de la API', error);
  });

  var xhttp= new XMLHttpRequest(); 
  xhttp.onreadystatechange = function (){
  if (this.readyState ==4 && this.status == 200){
      document.getElementById('footer').innerHTML
      = this.responseText; 
  }
  }
  
  xhttp.open('GET','footer.html',true);
  xhttp.send();



  $(document).ready(function(){

  
   
    $.validator.addMethod("rut", function(value, element) {
       
        value = value.replace(/[.-]/g, "");
    
        
        if (value.length < 8 || value.length > 9) {
          return false;
        }
    
       
        var validChars = "0123456789K";
        var lastChar = value.charAt(value.length - 1).toUpperCase();
        if (validChars.indexOf(lastChar) == -1) {
          return false;
        }
    
       
        var rut = parseInt(value.slice(0, -1), 10);
        var factor = 2;
        var sum = 0;
        var digit;
        while (rut > 0) {
          digit = rut % 10;
          sum += digit * factor;
          rut = Math.floor(rut / 10);
          factor = factor === 7 ? 2 : factor + 1;
        }
        var dv = 11 - (sum % 11);
        dv = dv === 11 ? "0" : dv === 10 ? "K" : dv.toString();
    
       
        return dv === lastChar;
      }, "Por favor ingrese un RUT válido."); 


    //   Este es la validacion para el mantenedor de usuarios

         $("#mantenedoru").validate({
        rules:{
            id:{
                required: true,
                digits: true,
                
            },
            rut:{
                required: true,
                rut: true,
            },
            nombres:{
                required: true,
                
            },
            apellidos: {
                required: true,
                
            },
            direccion:{
                required: true,
                
            },
            contraseña:{
                required:true,
                minlength: 5,
            },
            email:{
                required: true,
                email: true,
            },
        },
        messages: {
            id:{
            required:"El id es un campo requerido para completar",
 
        },
        rut:{
            required:"El rut es un campo requerido para completar",
            rut:"El rut no cumple con el formato",
        },
        nombres:{
            required:"El campo nombre es obligatorio para poder completar el registro",
            
        },
        apellidos:{
            required:"El campo apellidos es obligatorio para completrar el registro",
           
        },
        direccion:{
            required:"La dirección es un campo obligatorio para completrar el registro",

        },
        email:{
            required:"El email es un campo obligatorio para completar el registro",
            email:"El email no cumple con el formato",
        },
        contraseña:{
            required:"La contraseña es un campo obligatorio y de suma importancia",
            minlength:"La contraseña debe de tener un mínimo de 5 caracteres",
        },
    },
    });

    // Este es el validador para el mantenedor de productos
        
    $("#product").validate({
        rules:{
            id:{
                required: true,
                digits: true,
            },
            nombre:{
                required: true,
               
            },
            descripcion:{
                required: true,
                
            },
            descuento:{
                required: true,
                number: true,
            },
            oferta:{
                required: true,
                number: true,
            },
            precio:{
                required: true,
                number: true,
            },
        },
        messages: {
            id:{
                required:"El campo id es requerido para completar",
                digits:"El campo id debe ser un número entero",
            },
            nombre:{
                required:"El campo nombre es obligatorio para poder completar el registro",
                nombre:"El campo nombre no cumple con el formato"
            },
            descripcion:{
                required:"El campo descripción es obligatorio para completrar el registro",
                descripcion:"El campo descripción no cumple con el formato"
            },
            descuento:{
                required:"El campo descuento es obligatorio para completrar el registro",
                number:"El campo descuento no cumple con el formato"
            },
            oferta:{
                required:"El campo oferta es obligatorio para completar el registro",
                number:"El campo oferta debe ser un número",
            },
            precio:{
                required:"El campo precio es obligatorio para completar el registro",
                numer:"El campo precio requiere que sea un numero para completar el guardado"
            },
        },
    });
    // Este es el validador para el registro de usuario
    $("#userRegister").validate({
        rules:{
            rut:{
                required: true,
                rut:true,
            },
            nombres:{
                required: true,
               
            },
            apellidos:{
                required: true,
              
            },
            direccion: {
                required: true,
               
            },
            email:{
                required: true,
                email: true,
            },
            contraseña:{
                required:true,
                minlength: 5,
            },
            repContraseña:{
                required: true,
                equalTo:"#contraseña"
            },
        },
        messages: {
            rut:{
            required:"El rut es un campo requerido para completar",
            rut:"El rut no cumple con el formato",
        },
        nombres:{
            required:"El campo nombre es obligatorio para poder completar el registro",
           
        },
        apellidos:{
            required:"El campo apellidos es obligatorio para completrar el registro",
            
        },
        direccion:{
            required:"La dirección es un campo obligatorio para completrar el registro",
            
        },
        email:{
            required:"El email es un campo obligatorio para completar el registro",
            email:"El email no cumple con el formato",
        },
        contraseña:{
            required:"La contraseña es un campo obligatorio y de suma importancia",
            minlength:"La contraseña debe de tener un mínimo de 5 caracteres",
        },
        repContraseña:{
            required:"Repita la anterior contraseña",
            equalTo:"La contraseña debe ser igual al anterior campo",
        },

    },
    });
    // Este es el validador para ver y cambiar los datos de cuenta
    $("#v_misDatos").validate({
        rules:{
            rut:{
                required: true,
                rut:true,
            },
            nombres:{
                required: true,
               
            },
            apellidos:{
                required: true,
               
            },
            email:{
                required: true,
                email: true,
            },
            direccion: {
                required: true,
                
            },
            contraseña:{
                required:true,
                minlength: 5,
            },
            recontraseña:{
                required: true,
                equalTo:"#contraseña"
            },
        },
        messages: {
            rut:{
            required:"El rut es un campo requerido para completar",
            rut:"El rut no cumple con el formato",
        },
        nombres:{
            required:"El campo nombre es obligatorio para poder completar el registro",
        
        },
        apellidos:{
            required:"El campo apellidos es obligatorio para completrar el registro",
            
        },
        direccion:{
            required:"La dirección es un campo obligatorio para completrar el registro",
            
        },
        email:{
            required:"El email es un campo obligatorio para completar el registro",
            email:"El email no cumple con el formato",
        },
        contraseña:{
            required:"La contraseña es un campo obligatorio y de suma importancia",
            minlength:"La contraseña debe de tener un mínimo de 5 caracteres",
        },
        recontraseña:{
            required:"Repita la anterior contraseña",
            equalTo:"La contraseña debe ser igual al anterior campo",
        },
    
    },
    });
    // Este es el validador para el inicio de sesion
    $("#v_ingresar").validate({
        rules:{
            
            email:{
                required: true,
                email: true,
            },
            contraseña:{
                required:true,
                minlength: 5,
            },
        },
        messages: {
           
        email:{
            required:"El email es un campo obligatorio para completar el registro",
            email:"El email no cumple con el formato",
        },
        contraseña:{
            required:"La contraseña es un campo obligatorio y de suma importancia",
            minlength:"La contraseña debe de tener un mínimo de 5 caracteres",
        },
       
    
    },
    });

     $("#v_bodega").validate({
        rules:{
            categorias:{
                required: true,
                
            },
            categoria:{
                required: true,
               
            },
            cant:{
                required: true,
                number: true,
            },
            estado:{
                required: true,
               
            },
        },
        messages: {
            categorias:{
                required:"El campo categorias es requerido para completar",
                
            },
            categoria:{
                required:"El campo nombre es obligatorio para poder completar el registro",
               
            },
            cant:{
                required:"El campo cantidad es obligatorio para completrar el registro",
                number:"El campo de la cantidad debe ser un número entero",
            },
            estado:{
                required:"El campo estado es obligatorio para completrar el registro",
                
            },
            
        },
    });
  
});

$(document).ready(function() {

    $('#form').validate({ 
        rules: {
          'username': {
            required: true,
          },
          'password': {
            required: true,
          },
        },
        messages: {
          'username': {
            required: 'Debe ingresar un nombre de usuario',
          },
          'password': {
            required: 'Debe ingresar una contraseña',
          },
        },
        errorPlacement: function(error, element) {
          error.insertAfter(element); // Inserta el mensaje de error después del elemento
          error.addClass('error-message'); // Aplica una clase al mensaje de error
        },
    });
  
    $('#user-select').change(function() {
      var username = $(this).val();
      var password = 'Duoc@123';
      if ('cevans eolsen tholland sjohansson cpratt mruffalo super'.includes(username)) {
        password = '123';
      };
      $('#id_username').val(username);
      $('#id_password').val(password);
    });
  
  });