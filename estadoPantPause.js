/*
* Este fichero será el que contenga las funciones y variables necesarias para la pantalla de pausa del programa.
*/

var imagePause = [

     { "src" : './imagenes/pause.jpg', "posx" : 200, "posy" : 50, "w" : 500, "h" : 500}
];


Vars = {

	volver: false
	
};


function pantPause(){

	Inicio.init();  

	this.cont = Inicio.ctx;	
	
	this.myimageA = new ImageData(1,this.cont,imagePause[0].src);
	
	this.myimageA.setPosition(200,50);
	this.myimageA.setSize (500,500);

	this.draw();
	//Esta función será la que pintará las imagenes de cada estado.
	this.draw = function(){

		this.myimageA.draw();
	
	}	
	
	//Esta función leerá el teclado y el ratón
	this.leerAccion = function(){
	
		//Tal como tengo pensado de momento, sólo se utiliza el boton izquierdo del ratón
	
		if (Tecles.keypause == true){
		 	Vars.volver = true;
		}
	
	}


	//Esta función actualizará el juego

	//No estoy muy seguro, pero creo que esto podría ser una funcion similar a lo que sería el redibujar escenario
	this.updateEstado = function(){
	
		//Primero se limpia el escenario
		this.cont.clearRect(0,0,1000,650);

		this.draw();
	}

}