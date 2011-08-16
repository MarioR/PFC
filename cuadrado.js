/*
* CLASE CUADRADO
*
*  Esta clase es la encargada de gestionar el cuadrado, es decir, debe crearlo, pintarlo, actualizar su posicion,...
*  Tal como tengo entendido, esta clase se trata de un OBJETO DIBUJABLE, por lo que de lo único que se debe preocupar es de
* pintarse en el momento en el que toque, no debe saber nada acerca del teclado o de funciones de "nivel superior".
*
*/
function Square(color,posx,posy){

	//Aqui tenemos implícito el constructor de la clase Square. Se inicializan las variables para posteriormente tener las funciones de la clase
		this.x = posx;

		this.y = posy;

		this.color = color;
		
		this.longitud = 10;   // Por definición tiene 10 unidades de longitud
		
		this.altitud = 10;    // Y 10 unidades de altitud


	//Esta función actualiza la posición del cuadrado	
	this.setposition = function (posx,posy){
		this.x = posx;
		this.y = posy;
	
	}
	
	//Estas dos funciones se utilizan para actualizar cuando se pulse el teclado, ya que la otra modifica los dos datos.
	this.setposx = function (posx){
		this.x = posx;
	}
	
	this.setposy = function (posy){
		this.y = posy;
	}
	
	//esto es para la version inicial, porque una vez tenga imágenes, no será así. Aunque puedo cambiar la imagen por el mismo personaje
	//llevando una venda o algo parecido
	//La funcion cambia el color del cuadrado  (tal como tengo pensado, cuando ataque y sea dañado, el personaje cambia de color)
	this.changecol = function (color1){
		this.color = color1;
	}

	//Esta función pinta el cuadrado
	this.draw = function (ctx){
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x,this.y,this.longitud,this.altitud);
	}
	
	this.drawImg = function (img){
		
		img.draw();
	}

	
}
