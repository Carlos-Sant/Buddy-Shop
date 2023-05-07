var xhttp= new XMLHttpRequest(); 
xhttp.onreadystatechange = function (){
if (this.readyState ==4 && this.status == 200){
    document.getElementById('menu-superior').innerHTML
    = this.responseText; 
}
}

xhttp.open('GET','menu-superior.html',true);
xhttp.send();

fetch('https://fakestoreapi.com/products/category/men%27s%20clothing')
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
    $("#product").validate({
        rules:{
            id:{
                required: true,
                digits: true,
            },
            nombre:{
                required: true,
                nombre: true,
            },
            descripcion:{
                required: true,
                descripcion: true,
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
                required:"El campo descripcion es obligatorio para completrar el registro",
                descripcion:"El campo descripcion no cumple con el formato"
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
            }
        },
    });

    $("#userRegister").validate({
        rules:{
            rut:{
                required: true,
                rut:true,
            },
            nombres:{
                required: true,
                nombres: true,
            },
            apellidos:{
                required: true,
                apellidos: true,
            },
            direccion: {
                required: true,
                direccion: true,
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
            nombres:"El nombre no cumple con el formato",
        },
        apellidos:{
            required:"El campo apellidos es obligatorio para completrar el registro",
            apellidos:"El apellido no cumple con el formato",
        },
        direccion:{
            required:"La direccion es un campo obligatorio para completrar el registro",
            direccion:"La direccion no cumple con el formato",
        },
        email:{
            required:"El email es un campo obligatorio para completar el registro",
            email:"El email no cumple con el formato",
        },
        contraseña:{
            required:"La contraseña es un campo obligatorio y de suma importancia",
            minlength:"La contraseña debe de tener un minimo de 5 caracteres",
        },
        repContraseña:{
            required:"Repita la anterior contraseña",
            equalTo:"La contraseña debe ser igual al anterior campo",
        },

    },
    });
});