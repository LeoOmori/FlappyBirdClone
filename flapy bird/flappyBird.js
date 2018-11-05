// setting up the canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');


// defining the images
var bird = new Image();
var floor = new Image();
var topPipe = new Image();
var BottomPipe = new Image();
var bg = new Image();

bird.src = "assets/bird.png";
floor.src = "assets/floor.png";
topPipe.src = "assets/topPipe.png";
BottomPipe.src = "assets/bottomPipe.png";
bg.src = "assets/background.png";


// variables
var velocity = 0.5;
var gravity = 0.4 ;
var bx = 50;
var by = 150;
var score = 0;
var velPipe = 4;

//pipe array

var pipe = [];

pipe[0] = {
    X : canvas.width,
    pipeYTop : Math.floor((Math.random() * canvas.height/4) + -450),
    pipeYBottom : Math.floor((Math.random() * 100) + canvas.height/2),
}



// click event
document.addEventListener("click",moveUp);

function moveUp(){
    velocity += -gravity*30;
}


//// Draw images
function draw(){
    if(by < 350 && by > 0){   
        velocity += gravity;
        by += velocity;
    }else{
        velPipe = 0;
        location.reload();
    }
    ctx.drawImage(bg,0,0);
    ctx.drawImage(bird, bx, by, 50,50);

    for(var i = 0; i < pipe.length; i++){
        ctx.drawImage(topPipe,pipe[i].X,pipe[i].pipeYTop,80,500);
        ctx.drawImage(BottomPipe,pipe[i].X,pipe[i].pipeYBottom,80,300);

        pipe[i].X -= velPipe;

        if(pipe[i].X === canvas.width - 300){
            pipe.push({
                    X : canvas.width,
                    pipeYTop : Math.floor((Math.random() * canvas.height/4) + -450),
                    pipeYBottom : Math.floor((Math.random() * 100) + canvas.height/2),
                }
            );
        }
        if(pipe[i].X === 107){
            score++;
        }
// console.log(pipe[i].X);
    }

    ctx.drawImage(floor,0,400,650,152);

    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score : "+score,10,canvas.height-10)
    requestAnimationFrame(draw);

}
//
draw();



