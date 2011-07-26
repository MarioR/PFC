/*
* CLASE TECLADO
*
* Esta clase contine una estructura que contiene las diferentes variables a utilizar en la clase
* y tiene la función llamada prueba, que es la que engloba al teclado, al onkeydown y al onkeyup
*
*/
Tecles = {
	
	keyup: false,
	keydown: false,
	keyright: false,
	keyleft: false,
	keyesc: false,
	keypause: false
	
};



function prueba(){
	document.onkeydown = function (key){

		var keynum;

		if(key.which){
			keynum = key.which;
		}

		switch (keynum){

			case 38:
				Tecles.keyup = true;
			break;
			case 37:
				Tecles.keyleft = true;
			break;
			case 40:
				Tecles.keydown = true;
			break;
			case 39:
				Tecles.keyright = true;
			break;
			case 27:
				Tecles.keyesc = true;
			break;
			case 112:  //letra P minúscula
				Tecles.keypause = true;
			break;
		}

	}
	
	document.onkeyup = function (key){

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
				Tecles.keydown = false;
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
}