//Este fichero será el que contenga las cosas de la CARA 2, es decir, el que juntará los estados según convengan



var estado_inicial = new pantIni();

var estado_ayuda = new pantHelp();

var estado_pausa = new pantPause();

var estado_juego = new pantGame();

var estado_perdido = new pantGameOver();


var estado_actual;


estado_actual = estado_inicial;

var main = function(){
	
	estado_actual.updateEstado();
	estado_actual.leerAccion();
	estado_actual.draw();
	
	
}

var mainLoopId = setInterval (main,25);



//falta poner el que se incremente la variable this.cambioPerso del estadoPantGame, ya que sino cada 10 segundos no se cambiará de personaje