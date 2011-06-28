//libreria del juego, variable para inicializar canvas

var Inicio=
{
  
  canvas: null,
  
  width: 0,
  
  height: 0,
    
  ctx: null, 
    
  init: function()
  {
  
      this.canvas = document.getElementById('juego');
      this.ctx = this.canvas.getContext('2d');
      this.width = this.canvas.height;
      this.height = this.canvas.width;  
    
  }
  
}

//solucionado el problema de crear el canvas dentro de la variable INICIO


//Ya que aquí pongo esto, no estoy seguro de que vaya a ir bien, pero lo voy a intentar

var Tecles=
{
	keyup: false,
	
	keydown: false,
	
	keyleft: false,
	
	keyright: false,
	
	keypause: false,
	
	keyesc: false
	
	
}