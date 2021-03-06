//FALTA DE PONER. ESTA TIENE LA MIGA DE TODO

/*
* Este fichero será el que contenga las funciones y variables necesarias para la pantalla de pausa del programa.
*/

var imagelist = [
     { "src" : './imagenes/escenario1.jpg', "posx" : 0, "posy" : 0, "w" : 1000, "h" : 650},
     { "src" : './imagenes/nami.jpg', "posx" : 0, "posy" : 0, "w" : 789, "h" : 679},
     { "src" : './imagenes/zoro.jpg', "posx" : 300, "posy" : 300, "w" : 714, "h" : 658},
     { "src" : './imagenes/luffy.jpg', "posx" : 300, "posy" : 300, "w" : 345, "h" : 345},
     { "src" : './imagenes/robin.jpg', "posx" : 300, "posy" : 300, "w" : 629, "h" : 615}    

];

//Pese a que está la misma imagen, no es repetir código, puesto que no está en la misma posicion
//es otra imagen diferente
var obstaculos = [
	{"src" : './imagenes/wall.jpg', "posx" : 300, "posy" : 0, "w" : 50, "h" : 50, "num": 100},
	{"src" : './imagenes/infernal.jpg', "posx" : 0, "posy" : 300, "w" : 50, "h" : 50, "num": 85},
	{"src" : './imagenes/mine.jpg', "posx" : 200, "posy" : 550, "w" : 50, "h" : 50, "num": 30},
	{"src" : './imagenes/wall.jpg', "posx" : 100, "posy" : 350, "w" : 50, "h" : 50, "num": 100},
	{"src" : './imagenes/infernal.jpg', "posx" : 500, "posy" : 150, "w" : 50, "h" : 50, "num": 85},
	{"src" : './imagenes/mine.jpg', "posx" : 800, "posy" : 500, "w" : 50, "h" : 50, "num": 30}
	
];


function pantJuego(){
	
	Inicio.init();  
	this.contenedor = new Array ();  //Esta variable contendrá la lista con los personajes creados
	this.contaje = 0;
	this.obst = 0;     //Contaje de obstáculos
	this.cont = Inicio.ctx;
	
	this.cambioPerso = 0;                                       //Lo de incrementar la variable para que a los 10 seg pase a otro jugador lo haré
										         				//desde el bucle principal, que si el estado es el de juego, se incremente, sino no
	
	this.perso = null;
	this.perso2 = null;
	this.perso3 = null;
	this.perso5 = null;

	this.myimages = new ImageSet();
	this.myimageO = new ImageSet();

	this.prueba = 0;   //Esta variable está para la creación de un vector
	
	this.controlArray = null;   //Este es el nombre que recibirá un vector

	//Empieza la creacion de la matriz
	this.cellarray = new Array (13);

	for (i=0;i<13;i++){
		this.cellarray[i] = new Array (20);
	}
	
	this.cargaVectorImg();

	this.cargaPersonajes();
	
	//Una vez creada la matriz, procedemos a inicializarla con un valor nulo
	this.inicializarMatriz();
	//Creamos el array con "this.contaje+1" personajes y "this.obst" obstáculos
	this.createArray(this.contaje+1, this.obst);
	//Una vez creado el array, lo rellenamos
	this.inicializarArray();
	//Una vez creado el array y demás, llenaremos con los valores de los personajes la matriz
	//ya que utilizamos los datos del controlArray
	this.valoresInicialesMatriz();
	

	//Esta función será la que pintará las imagenes de cada estado.
	this.draw = function(){

		//Primero se dibujara el escenario, luego los obstáculos y por último, los personajes
	
		//Imagen de escenario
		this.myimages.drawX(0);
	
		//Obstáculos en el juego
		this.myimageO.draw();
	
		//Personajes del juego
		this.perso.drawImagen();
		this.perso2.drawImagen();
		this.perso3.drawImagen();
		this.perso5.drawImagen();
	
	}

	this.cargaVectorImg = function(){
	
		var i;
		for (i=0;i<imagelist.length;i++){
			var img = new ImageData(i,this.cont,imagelist[i].src);
			img.setPosition(imagelist[i].posx,imagelist[i].posy);
			img.setSize(imagelist[i].w,imagelist[i].h);
			this.myimages.add(img);
		}
		this.myimages.drawX(0);
	
		for (i=0;i<obstaculos.length;i++){
			var img = new ImageData(i,this.cont,obstaculos[i].src);
			img.setPosition(obstaculos[i].posx,obstaculos[i].posy);
			img.setSize(obstaculos[i].w,obstaculos[i].h);
			this.myimageO.add(img);
			this.obst = this.obst + 1;
		}
		this.myimageO.draw();
	}

	this.cargaPersonajes = function(){
		this.perso = new Character("#000080",100,100,this.contaje, this.cont, imagelist[1].src);
		this.perso.setestado(1);
		this.contenedor[this.contaje] = this.perso; //kreo k no es asi, pero es posible
		contaje ++;
		this.perso.drawImagen();

		this.perso2 = new Character("#00FF00",0,200,this.contaje, this.cont,imagelist[2].src);
		this.perso2.setestado(0);
		this.contenedor[this.contaje] = this.perso2; //kreo k no es asi, pero es posible
		contaje ++;
		this.perso2.drawImagen();

		this.perso3 = new Character(this.col,this.x,this.y,this.contaje, this.cont,imagelist[3].src);
		this.perso3.setestado(0);
		this.contenedor[this.contaje] = this.perso3; //kreo k no es asi, pero es posible
		this.perso3.drawImagen();

		contaje++;

		this.perso5 = new Character("#C0C0C0",300,300,this.contaje, this.cont,imagelist[4].src);
		this.perso5.setestado(0);
		this.contenedor[this.contaje] = this.perso5; //kreo k no es asi, pero es posible
		this.perso5.drawImagen();
	}

	this.inicializarMatriz= function(){
	
		for (i=0;i<13;i++){
			for(j=0;j<20;j++){
				this.cellarray[i][j] = 12345;  //12345 será el numero nulo por defecto, ya que el numero 0 lo necesita el personaje 1  
			}
		}		
	}

	this.createArray = function(numP,numObs){
		
		this.prueba = numP+numObs;
		this.controlArray = new Array (this.prueba);  
	}

	this.ArrayData = function(px,py,nump){
		this.px = px;
		this.py = py;
		this.num = nump;
	}
	//Inicializar el array guardando los valores por defecto, es decir
	//los personajes y los obstáculos iniciales
	this.inicializarArray = function(){
	
		var i;
		for (i=0;i<this.prueba;i++){
			this.controlArray[i] = new ArrayData(this.perso.px,this.perso.py,this.perso.nump);
			this.controlArray[i] = new ArrayData(this.perso2.px,this.perso2.py,this.perso2.nump);
			this.controlArray[i] = new ArrayData(this.perso3.px,this.perso3.py,this.perso3.nump);
			this.controlArray[i] = new ArrayData(this.perso5.px,this.perso5.py,this.perso5.nump);
			this.controlArray[i] = new ArrayData(obstaculos[0].posx,obstaculos[0].posy,obstaculos[0].num);
			this.controlArray[i] = new ArrayData(obstaculos[1].posx,obstaculos[1].posy,obstaculos[1].num);
			this.controlArray[i] = new ArrayData(obstaculos[2].posx,obstaculos[2].posy,obstaculos[2].num);
			this.controlArray[i] = new ArrayData(obstaculos[3].posx,obstaculos[3].posy,obstaculos[3].num);
			this.controlArray[i] = new ArrayData(obstaculos[4].posx,obstaculos[4].posy,obstaculos[4].num);
			this.controlArray[i] = new ArrayData(obstaculos[5].posx,obstaculos[5].posy,obstaculos[5].num);
		}	
	}

	this.valoresInicialesMatriz = function(){
	
		//Para cada vuelta de bucle (cada personaje) recorremos el array y obtenemos los datos para poder
		//rellenar la matriz con los valores apropiados
		var z = 0;
		var k = 0;
		var aux = 0;
	
		for (i=0;i<this.prueba;i++){
		
			z = this.controlArray[i].px;
			z = z / 50;       
			k = this.controlArray[i].py;
			k = k / 50;

			aux = this.controlArray[i].num;

			this.cellarray[k][z] = aux;
		}		
	}

	this.comprobarSiBatalla = function(px,py,num,aux1){
	
		//para comprobar si ha de haber una batalla, tengo que comparar al personaje que se ha movido y la posicion que quiere ocupar, para saber 
		//si hay alguien en la misma posición que la que el primero pretendía ocupar
		var aux;
		aux = this.cellarray[py][px];    //Cosas de ser inversa la x e y de la matriz y la x e i del personaje
	
		if(aux != 12345){

			if (aux == 100){
				this.contenedor[aux1].vida = this.contenedor[aux1].vida - 5;		
			}
			else{
				if(aux == 85){
					this.contenedor[aux1].vida = this.contenedor[aux1].vida - 50;	
				}
				else{
					if(aux == 30){
						this.contenedor[aux1].vida = this.contenedor[aux1].vida - 20;	
					}
					else{
						this.contenedor[aux1].attack(this.contenedor[aux]);
					}
				}//segundo else
			}//primer else
		}//if solitario
	}	
	
	//Esta función leerá el teclado y el ratón
	this.leerAccion = function(){
	
		this.num = 0;
		this.aux = 0;
		this.aux2 = 0;
 		this.aux3 = 0;
		this.px1 = 0;
		this.py1 = 0;
		this.pos1x = 0;
		this.pos1y = 0;
	

		//El bucle tiene la gracia de la función, para cada jugador, miraré si tiene la variable X con el valor correspondiente a su cuadrado
		//y entonces le variaré la posición, ya que no irán todos los jugadores a la vez, será por turnos, primero uno, después otro,...
		for (this.aux = 0; this.aux <= cant; this.aux++){
		
			if(characters[this.aux].estado == 1){
				this.aux2 = this.aux;
				this.px1 = characters[this.aux].px;
				this.py1 = characters[this.aux].py;
				this.px1 = this.px1 / 50;
				this.py1 = this.py1 / 50;
				this.pos1x = this.px1;        //Pongo esto en el caso de que no se pueda cambiar por batalla.
				this.pos1y = this.py1;  	  //Pongo esto por si no se puede cambiar porque hay batalla, pera volver a pintar en el sitio previo.

				if (Tecles.keydown == true){
					this.cambioPerso = 250;
					this.cellarray[py1][px1] = 12345;
					characters[this.aux].moveDown();
					this.py1 = this.py1 + 1;
					this.comprobarSiBatalla(this.px1,this.py1,characters[this.aux].num,this.aux);
			
					if (this.cellarray[py1][px1] == 30){
						this.py1 = this.pos1y;
						characters[this.aux].moveUp();
					}
			
					this.cellarray[py1][px1] = characters[this.aux].nump;			
					this.controlArray[this.aux].px = characters[this.aux].px;
					this.controlArray[this.aux].py = characters[this.aux].py;
					Tecles.keydown = false;
				}
				else{
					if(Tecles.keyup == true){
						this.cambioPerso = 250;
						this.cellarray[py1][px1] = 12345;
						characters[this.aux].moveUp();
						this.py1 = this.py1 - 1;
						this.comprobarSiBatalla(this.px1,this.py1,characters[this.aux].num,this.aux);
						if (this.cellarray[py1][px1] == 30){
							this.py1 = this.pos1y;
							characters[this.aux].moveDown();
						}
						this.cellarray[py1][px1] = characters[this.aux].nump;
						this.controlArray[this.aux].px = characters[this.aux].px;
						this.controlArray[this.aux].py = characters[this.aux].py;
						Tecles.keyup = false;
					}
					else{
						if(Tecles.keyright == true){
							this.cambioPerso = 250;
							this.cellarray[py1][px1] = 12345;
							characters[this.aux].moveRight();
							this.px1 = this.px1 + 1;
				    		this.comprobarSiBatalla(this.px1,this.py1,characters[this.aux].num,this.aux);
							if (this.cellarray[py1][px1] == 30){
								this.px1 = this.pos1x;
								characters[this.aux].moveLeft();
							}
							this.cellarray[py1][px1] = characters[this.aux].nump;
							this.controlArray[this.aux].px = characters[this.aux].px;
							this.controlArray[this.aux].py = characters[this.aux].py;
							Tecles.keyright = false;
						}
						else{
							if(Tecles.keyleft == true){
								this.cambioPerso = 250;
								this.cellarray[py1][px1] = 12345;
								characters[this.aux].moveLeft();
								this.px1 = this.px1 - 1;
								this.comprobarSiBatalla(this.px1,this.py1,characters[this.aux].num,this.aux);
								if (this.cellarray[py1][px1] == 30){
									this.px1 = this.pos1x;
									characters[this.aux].moveRight();
								}
								this.cellarray[py1][px1] = characters[this.aux].nump;
								this.controlArray[this.aux].px = characters[this.aux].px;
								this.controlArray[this.aux].py = characters[this.aux].py;
								Tecles.keyleft = false;
							}
						}
					}
				}
			}//fin de 1er IF	
		}//FIN DE FOR
	
		if (this.cambioPerso >= 250){

			this.cambioPerso = 0;
			this.num = 0;
			characters[this.aux2].estado = this.num;
			this.aux2 = this.aux2 + 1;
			this.aux3 = this.contaje + 1;
			if(this.aux2 == this.aux3) {
				this.num = 1;
				this.aux2 = 0;
				if (characters[0].estado != 2){
					characters[0].estado = this.num;
				}
				else{
					this.aux2 = this.aux2 + 1;
					characters[this.aux2].estado = this.num;
				}
			}
			else{
				this.num = 1;
				if(characters[this.aux2].estado != 2){
					characters[this.aux2].estado = this.num;
				}
				else{
					this.aux2 = this.aux2 + 1;
					if (this.aux2 == this.aux3){									
						characters[0].estado = this.num;							
					}																
					else{
						characters[this.aux2].estado = this.num;
					}
				}
			}
		}
		else{
			if(Tecles.keyintro == true){
				Tecles.keyintro = false;
				this.num = 0;
				characters[this.aux2].estado = this.num;
				this.aux2 = this.aux2 + 1;
				this.aux3 = this.contaje + 1;
				if(this.aux2 == this.aux3) {
					this.num = 1;
					this.aux2 = 0;
					if (characters[0].estado != 2){
						characters[0].estado = this.num;
					}
					else{
						this.aux2 = this.aux2 + 1;
						characters[this.aux2].estado = this.num;
					}
				}
				else{
			 		this.num = 1;
					if(characters[this.aux2].estado != 2){
						characters[this.aux2].estado = this.num;
					}
					else{
						this.aux2 = this.aux2 + 1;
						if (this.aux2 == this.aux3){
							characters[0].estado = this.num;
						}
						else{
							characters[this.aux2].estado = this.num;
						}
					}
				}	
			}//fin del if del keyintro
		}//fin de else
	
	}

	//Esta función actualizará el juego

	this.updateEstado = function(){
		this.cont.clearRect(0,0,1000,650);
		this.draw();	
	}

}