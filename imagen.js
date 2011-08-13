

function ImageGen (context,src){
	
	this.context = context;
	this.posx = 0;
	this.posy = 0;
	
	this.img = new Image();
	this.img.src = src;
	
	
	this.setPosition = function (x,y){
		this.posx = x;
		this.posy = y;
	}
	
	this.setSize = function (w,h){
		this.img.width = w;
		this.img.height = h;
	}
	
	
}

