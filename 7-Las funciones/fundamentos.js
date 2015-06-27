/*
* Las funciones es un grupo de intrucciones con un objetivo en particular
*
* */

mensaje = function(){
    return "hola soy una funcion";
}

document.write(mensaje() + "<br>");

function otro_mensaje(){
    var string = "hola soy otra funcion";
    return string;
}

document.write(otro_mensaje() + "<br>");


function suma (numero1, numero2){
    var sumar = numero1 + numero2;
    return sumar;
}

document.write(suma(12,12) + "<br>");

function multiplicar(numero,opcional){

    if(opcional == undefined){
        opcional = 2;
    }

    return numero * opcional;
}

document.write(multiplicar(12) + "<br>");

function imprime_array(array){

    var elementos = '';

    for(var x=0;x<= array.length-1;x++){
        elementos += array[x] + "<br>";
    }
    return elementos;
}

document.write(imprime_array("uno","dos") + "<br>")