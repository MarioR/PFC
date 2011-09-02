//Este fichero será el que contenga las cosas de la CARA 2, es decir, el que juntará los estados según convengan




function mygame(){


var estado_inicial = new pantIni();

var estado_ayuda = new pantHelp();

var estado_pausa = new pantPause();

var estado_juego = new pantGame();

var estado_salir = new pantOut();


var estado_actual;


estado_actual = estado_inicial;

var main = function(){
	
	estado_actual.updateEstado();
	estado_actual.leerAccion();
	estado_actual.draw();
	
	if (estado_actual.identificador == 0){
		if (Selecciones.ayuda == true){
			Selecciones.ayuda = false;
			estado_actual = estado_ayuda;
		}
		if (Selecciones.jugar == true){
			Selecciones.jugar = false;
			estado_actual = estado_juego;
		}
		if (Selecciones.salir == true){
			Selecciones.salir = false;
			estado_actual = estado_salir;
		}
	}
	
	if (estado_actual.identificador == 1){
		if(QueSeHace.atras == true){
			QueSeHace.atras = false;
			estado_actual = estado_inicial;
		}
	}
	
	if(estado_actual.identificador == 2){
		if(Vars.volver == true){
			Vars.volver = false;
			estado_actual = estado_juego;
		}
	}

	if(estado_actual.identificador == 3){

		if(Pausamos.pausa == true){
			Pausamos.pausa = false;
			estado_actual = estado_pausa;
		}
		else{
			if(Pausamos.salir == true){
				Pausamos.salir = false;
				estado_actual = estado_salir;
				estado_juego = new pantGame();         //No es el método más efectivo, pero creo que está bien
			}
			else{
				estado_actual.cambioPerso = estado_actual.cambioPerso + 1;
			}
		}
	}
	if(estado_actual.identificador == 4){
		if(Volver.inicio == true){
			Volver.inicio = false;
			estado_actual = estado_inicial;
			
		}
	}
	
	
}

var mainLoopId = setInterval (main,25);


}
//falta poner el que se incremente la variable this.cambioPerso del estadoPantGame, ya que sino cada 10 segundos no se cambiará de personaje