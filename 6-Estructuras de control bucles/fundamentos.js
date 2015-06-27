/*BUCLES
*
* un bucle es una sentencia que se realiza repetidas veces a un trozo de cofigo
* */

var paises = ["españa","argentina","colombia","uruguay","Peru"];

for(var x=0;x <= paises.length-1; x++){
    document.write(paises[x]) + "<br>";

}

var productos = new array();

productos["zapatos"] = 30;
productos["camisas"] = 15;
productos["Pantalones"] = 50;

for(var clave in productos){
    document.write(clave + " : " + productos[clave] + "E<br>");
    if(x == 2){
        break
    }
}

var x = 0
while(x < nombres.length-1){
    document.write(nombres[x] + "<br>");
    x++;
}