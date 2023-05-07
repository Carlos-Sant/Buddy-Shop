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