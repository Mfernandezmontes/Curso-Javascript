
//WINDOW
//Ancho y alto de la ventana
var with = window.screen.width;
var height = window.screen.height;
window.document.write("Ancho:" + with + "Alto:" + height);


//NAVIGATOR
//datos del navegadro utilizado
var navegador = window.navigator.userAgent;
window.document.write(navegador);

//LOCATION
//Redireccionar con el objeto location
//window.location.href = "http://www.goole.com";

//
function open_window(){
         window.open("http://www.goole.com", "", "width=300,height=600");
}


