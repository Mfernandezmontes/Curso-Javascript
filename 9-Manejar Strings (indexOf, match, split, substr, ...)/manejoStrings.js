
//Acceder a un determinado carácter de un string
var string = "Coche";
var caracter = string[3];
document.write(caracter + "<br>");


//Iclusion de comillas en los strings
var string ="hola 'mundo'";
document.write(string + "<br>");

//Obtener la longitud de un sctrig
var string = "cuantame";
var logitud = string.length;
document.write(logitud + "<br>");

//Encontrar la primera posicion dentro de un string
var string = "Buscar la primera posicion de un string";
var posicion = string.indexOf("primera");


//Realizar una busqueda de en un string
var string = "bucando este estring";
if(string.match("string"){
   document.write("Encontrado" + "<br>");
}
else{
    document.write("No encotrado" + "<br>");
}

//Reemplazar string con el metodo replace()
var string = "Reemplazame";
var reemplazar = string.replace("reemplazame", "reemplazado");
document.write(reemplazar + "<br>");

//Convertir un string en minusculas
var string = "minusculas";
document.write(string.toUpperCase() + "<br>");

//Convertir un string en mayuscula
var string = "MAYUSCULAS";
document.write(string.toUpperCase() + "<br>");

//convertir un string en un array
var numero "uno dos tres cuatro cinco";
var array = numero.split(" ");
for(var x;x<= array.length-1; x++){
    document.write(array[x] + "<br>");
}

//Buscar substring dentro de un string
var string = "hola mundo";
var substring = string(0,4);
document.write(substring + "<br>");

