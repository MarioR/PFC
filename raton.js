//Esta será la clase que gestione los eventos de ratón

Pulsar = {
	
	lbutton: false,
	rbutton: false,
	cbutton: false,
	primera: true

};


function pruebaRaton(){
	document.onmousedown = function(e){
	
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
		
	}
	
	
	document.onmouseup = function(e){
	
		switch (e.which){

			case 1:
				Pulsar.lbutton = false;
			break;
			case 2:
				Pulsar.rbutton = false;
			break;
			case 4:
				Pulsar.cbutton = false;
			break;
		}
		
	}
}