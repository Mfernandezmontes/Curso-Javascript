/**
 * Created by adminlocal on 30/01/2015.
 */

//operadores arimeticos
// SUMA +
// RESTA -
// MULTIPLICACIN *
// DIVISION /
// RESTO %


var numero1 = 12;
var numero2 = 5;

var total = numero1 + numero2;
document.write("rl total del " + numero1 + " y " + numero2 + "es = " + total);
document.write("<br>");

var numero1 = 15;
numero1 += 1; // equivale a numero 1 = numero 1 + 1
    document.write(numero1);

/*OPERADORES RELACCIONALES
*
* > MAYOR QUE
* >= MAYOR O IGUAL QUE
* < MENOR QUE
* <= MENOR O IGUAL
* == IGUAL
* != DISTINTO
* */

var numero1 = 12;
var numero2 = 11;

if(numero1 == numero2)
{
    document.write("bien"+ numero1 +"Y"+ numero2 + " son iguales");
}else{
    document.write("bien"+ numero1 +"Y"+ numero2 + " NO son iguales");
}

/*OPERADORES LOGICOS
*
* AND && : Ambas conciciones son ciertas
* OR || : Al menos una de las dos condiciones es cierta
* Negacion ! : la condicion no es cierta
* */