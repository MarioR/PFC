/*
* CLASE MENÚ
*
* Esta es la clase principal, la que contiene el bucle principal.
* Tenemos las funciones necesarias para inicializar el juego, capturar los eventos que ocurran, redibujar el escenario
* actualizar los distintos jugadores, y la función menú, que es la que contiene el bucle.
* También están las listas con las imágenes que se utilizan en el juego
*/

var imagelist = [
	{ "src" : './imagenes/escenario1.jpg', "posx" : 0, "posy" : 0, "w" : 1000, "h" : 650},
     { "src" : './imagenes/nami.jpg', "posx" : 0, "posy" : 0, "w" : 330, "h" : 321},
     { "src" : './imagenes/zoro.jpg', "posx" : 300, "posy" : 300, "w" : 200, "h" : 200}
//zoro: 349, 315
];


//He puesto que habrá 2 tipos de obstáculos, aunque falta encontrar las imagenes

var obstaculos = [
	{"src" : './imagenes/wall.jpg', "posx" : 400, "posy" : 0, "w" : 50, "h" : 50},
	{"src" : './imagenes/infernal.jpg', "posx" : 0, "posy" : 300, "w" : 50, "h" : 50},
	{"src" : './imagenes/mine.jpg', "posx" : 200, "posy" : 600, "w" : 50, "h" : 50}	

];

var imagePause = [

     { "src" : './imagenes/pause.jpg', "posx" : 0, "posy" : 0, "w" : 500, "h" : 500}
];

//Esta es la funcion que se encargará de inicializar todas las variables que "inicialmente" estén en juego.
function inicializacionJuego(){
	this.contenedor = new Array ();  //Esta variable contendrá la lista con los personajes creados
	this.contaje = 0;
	this.x = 0;
	this.y = 0;
	this.col = "#008080";
	this.perso = null;
	this.perso2 = null;
	this.perso3 = null;
	this.perso5 = null;
	
	this.a = 0;
	this.ctx = Inicio.ctx;
	
	this.myimages = new ImageSet();
	this.myimageP = new ImageSet();
	this.myimageO = new ImageSet();
	
	/*
	* Aquí voy a poner la creación de la matriz con la que se distribuirán los jugadores
	* y en la cual habrá obstáculos y premios.
	*/
	
	//Al hacerlo de esta forma diferente, me estoy liando un poco, pero creo que está bien.
	//Sería primero se crean las filas, que son 13, y cada fila contendrá 20 columnas.
	//Si no me equivoco es así.
	
	//Empieza la creacion de la matriz
	this.cellarray = new Array (13);
	
	for (i=0;i<20;i++){
		this.cellarray[i] = new Array (20);
	}
	//Finaliza la creacion de la matriz
	inicializarMatriz();
	
	
	
	Inicio.init();
	//Es la función en la que está implementado el raton
	pruebaraton();
	//Es la función en la que está implementado el teclado, así se cargará la función y el teclado funcionará
	prueba();

}


//No se seguro si sería correcto hacerlo así o no, pero no se como hacerlo sino

function inicializarMatriz (){
	
	for (i=0;i<13;i++){
		for(j=0;j<20;j++){
			this.cellarray[i][j] = 0;
		}
	}
	
}




//Esta es la "verdadera" función captura eventos
function capturaEventos(){
	
	//En esta parte aún no tiene mucha lógica utilizarlo, pero hago alguna cosa, para ver que funciona
		
	if (Pulsar.lbutton == true){
		Pulsar.lbutton = false;
		perso5.updatepos(500,500);
		this.perso5.drawImagen();
	}
	else{
		//La pulsacion derecha del raton no funciona, va la izquierda, y necesito el raton si quiero probar la central
		//porque en el trackpad no hay boton central de raton.
		if (Pulsar.rbutton == true){
			Pulsar.rbutton = false;
			perso2.updatepos(700,400);
			this.perso2.drawImagen();
		}
	}
}


//Esta función actualizará los jugadores, recibe por parámetro la lista con los jugadores, "una var auxiliar" para saber el nº de jugadores

function actualizaJugadores(characters,cant){
	 this.num = 0;
	 this.aux = 0;
	 this.aux2 = 0;
 	 this.aux3 = 0;

	//El bucle tiene la gracia de la función, para cada jugador, miraré si tiene la variable X con el valor correspondiente a su cuadrado
	//y entonces le variaré la posición, ya que no irán todos los jugadores a la vez, será por turnos, primero uno, después otro,...
	for (this.aux = 0; this.aux <= cant; this.aux++){
		
		if(characters[this.aux].estado == 1){
			this.aux2 = this.aux;
			if (Tecles.keydown == true){
				characters[this.aux].moveDown();
				Tecles.keydown = false;
			}
			else{
				if(Tecles.keyup == true){
					characters[this.aux].moveUp();
					Tecles.keyup = false;
				}
				else{
					if(Tecles.keyright == true){
						characters[this.aux].moveRight();
						Tecles.keyright = false;
					}
					else{
						if(Tecles.keyleft == true){
							characters[this.aux].moveLeft();
							Tecles.keyleft = false;
						}
					}
				}
			}
		}//fin de 1er IF
		
	}//FIN DE FOR
	this.num = 0;
	characters[this.aux2].estado = this.num;
	this.aux2 = this.aux2 + 1;
	this.aux3 = this.contaje + 1;
	if(this.aux2 == this.aux3) {
		this.num = 1;
		characters[0].estado = this.num;
	}
	else{
		this.num = 1;
		characters[this.aux2].estado = this.num;
	}
}



//Esta es la función que se encargará de limpiar la pantalla, dibujar tablero, jugadores e interfaz.
function redibujarEscenario (){
	
//Aqui vamos a poner varios pasos
/*
* 1- Limpiar pantalla
* 2- Dibujar tablero
* 3- Dibujar jugadores/objetos/...
* 4- Dibujar interfaz usuario
*/


//1- Limpiar pantalla
//Esto se puede hacer facilmente con la funcion CLEARRECT() que proporciona canvas

var context = Inicio.ctx;
	//Esto va, pero tengo que coordinar el momento de utilizarlo, porque sino se borra la pantalla i no se sabe si va o no
	context.clearRect(0,0,500,500);
	//Poniendo esto ya va, hago que cada vez que se limpie la pantalla, se "repinte" el cuadrado
	//De hecho, es el punto 3- dibujar jugadores/objetos

	//Dibujar tablero
	
	//Dibujar cuadricula

	if (Tecles.intento == true){
		this.myimageP.draw();
		
	}
	else{
		
		if (Tecles.intento1 == true){
		//	this.myimages.draw();
			this.myimages.drawX(0);
		}
		else{
			this.myimages.drawX(0);  //esta siempre primero, que es el escenario de juego
			this.myimageO.draw();
			this.perso.drawImagen();
			this.perso2.drawImagen();
			this.perso3.drawImagen();
			this.perso5.drawImagen();
		//	this.perso.drawSquare(context);
		//	this.perso2.drawSquare(context);
		//	this.perso3.drawSquare(context);
	
		//	this.perso5.drawSquare(context);
		}	
	}	
	
}

//Funcion de prueba que abre una ventana a la pagina indicada
function creaVentanaSecundariaPrueba(){
	
	window.open("opciones.html" , "ventana1" , "width=120,height=300,scrollbars=NO");
	
}

//De momento la primera VENTANA, con la que se inicia el juego. Si se pulsa el boton izquierdo del ratón
//se pasará a ejecutar la función "menu()", que es la que tiene todo el programa en su interior
function ventanaInicial(){
	
	document.onmousedown = function(e){
		if(e.which == 1){
			menu();			
		}
	}

//Si pongo como codigo el primer comentario, se hace un lio despues en el menu, ya que hay 2 bucles. por lo menos se lia, creo que es por eso
//Si pongo el segundo, no va, puesto que hace la pasada i como no le has dado antes, luego no hay forma de hacer que funcione
//i si pongo un bucle while o un for infinito para que esté dando vueltas hasta que se necesite..., no funciona el programa


/*
pruebaraton();


	var pruLoop = function () {

		if(Pulsar.lbutton == true){
			Pulsar.lbutton = false;
			menu();
		}
	}

	//Hace que se ejecute 25 veces por segundo
	var pruLoopId = setInterval (pruLoop,25);
*/




/*	pruebaraton();	

	if(Pulsar.lbutton == true){
		Pulsar.lbutton = false;
		menu();
	}
*/
	
}

//Tengo que poner la función menu, ya que sino no se ejecuta el prueba.html, porque no va
//De ahí que ponga dentro de la función el mainLoop y el setInterval.
function menu(){
	
	//Llamada a la función inicializacionJuego(), que carga los parametros y variables iniciales
	inicializacionJuego();


	//LOAD THE IMAGES FROM THE DATA
	var i;
	var context = Inicio.ctx;
	
	for (i=0;i<imagelist.length;i++){
		var img = new ImageData(i,context,imagelist[i].src);
		img.setPosition(imagelist[i].posx,imagelist[i].posy);
		img.setSize(imagelist[i].w,imagelist[i].h);
		this.myimages.add(img);
		
	}
	
	for (i=0;i<imagePause.length;i++){
		var img = new ImageData(i,context,imagePause[i].src);
		img.setPosition(imagePause[i].posx,imagePause[i].posy);
		img.setSize(imagePause[i].w,imagePause[i].h);
		this.myimageP.add(img);

	}
	
	for (i=0;i<obstaculos.length;i++){
		var img = new ImageData(i,context,obstaculos[i].src);
		img.setPosition(obstaculos[i].posx,obstaculos[i].posy);
		img.setSize(obstaculos[i].w,obstaculos[i].h);
		this.myimageO.add(img);

	}
	
	this.myimageO.draw();

	//Probando que se pinta una sola imagen, no todas, como en el comentario de arriba
	this.myimages.drawX(0);
	
	//Creacion de los personajes iniciales (pruebas, para ver que funcionan varios)
	//1º se crea el personaje
	//2º se le marca un estado
	//3º se almacena en el array de personajes
	//4º se incrementa una variable necesaria para el array
	//5º se dibuja el peronaje
	
	this.perso = new Character("#000080",100,100,this.contaje, context, imagelist[1].src);
	this.perso.setestado(1);
	this.contenedor[this.contaje] = this.perso; //kreo k no es asi, pero es posible
	contaje ++;
	//this.perso.setImagen(this.myimages.getImg(1));
	this.perso.drawImagen();

	
	//Creo la imagen
//	this.perso.setImagen(this.ctx,imagelist[0].src);
	//Le pongo posicion
//	this.perso.img.setPosition(imagelist[0].posx,imagelist[0].posy);
	//Le pongo tamaño
//	this.perso.img.setSize(imagelist[0].w,imagelist[0].h);
	//Añado imagen
//	this.perso.addImagen();
	//Pinto Imagen
//	this.perso.drawImagen();	
	

	this.perso2 = new Character("#00FF00",0,200,this.contaje, context,imagelist[1].src);
	this.perso2.setestado(0);
	this.contenedor[this.contaje] = this.perso2; //kreo k no es asi, pero es posible
	contaje ++;
  	this.perso2.drawImagen();




this.perso3 = new Character(this.col,this.x,this.y,this.contaje, context,imagelist[2].src);
this.perso3.setestado(0);
this.contenedor[this.contaje] = this.perso3; //kreo k no es asi, pero es posible
this.perso3.drawImagen();

contaje++;

this.perso5 = new Character("#C0C0C0",300,300,this.contaje, context,imagelist[2].src);
this.perso5.setestado(0);
this.contenedor[this.contaje] = this.perso5; //kreo k no es asi, pero es posible
this.perso5.drawImagen();



//Tal como lo tengo explicao con Jordi, esto es el PROGRAMA PRINCIPAL
/*El mainLoop está formado por 3 partes
* 1- Capturar entrada de eventos
* 2- Calcular nuevo estado de juego
* 3- Redibujar escenario
*/



//Esto si que va, pero hay que coordinar cuando hay que utilizarlo
redibujarEscenario();

var mainLoop = function () {
	
	actualizaJugadores(this.contenedor,this.contaje);
	this.perso3.setExperiencia();
	
	
	
	capturaEventos();

	//Aqui deberá ir el comprobar si el juego ha terminado
	// Ahora es una manera simple, pero hago que se abra la pagina a continuación
	//Cuando toque, ya se cambiará o se modificará bien para lo que tengo que hacer
	
//	if(Tecles.keyesc == true){
	//	window.open("http://www.desarrolloweb.com" , "ventana1" , "width=120,height=300,scrollbars=NO");
//		Tecles.keyesc = false;
//		creaVentanaSecundariaPrueba();
//	}
	
	
	redibujarEscenario();
	
	
}

//Hace que se ejecute 25 veces por segundo
var mainLoopId = setInterval (mainLoop,25);
	
}