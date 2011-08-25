var imagePause = [

     { "src" : './imagenes/pause.jpg', "posx" : 0, "posy" : 0, "w" : 500, "h" : 500}
];


function Inicioant(){
	this.perso8 = null;
}


function redibujarEscenario(){
	var context = Inicio.ctx;
		//Esto va, pero tengo que coordinar el momento de utilizarlo, porque sino se borra la pantalla i no se sabe si va o no
		context.clearRect(0,0,500,500);
		
		
		this.perso8.drawSauqre();
	
}

function pruebaParaCambiar(){
	
	var context = Inicio.ctx();
	
	Inicioant();
	
	this.perso8 = new Character("#AAFF12",15,75,5, context,imagePause[0].src);
	
	this.perso8.drawSquare();
	
	
	
var loop = function(){
	
	redibujarEscenario();
}
	
	
	var LoopId = setInterval (loop,25);
	
	
	
}