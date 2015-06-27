/**
 * Created by adminlocal on 30/01/2015.
 */

/*ARRAYS
*
* los arrays son listas de elementos indexados, el primer elemento de un array es 0
* y se incrementa en 1 por cada nuevo elemento
* */

var nombres = new array("pepe","jose","mario","antonio");

document.write(nombres[1] + "<br>");

var nombres = ["fernando", "raul", "roberto"];

document.write(nombres[0] + "<br>");

/*ARRAYS ASOCIATIVOS
*
* Los array asociativos son aquellos arrays a los cuales se les asocia
* una clave => valor para poder acceder a ellos
*
* */

var moneda = new array();

moneda["españa"] = "Euro";
moneda["EEUU"] = "Dollar";
moneda["argentina"] = "pesos";
moneda["chile"] = "pesos";
moneda["francia"] = "Euro";

document.write(moneda["Argentina"] + "<br>");
document.write(moneda.EEUU + "<br>");

/*ARRAYS MULTIDIMENSIONALES
*
* los array multidimensionales son aquellos array que aus vez entr sus elementos
* tambien existen otros arays
*
*
* */



var usuarios = [["Pepe", 23], ["mauel", 30] ["fernando", 20]];
document.write("Nombre: " + usuarios[1][0] + "Edad: " + usuarios[1][1]);


