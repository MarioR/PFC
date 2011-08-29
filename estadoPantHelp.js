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

//Esta función será la que pintará las imagenes de cada estado.
function draw(){

	this.myimageA.draw();
	
}


//Esta función se va autohaciendo a medida que avanzo en la creacion de la clase, ya que no se las variables que se utilizan
function inicializarEstado(){
	Inicio.init();  

	this.cont = Inicio.ctx;	
	
	this.myimageA = new ImageData(1,this.cont,imageHelp[0].src);
	
	this.myimageA.setPosition(0,0);
	this.myimageA.setSize (1000,650);

	draw();
	
}
	
	
//Esta función leerá el teclado y el ratón
function leerAccion(){
	
	//Tal como tengo pensado de momento, sólo se utiliza el boton izquierdo del ratón
	
	if (Pulsar.lbutton == true){
		 QueSeHace.atras = true;
	}
	
}


//Esta función actualizará el juego

//No estoy muy seguro, pero creo que esto podría ser una funcion similar a lo que sería el redibujar escenario
function updateEstado(){
	
	//Primero se limpia el escenario
	this.cont.clearRect(0,0,1000,650);

	draw();
}

