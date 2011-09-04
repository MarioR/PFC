////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
function ImageData(id,context,src)
{
	this.context=context;
	this.id = 'image'+id;
	this.posX = 0;
	this.posY = 0;
	this.depth = 0;

	this.img = new Image();
	this.img.src = src;
	
	//Sets the x,y position of the image
	this.setPosition = function(posX,posY){
		this.posX = posX;
		this.posY = posY;
	};
	
	//Sets the dimensions of the image
	this.setSize = function(width,height){
		this.img.width = width;
		this.img.height = height;	
	};
	
	
	//Renders the image in the screen
	this.draw = function(){
		this.context.drawImage(this.img, this.posX, this.posY, this.img.width, this.img.height);
	};
	
	this.draw2 = function(x,y){
		var cont = Inicio.ctx2;
		cont.drawImage(this.img, x, y, this.img.width, this.img.height);
		
	}
} 


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
//A collection of images
function ImageSet()
{
	this.images = new Array(20);
	this.num_images = 0;
	
	//Adds an image to the collection
	this.add = function(image){
		this.images[this.num_images]=image;
		this.num_images++;
	};
	
	// Draws all the images (maintaining the order)
	this.draw = function(){
		var i,depth;
		for(depth=0;depth<21;depth++){
			for (i=0;i<this.num_images;i++){
				if(this.images[i].depth==depth) this.images[i].draw();
			}
		}
	};
	
	
	
	//Draw only a image
	this.drawX = function(x){
		this.images[x].draw();
	}
	
	//Get the image
	this.getImg = function(x){
		return this.images[x];
	}
	
}
