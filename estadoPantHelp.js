/*
* Este fichero será el que contenga las funciones y variables necesarias para la pantalla de ayuda del programa.
*es decir, donde pondrá como se mueve, como se pausa, se sale del juego,...
*/

var imageHelp = [

     { "src" : './imagenes/help1.jpg', "posx" : 0, "posy" : 0, "w" : 1000, "h" : 650}
];

QueSeHace = {

	atras: false
	
};


function pantHelp(){

	Inicio.init();  

	this.cont = Inicio.ctx;	

	this.myimageA = new ImageData(1,this.cont,imageHelp[0].src);

	this.myimageA.setPosition(0,0);
	this.myimageA.setSize (1000,650);

	this.draw();

	//Esta función será la que pintará las imagenes de cada estado.
	this.draw = function(){

		this.myimageA.draw();
	
	}
	
	//Esta función leerá el teclado y el ratón
	this.leerAccion = function(){
		//Tal como tengo pensado de momento, sólo se utiliza el boton izquierdo del ratón
		if (Pulsar.lbutton == true){
		 	QueSeHace.atras = true;
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