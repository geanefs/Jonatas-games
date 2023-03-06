var fundo;
var pinguim;
var telainicial;

function preload(){
   // pinguim = loadImage("img/")
}

function setup(){
    createCanvas(400,400)
    pinguim = createSprite(200,200,30,30)
}

function draw(){
    background('pink')

    drawSprites()

}