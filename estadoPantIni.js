/*
* Este fichero será el que contenga las funciones y variables necesarias para la pantalla inicial del programa.
*es decir, el estado primero donde eliges si quieres Iniciar el juego, ver las Opciones, Ayuda,...
*/

//Tal como hable con Jordi y tengo aqui en los esquemas, cada clase de Estados tiene que tener lo siguiente:
//   - Leer_teclado / Leer_raton
//	 - UpdateJuego
//	 - Draw
//	 - Inicializar_estado
//	 - Guardar_estado    (Esto para si quiero guardar las variables de teclado y/o ratón)
//	 - Recuperar_estado  (Lo mismo que la anterior)
	
	

Selecciones = {

	jugar: false,
	ayuda: false,
	salir: false
	
};


//Esta función se va autohaciendo a medida que avanzo en la creacion de la clase, ya que no se las variables que se utilizan
function inicializarEstado (){
	
	this.keyD = 0;
	this.cont = Inicio.ctx;
	this.cont.fillStyle = "#000000";
	this.cont.font = "12px Verdana";
	
}
	
	
//Esta función leerá el teclado y el ratón
function leerAccion (){
	
	//Aqui tal vez se podría poner que si se pulsan las teclas, la opcion de seleccionar sea diferente, ir a juego, a ayuda, o salir de juego
	//el salir de juego irá con ESC, aunque eso servirá también despues dentro del juego para salir y volver a la pantalla inicial
	
	if (Tecles.keydown == true){
		//aqui irá si es la pimera vez, segunda vez,...
		
		this.keyD = this.keyD + 1;
		
		//Voy incrementando la variable, si es 3, querrá decir que ya había hecho 0,1,2 (las posibles), entonces al ser 3, es como si fuera 0
		if (this.keyD == 3){
			this.keyD = 0;
		}
	}
	else{
		if (Tecles.keyup == true){
			
			this.keyD = this.keyD - 1;
			
			if (this.keyD == -1){
				this.keyD = 2;
			}
			
		}
	}
	
	if (Pulsar.lbutton == true){
		
		if(this.keyD == 0){
				Selecciones.jugar = true;
			}
			else{
				if(this.keyD == 1){
					Selecciones.ayuda = true;
				}
				else{
					if(this.keyD == 2){
						Selecciones.salir = true;
					}
				}
			}
		} //fin del if del this.keyD == 0
	}
	
}


//Esta función actualizará el juego

//No estoy muy seguro, pero creo que esto podría ser una funcion similar a lo que sería el redibujar escenario
function updateEstado (){
	
	//Primero se limpia el escenario
	cont.clearRect(0,0,1000,650);
	
	
}


