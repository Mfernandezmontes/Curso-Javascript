temporizador = setTimeout("reloj()",1000);

function reloj() {
    var tiempo = new Date;
    var hours = tiempo.getHours();
    var minutes = tiempo.getMinutes();
    var seconds = tiempo.getSeconds();
    document.getElementById("hours") = hours;
    document.getElementById("minutes") = minutes;
    document.getElementById("seconds") = seconds;

    temporizador = setTimeout("reloj()",1000);
    
    //Añadimo un 0 si el contador es de 0 a 9
    var str_hours = new String(hours);
    //Si el contador es de solo un digito
    if (str_hours.length == 1) {
        document.getElementById("hours").innerHTML = "0" + str_hours;
    }
    var str_minutes = new String(minutes);
    if (str_minutes.length == 1) {
       document.getElementById("minutes").innerHTML = "0" + str_minutes;
    }
    var str_seconds = new String(seconds);
    if (str_seconds.length == 1) {
        document.getElementById("seconds").innerHTML = "0" + str_seconds;
    }
}

function stop(temporizador){
    clearTimeout()
}

function play(){
   temporizador = setTimeout("reloj()",1000); 
}