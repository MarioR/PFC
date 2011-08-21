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
	{"src" : './imagenes/wall.jpg', "posx" : 300, "posy" : 0, "w" : 50, "h" : 50, "num": 100},
	{"src" : './imagenes/infernal.jpg', "posx" : 0, "posy" : 300, "w" : 50, "h" : 50, "num": 85},
	{"src" : './imagenes/mine.jpg', "posx" : 200, "posy" : 600, "w" : 50, "h" : 50, "num": 30}	

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
	
	this.ctx = Inicio.ctx;
	
	this.myimages = new ImageSet();
	this.myimageP = new ImageSet();
	this.myimageO = new ImageSet();
	
	this.controlArray = null;
	/*
	* Aquí voy a poner la creación de la matriz con la que se distribuirán los jugadores
	* y en la cual habrá obstáculos y premios.
	*/
	
	//Al hacerlo de esta forma diferente, me estoy liando un poco, pero creo que está bien.
	//Sería primero se crean las filas, que son 13, y cada fila contendrá 20 columnas.
	//Si no me equivoco es así.
	
	//Empieza la creacion de la matriz
	this.cellarray = new Array (20);
	
	for (i=0;i<20;i++){
		this.cellarray[i] = new Array (13);
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
	
	for (i=0;i<20;i++){
		for(j=0;j<13;j++){
			this.cellarray[i][j] = 12345;  //12345 será el numero nulo por defecto, ya que el numero 0 lo necesita el personaje 1  
		}
	}
	
}

function valoresInicialesMatriz(){
	
	//Para cada I J del vector controlArray, se irá recorriendo y miraremos los dos valores, se dividirán, dando una Z K, las cuales serviran de 
	//X e Y para la matriz cellarray al colocarlos donde vayan.  
	//Lo que estoy pensando es que estaría bien ponerles un número concreto, es decir, un identificador, para que se sepa si es personaje, 
	//obstáculo o premio. Tengo que cavilar sobre eso
	var z = 0;
	var k = 0;
	var aux = 0;
	
	for (i=0;i<10;i++){
		
		z = this.controlArray[i][0];
		z = z / 50;       
		k = this.controlArray[i][1];
		k = k / 50;

		aux = this.controlArray[i][2];

		this.cellarray[k][z] = aux;
	}
	
	
}

//Crear el vector de elementos para controlar la matriz
//numP = numero de personajes
//numObs = numero de obstaculos (dependerá del nivel de dificultad)
function createArray (numP,numObs){
	
	var cuantos = numP+numObs;
	this.controlArray = new Array (cuantos);   
	
	for (i=0;i<cuantos;i++){
		this.controlArray[i] = new Array (3); 
	} 
}

//Inicializar el array guardando los valores por defecto, es decir
//los personajes y los obstáculos iniciales
function inicializarArray (a,b){
	
	this.controlArray[0][0] = this.perso.px;
	this.controlArray[0][1] = this.perso.py;
	this.controlArray[0][2] = this.perso.nump;
	
	
	this.controlArray[1][0] = this.perso2.px;
	this.controlArray[1][1] = this.perso2.py;
	this.controlArray[1][2] = this.perso2.nump;
	
	this.controlArray[2][0] = this.perso3.px;
	this.controlArray[2][1] = this.perso3.py;
	this.controlArray[2][2] = this.perso3.nump;

	
	this.controlArray[3][0] = this.perso5.px;
	this.controlArray[3][1] = this.perso5.py;
	this.controlArray[3][2] = this.perso5.nump;
	
	this.controlArray[4][0] = obstaculos[0].posx;
	this.controlArray[4][1] = obstaculos[0].posy;
	this.controlArray[4][2] = obstaculos[0].num;
	
	this.controlArray[5][0] = obstaculos[1].posx;
	this.controlArray[5][1] = obstaculos[1].posy;
	this.controlArray[5][2] = obstaculos[1].num;
	
	this.controlArray[6][0] = obstaculos[2].posx;
	this.controlArray[6][1] = obstaculos[2].posy;
	this.controlArray[6][2] = obstaculos[2].num;
	
	this.controlArray[7][0] = a - 400;
	this.controlArray[7][1] = b - 300;
	this.controlArray[7][2] = obstaculos[0].num;
	
	this.controlArray[8][0] = a - 200;
	this.controlArray[8][1] = b - 150;
	this.controlArray[8][2] = obstaculos[1].num;
	
	this.controlArray[9][0] = a;
	this.controlArray[9][1] = b;
	this.controlArray[9][2] = obstaculos[2].num;
	
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
	this.px1 = 0;
	this.py1 = 0;
	
	//El bucle tiene la gracia de la función, para cada jugador, miraré si tiene la variable X con el valor correspondiente a su cuadrado
	//y entonces le variaré la posición, ya que no irán todos los jugadores a la vez, será por turnos, primero uno, después otro,...
	for (this.aux = 0; this.aux <= cant; this.aux++){
		
		if(characters[this.aux].estado == 1){
			this.aux2 = this.aux;
			this.px1 = characters[this.aux].px;
			this.py1 = characters[this.aux].py;
			this.px1 = this.px1 / 50;
			this.py1 = this.py1 / 50;

			if (Tecles.keydown == true){
				this.cellarray[px1][py1] = 12345;
				characters[this.aux].moveDown();
				this.py1 = this.py1 + 1;
				this.cellarray[px1][py1] = characters[this.aux].nump;				
				Tecles.keydown = false;
			}
			else{
				if(Tecles.keyup == true){
					this.cellarray[px1][py1] = 12345;
					characters[this.aux].moveUp();
					this.py1 = this.py1 - 1;
					this.cellarray[px1][py1] = characters[this.aux].nump;
					Tecles.keyup = false;
				}
				else{
					if(Tecles.keyright == true){
						this.cellarray[px1][py1] = 12345;
						characters[this.aux].moveRight();
						this.px1 = this.px1 + 1;
						this.cellarray[px1][py1] = characters[this.aux].nump;
						Tecles.keyright = false;
					}
					else{
						if(Tecles.keyleft == true){
							this.cellarray[px1][py1] = 12345;
							characters[this.aux].moveLeft();
							this.px1 = this.px1 - 1;
							this.cellarray[px1][py1] = characters[this.aux].nump;
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
	
	/*
	*Modo cutre de hacer que una lista de imagenes se repita varias veces
	*/
	var z = 100;
	var k = 200;
	for (i=0;i<obstaculos.length;i++){
		var img = new ImageData(i,context,obstaculos[i].src);
		img.setPosition(k,z);
		img.setSize(obstaculos[i].w,obstaculos[i].h);
		this.myimageO.add(img);
		z = z+200;
		k = k+150;

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
	this.perso.drawImagen();

	

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


//Pongo this.contaje+1 debido a que el contaje hace 0,1,2,3 (lo k suma 4 personajes) y si le paso this.contaje, le pasará 3
//con lo que resultaria al crear el array 0,1,2, con lo cual faltaría una posición
//6 son los obstáculos. 3 en el primer bucle de obstáculos y otros 3 en el segundo
createArray(this.contaje+1, 6);
inicializarArray(z,k);
valoresInicialesMatriz();


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
//		Tecles.keyesc = false;
//		creaVentanaSecundariaPrueba();
//	}
	
	
	redibujarEscenario();
	
	
}

//Hace que se ejecute 25 veces por segundo
var mainLoopId = setInterval (mainLoop,25);
	
}