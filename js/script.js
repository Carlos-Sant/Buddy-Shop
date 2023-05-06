var xhttp= new XMLHttpRequest(); 
xhttp.onreadystatechange = function (){
if (this.readyState ==4 && this.status == 200){
    document.getElementById('menu-superior').innerHTML
    = this.responseText; 
}
}

xhttp.open('GET','menu-superior.html',true);
xhttp.send();

var xhttp= new XMLHttpRequest(); 
xhttp.onreadystatechange = function (){
if (this.readyState ==4 && this.status == 200){
    document.getElementById('footer').innerHTML
    = this.responseText; 
}
}

xhttp.open('GET','footer.html',true);
xhttp.send();