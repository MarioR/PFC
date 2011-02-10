/*
 * Esta clase se encargará de almacenar los datos de las teclas, si están o no
 * pulsadas con valores de true y false para saber si se han pulsado o no.
 * Otra clase se encargará (o esta au no lo se) se encargará de mirar los valores
 * del teclado para ver si han variado y en tal caso ya la clase de personajes
 * actualizará sus valores o no, depende de a quien le toque el turno.
 *
 */


var EventosTec = function()
{
	
	//posición x (punto inicial)
	
	this.x = 0;
	
	//posición y (punto inicial)
	
	this.y = 0;
	
	//tecla arriba
	
	this.keyup = false;
	
	//tecla abajo
	
	this.keydown = false;
	
	//tecla derecha
	
	this.keyright = false;
	
	//tecla izquierda
	
	this.keyleft = false;
	
	//indica si el juego se ha terminado
	
	this.keyesc = false;
	
	//indicador de quien tiene el turno, si aliado o enemigo
	
	
	//no tengo muy claro esta variable, dudo en usarla o no
	
	this.quiTeTorn = 'aliado';
	
}

