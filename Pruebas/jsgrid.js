var $c_rojo = $(".c_rojo");
var $c_verde = $(".c_verde");
var $c_azul = $(".c_azul");

var $boton = $(".boton");
var $boton1 = $("#boton1");
var $boton2 = $("#boton2");
var $boton3 = $("#boton3");

var $circulo_rojo = $("#circulo1");
var $circulo_verde = $("#circulo2");
var $circulo_azul = $("#circulo3");

var $contenedor_inferior = $("#contenedor_inferior");
var nombre = 1;
var color = 'red';

//Rectangulos
$c_rojo.on('click', function(){
    console.log("Cuadrado rojo presionado")
    $c_azul.css('background-color', 'red');
});

$c_verde.on('click', function(){
    console.log("Cuadrado verde presionado")
    $c_verde.css('background-color', 'blue');
});

$c_azul.on('click', function(){
    console.log("Cuadrado azul presionado")
    $c_azul.css('background-color', 'white');
});

//Botones
$boton1.on('click', function(){
    console.log("Boton 1 presionado")
});

$boton2.on('click', function(){
    console.log("Boton 2 presionado")
});

$boton3.on('click', function(){
    console.log("Boton 3 presionado")
});

//Circulos

$contenedor_inferior.on('mouseover','div', function(){
    
    var ide = $(this).attr('id');
    
    cambio(ide);

   
  
});

function cambio(a){
    console.log(a);
    if(a=="block8-1"){
        color="red";
        console.log(color+"if 1");
    }
    if(a=="block8-2"){
        color="green";
        console.log(color+"if 2");
    }
    if(a=="block8-3"){
        color="blue";
        console.log(color+"if 3");
    }

    console.log("Puntero en Circulo" + color);
    $c_rojo.css('background-color', color);
    $c_verde.css('background-color', color);
    $c_azul.css('background-color', color);
    $circulo_rojo.css('background-color', color);
    $circulo_verde.css('background-color', color);
    $circulo_azul.css('background-color', color);
    $boton.css('background-color', color);
}

/* $circulo_rojo.mouseover(function(){
    console.log("Puntero en Circulo Rojo")
    $c_rojo.css('background-color', 'red');
    $c_verde.css('background-color', 'red');
    $c_azul.css('background-color', 'red');
    $circulo_rojo.css('background-color', 'red');
    $circulo_verde.css('background-color', 'red');
    $circulo_azul.css('background-color', 'red');
    $boton.css('background-color', 'red');
});

$circulo_verde.mouseover(function(){
    console.log("Puntero en Circulo Verde")
    $c_rojo.css('background-color', 'green');
    $c_verde.css('background-color', 'green');
    $c_azul.css('background-color', 'green');
    $circulo_rojo.css('background-color', 'green');
    $circulo_verde.css('background-color', 'green');
    $circulo_azul.css('background-color', 'green');
    $boton.css('background-color', 'green');

});

$circulo_azul.mouseover(function(){
    console.log("Puntero en Circulo Azul")
    $c_rojo.css('background-color', 'blue');
    $c_verde.css('background-color', 'blue');
    $c_azul.css('background-color', 'blue');
    $circulo_rojo.css('background-color', 'blue');
    $circulo_verde.css('background-color', 'blue');
    $circulo_azul.css('background-color', 'blue');
    $boton.css('background-color', 'blue');
}); */

/* 
Cambio de Imagen

0 = imagen0
1 = imagen1
2 = imagen2

lista = [0,1,2]

contador = 0

imagenprincipal = lista[contador]

def cambio_imagen(boton):

    var arreglo = new Array()
    if boton==1:
        if contador > 2:
            contador == 0
        else:
            contador = contador + 1

    if boton==2:
        if contador < 0:
            contador == 2
        else:
            contador = contador - 1
    if boton==3:
        imagenprincipal = blanca 

    return contador
cambio_imagen(valor_boton)

*/
    
