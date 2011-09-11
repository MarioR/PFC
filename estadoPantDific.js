//En este estado se tendrá que elegir la dificultad del juego y, dependiendo del nivel que se eliga (facil o dificil)
//habrá más o menos obstáculos por el tablero de pantalla.



//CAMBIARLO TODO PARA ESTE ESTADO, XK ES LO MISMO QUE ESTADOPANTINI, YA QUE SE PARECE BASTANTE



//Está definido el contenedor de la imagen, pero falta hacer la parte de menú de este estado para que se inicialice la imagen y se pueda pintar
var imageArrow1 = [
     { "src" : './imagenes/flechaup.jpg', "posx" : 0, "posy" : 0, "w" : 50, "h" : 50}
];	

var imageDif = [

     { "src" : './imagenes/facil.jpg', "posx" : 0, "posy" : 0, "w" : 472, "h" : 335},
     { "src" : './imagenes/dificil.jpg', "posx" : 500, "posy" : 500, "w" : 510, "h" : 662}

];

Opcion = {

	facil: false,
	dificil: false
	
};

function pantDific (){
	
	this.identificador = 5;
	
	Inicio.init();  
	this.keyD = 0;
	this.cont = Inicio.ctx;
	this.cont.fillStyle = "#000000";   //definimos el color que tendrá el string que pintemos
	this.cont.font = "Bold 12px Verdana";   //definimos el tamaño y el tipo de letra que escribiremos (está en negrita, por eso BOLD)

	this.texto1 = "FACIL";
	this.texto2 = "DIFICIL";


	this.myimageA = new ImageData(1,this.cont,imageArrow1[0].src);
	this.myimageB = new ImageData(2,this.cont,imageDif[0].src);
	this.myimageC = new ImageData(3,this.cont,imageDif[1].src);
	
	this.myimageA.setPosition(170,170);
	this.myimageA.setSize (35,35);
	
	this.myimageB.setPosition(50,50);
	this.myimageB.setSize (335,472);
	
	this.myimageC.setPosition (500,50);
	this.myimageC.setSize (350,472);   //la cosa esta en lo que ahora es 0


	//Esta función será la que pintará las imagenes de cada estado.
	//Y se llamará a la función desde el UPDATE ESTADO y desde el "inicio", es decir, el primer pintaje de las imagenes
	this.draw = function(){
	
		this.myimageA.draw();
	}
	
	
	
	//Esta función leerá el teclado y el ratón
	this.leerAccion = function(){
	
		//Aqui tal vez se podría poner que si se pulsan las teclas, la opcion de seleccionar sea diferente, ir a juego, a ayuda, o salir de juego
		//el salir de juego irá con ESC, aunque eso servirá también despues dentro del juego para salir y volver a la pantalla inicial
	
		if (Tecles.keyright == true){
			//aqui irá si es la pimera vez, segunda vez,...
		
			this.keyD = this.keyD + 1;
		
			//Voy incrementando la variable, si es 3, querrá decir que ya había hecho 0,1,2 (las posibles), entonces al ser 3, es como si fuera 0
			if (this.keyD == 2){
				this.keyD = 0;
			}
			Tecles.keyright = false;
		}
		else{
			if (Tecles.keyleft == true){
				Tecles.keyleft = false;
				this.keyD = this.keyD - 1;
			
				if (this.keyD == -1){
					this.keyD = 1;
				}
			
			}
		}
	
		if (Pulsar.lbutton == true){
			Pulsar.lbutton = false;
			if(this.keyD == 0){
				Opcion.facil = true;
			}
			else{
				if(this.keyD == 1){
					Opcion.dificil = true;
				}
			}
		} //fin del if del this.keyD == 0
	}

	//Esta función actualizará el juego

	//No estoy muy seguro, pero creo que esto podría ser una funcion similar a lo que sería el redibujar escenario
	this.updateEstado = function(){
	
		//Primero se limpia el escenario
		this.cont.clearRect(0,0,1000,650);
	
		this.myimageB.draw();
		this.myimageC.draw();
		
		//Después escribimos los strings marcados
		this.cont.fillText(this.texto1, 170, 550);   //Pintamos el string deseado en la pos x e y
		this.cont.fillText(this.texto2, 670, 550);

		switch (this.keyD){
			case 0:
				this.myimageA.setPosition(170,570);
			break;
			case 1:
				this.myimageA.setPosition(680,570);
			break;

		}	
	}

}