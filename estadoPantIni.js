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
	
	
//Está definido el contenedor de la imagen, pero falta hacer la parte de menú de este estado para que se inicialice la imagen y se pueda pintar
var imageArrow = [

     { "src" : './imagenes/flechader.jpg', "posx" : 0, "posy" : 0, "w" : 20, "h" : 20}
];	

Selecciones = {

	jugar: false,
	ayuda: false,
	salir: false
	
};

function pantIni (){
	
	this.identificador = 0;
	
	Inicio.init();  
	this.keyD = 0;
	this.cont = Inicio.ctx;
	this.cont.fillStyle = "#000000";   //definimos el color que tendrá el string que pintemos
	this.cont.font = "12px Verdana";   //definimos el tamaño y el tipo de letra que escribiremos

	this.texto1 = "JUGAR";
	this.texto2 = "AYUDA";
	this.texto3 = "SALIR";


	this.myimageA = new ImageData(1,this.cont,imageArrow[0].src);

	this.myimageA.setPosition(170,170);
	this.myimageA.setSize (20,20);


	//Esta función será la que pintará las imagenes de cada estado.
	//Y se llamará a la función desde el UPDATE ESTADO y desde el "inicio", es decir, el primer pintaje de las imagenes
	this.draw = function(){
	
		this.myimageA.draw();
	}
	
	
	this.draw();
	
	//Esta función leerá el teclado y el ratón
	this.leerAccion = function(){
	
		//Aqui tal vez se podría poner que si se pulsan las teclas, la opcion de seleccionar sea diferente, ir a juego, a ayuda, o salir de juego
		//el salir de juego irá con ESC, aunque eso servirá también despues dentro del juego para salir y volver a la pantalla inicial
	
		if (Tecles.keydown == true){
			//aqui irá si es la pimera vez, segunda vez,...
		
			this.keyD = this.keyD + 1;
		
			//Voy incrementando la variable, si es 3, querrá decir que ya había hecho 0,1,2 (las posibles), entonces al ser 3, es como si fuera 0
			if (this.keyD == 3){
				this.keyD = 0;
			}
			Tecles.keydown = false;
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

	//Esta función actualizará el juego

	//No estoy muy seguro, pero creo que esto podría ser una funcion similar a lo que sería el redibujar escenario
	this.updateEstado = function(){
	
		//Primero se limpia el escenario
		this.cont.clearRect(0,0,1000,650);
	
		//Después escribimos los strings marcados
		this.cont.fillText(this.texto1, 200, 100);   //Pintamos el string deseado en la pos x e y
		this.cont.fillText(this.texto2, 200, 200);
		this.cont.fillText(this.texto3, 200, 300);

		switch (this.keyD){
			case 0:
				this.myimageA.setPosition(170,85);
			break;
			case 1:
				this.myimageA.setPosition(170,185);
			break;
			case 2:
				this.myimageA.setPosition(170,285);
			break;
		}	
	}

}
