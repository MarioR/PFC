//Esta será la clase que gestione los eventos de ratón

Pulsar = {
	
	lbutton: false,
	rbutton: false,
	cbutton: false

};


function pruebaraton(){
	
	document.onmousedown = function(e){
	
	
	/*	if(e.which == 1){
			Pulsar.leftbutton = true;
		}
		else{
			if (e.which == 2){              //Creo recordar haber leido que fuese el 3 el de la derecha, o tal vez el central, pero no lo encuentro de nuevo
				Pulsar.rightbutton = true;        
			}
			else{
				if(e.which == 4){
					Pulsar.centralbutton = true;
				}
			}
		}*/
		

		switch (e.which){

			case 1:
				Pulsar.lbutton = true;
			break;
			case 2:
				Pulsar.rbutton = true;
			break;
			case 4:
				Pulsar.cbutton = true;
			break;
		}
		
		
		
		
		
	}//Fin del document.onmousedown
	
	
}