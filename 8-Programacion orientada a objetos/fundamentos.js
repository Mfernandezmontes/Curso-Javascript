

function coche(){

    var self = this;
    self._color = "azul";
    self._puertas = 5;
    self._velocidad = 200;

    coche.prototype.color = function(color){
        if(color == undefined){
            self._color = self._color;
        }else{
            self._color = color;
        }

    }

    coche.prototype.puertas = function(puertas) {
        if (puertas == undefined) {
            self._puertas = self._puertas;
        } else {
            self.puertas = puertas;
        }
    }

    coche.prototype.velocidad = function(velocidad){
        if(velocidad == undefined){
            self._velocidad = self._velocidad;
        }else{
            self.velocidad = velocidad;
        }
    }

    coche.prototype.ruedas = function(){
     var ruedas = 4;
     return ruedas;
    }


}
