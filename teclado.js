/*
* Como ahora mismo no me acuerdo lo que había montado en el teclado (ActualizarTeclado) y he visto cosas para montarlo de otra forma
*que si no me equivoco debería ir bien, lo montaré con esto, que creo que es más claro a la hora de mirar el código.
*/


//Código de AYUDA

/*

function keyPress(e) 
   { 
       var textBox = document.getElementById('Text1'); 
       var keynum; 
       if (window.event) // IE 
           keynum = e.keyCode; 
       if (e.which) // Other browser 
           keynum = e.which; 
       switch (keynum) 
       { 
           case 38: 
               textBox.value = 'Up Arrow'; 
               break; 
           case 37: 
               textBox.value = 'Left Arrow'; 
               break; 
           case 40: 
               textBox.value = 'Down Arrow'; 
               break; 
           case 39: 
               textBox.value = 'Right Arrrow'; 
               break; 
           default: 
               textBox.value = 'Another key'; 
               break;  
       } 
   }

*/

//esto es según lo que sale en el texto de ayuda de arriba


//Ahora lo voy a poner utilizando el "document.onKeyDown"

document.onkeydown = function (key){
	
	var keynum;
	
	if(key.which){
		keynum = key.which;
	}
	
	switch (keynum){
		
		case 38:
			Tecles.keyup = false;
		break;
		case 37:
			Tecles.keyleft = false;
		break;
		case 40:
			Tecles.keydown = true;
		break;
		case 39:
			Tecles.keyright = false;
		break;
		case 27:
			Tecles.keyesc = false;
		break;
		case 112:  //letra P minúscula
			Tecles.keypause = false;
		break;
	}

}
