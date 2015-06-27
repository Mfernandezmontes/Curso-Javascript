/*Fecha

getDay() -> el día de la semana de 0 a 6
getDate() -> el dia del mes 1 a 31
getMonth() -> mes del año del 0 al 11
getFullYear() -> año en formato 1945
*/


var fecha = new Date();

var dia_semana = ["Domingo","Luner","Martes","Miercoles","Jueves","Viernes","Sábado"];

var mes = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Nobiembre","Diciembre"];

var dame_fecha = "Hoy" + dia_semana[fecha.getDay()] + ", " + fecha.getDate() + " de " + mes[fecha.getMonth()] + " del año " + fecha.getFullYear();

/*

HORA:
getHours -> hora
getMinutes -> minutos
getSeconds -> retorna los segundos

*/

var hora = new Date();
var dame_hora = hora.getHours() + ":" + hora.getMinutes() +":" + hora.getSeconds();
document.write("<p>" + dame_hora + "</p>" );

