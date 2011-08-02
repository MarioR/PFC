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
