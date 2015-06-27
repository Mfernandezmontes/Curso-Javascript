//lenght: devolver el numero de elementos de un array
var array = ["uno","dos","tre","cuatro"];
var total = array.length;
document.write(total + "<br>");

//indexOf: bucar la posicion de un elemento
var array = ["raul","fernando","manel"];
var posicion = array.indexOf("fernando");
document.write(posicion + "<br>");

//join: une todos los elementos de un array en un string a partir del pegamento indicado
var array = ["rojo", "azul","verde"];
var string = array.join("-");
document.write(string + "<br>");

//pop: elimina el utlimo elemento de un array
var array = ["uno","dos","tres","eliminar"];
array.pop();
for(var x = 0; x < array.length; x++){
    document.write(array[x] + "<br>");
}

//push: añade un nuevo elemento al final del array  
array.push("cuatro");
for (var x = 0;x< array.length; x++){
    document.write(array[x] + "<br>");
}

//shift elimina el primer elemento de un array
var array = ["eliminar", "dos","tres", "cuatro"];
array.shift();
for (var x = 0; x < array.length; x++){
    document.write(array[x] + "<br>");
}

//unshift añade un nuevo elemento al principio de un array
array.unshift("uno");

//sort ordenar los elementos de un array
var array = ["fernando","raul","diego","alvaro"];
array.sort(function(a,b){return a-b});
for(var x = 0;x < array.length;x++){
    document.write(array[x] + "<br>");
}
    //ordenar numericamente 
    var array = [1,4,3,2,7,6,5,8,9]
    array.sort(function(0,9){return 0-9})
    for(var x =0;x < array.length;x++){
        document.write(array[x] + "<br>")
    }

//toString convierte un array en un string
var array = ["uno","dos","tres","cuatro"];
var string = array.toString();
document.write(string + "<br>");

//reverse que revierte la posicion de los elementos del array
var array = [4,3,2,1];
array.reverse();
for(var x =0;x<array.length;x++){
    document.write(array[x] + "<br>")
}
















