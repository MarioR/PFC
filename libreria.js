//libreria del juego, variable para inicializar canvas

var Inicio=
{
  
  canvas: null,

  canvas2: null,
  
  width: 0,
  
  width2: 0,

  height: 0,

  height2: 0,
    
  ctx: null, 

  ctx2: null,
    
  init: function()
  {
  
      this.canvas = document.getElementById('canvas');
      this.ctx = this.canvas.getContext('2d');
      this.width = this.canvas.width;
      this.height = this.canvas.height;  
    
  },

  //El init2 funciona para el segundo canvas, el que contendrá el número de personaje (o el nombre) y su vida
  init2: function()	
  {
	this.canvas2 = document.getElementById('canvas2');
	this.ctx2 = this.canvas2.getContext('2d');
	this.width2 = this.canvas2.width;
	this.height2 = this.canvas2.height;
	
  }

  
}

//solucionado el problema de crear el canvas dentro de la variable INICIO
