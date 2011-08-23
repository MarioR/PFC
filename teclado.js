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
	keypause: false,
	keyintro: false,
	intento: false,
	intento1: false
};



		
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
			//segun la tabla de codigo ascii no pone que sea el caracter 80, pero es el valor que tengo que poner
			//para que funcione con la letre P minúscula
			case 80:  //letra P minúscula
				Tecles.keypause = true;
			break;
			case 13:
				Tecles.keyintro = true;
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
				if (Tecles.intento1 == false){
					Tecles.keyesc = true;
					Tecles.intento1 = true;
				}
				else{
					Tecles.intento1 = false;
					Teles.keyesc = false;
				}
			break;
			case 80:  //letra P minúscula
			
				if (Tecles.intento == false){
					Tecles.keypause = true;
					Tecles.intento = true;
				}
				else{
					Tecles.intento = false;
					Teles.keypause = false;
				}
			//	Tecles.keypause = false;
			break;

		}

	}
