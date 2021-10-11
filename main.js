

canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")
var greencar_height = 100;
var greencar_width = 75;


background_image = "parkingLot.jpg";
greencar_image = "car2.png";

var greencar_X = 5;
var greencar_Y = 225;

function add() {
	background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    greencar_imgTag = new Image();
    greencar_imgTag.onload = uploadgreencar;
    greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_X, greencar_Y, greencar_width, greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_Y >= 0){

        greencar_Y  = greencar_Y - 10
        console.log("When up arrow is pressed, x= " + greencar_X + " | y = " + greencar_Y);
        uploadBackground();
        uploadgreencar();

    }
}

function down()
{
	if(greencar_Y < 500){

       greencar_Y = greencar_Y + 10
        console.log("When up arrow is pressed, x= " + greencar_X + " | y = " + greencar_Y);
        uploadBackground();
        uploadgreencar();

    }
}

function left()
{
	{

		if(greencar_X >= 0){
	
			greencar_X  = greencar_X - 10
			console.log("When up arrow is pressed, x= " + greencar_X + " | y = " + greencar_Y);
			uploadBackground();
			uploadgreencar();
	
		}
}
}

function right()
	{
	//Define function to move the car right side
	if(greencar_X <= 700){

		greencar_X  = greencar_X + 10
        console.log("When up arrow is pressed, x= " + greencar_X + " | y = " + greencar_Y);
        uploadBackground();
        uploadgreencar();

    }
}
