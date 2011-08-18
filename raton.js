//Esta será la clase que gestione los eventos de ratón

Pulsar = {
	
	lbutton: false,
	rbutton: false,
	cbutton: false

};


function pruebaraton(){
	
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
	
}