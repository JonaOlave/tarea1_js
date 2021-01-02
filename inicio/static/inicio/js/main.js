// JavaScript Document
console.log("hola");
var $cl_rojo=$(".cl_rojo");
var $cl_verde=$(".cl_verde");
var $cl_azul=$(".cl_azul");

var $cir_rojo=$("#cir_rojo");
var $cir_verde=$("#cir_verde");
var $cir_azul=$("#cir_azul");

var $bot1=$("#bot1");
var $bot2=$("#bot2");
var $bot3=$("#bot3");

/* Click cuadrados */
$cl_rojo.on('click', function()
{
	console.log("Color Rojo");
});

$cl_verde.on('click', function()
{
	console.log("Color Verde")
});

$cl_azul.on('click', function()
{
	console.log("Color Azul")
});

/* MouseOver Circulos*/
$cir_rojo.mouseover(function(){
	console.log("Paso sobre circulo rojo")
});

$cir_verde.mouseover(function(){
	console.log("Paso sobre circulo verde")
});

$cir_azul.mouseover(function(){
	console.log("Paso sobre circulo azul")
});

// Click Boton

$bot1.on('click', function(){
	console.log("Click Boton 1")
});

$bot2.on('click', function(){
	console.log("Click Boton 2")
});

$bot3.on('click', function(){
	console.log("Click Boton 3")
});