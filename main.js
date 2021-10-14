function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

img = "";

function preload() {
    img = loadImage("dog_cat.jpg");
}

function draw(){
    image(img,0,0,640,420);
    fill("#ff0000");
    text("Dog",100,80);
    noFill();
    stroke("#ff0000");
    rect(70,50,500,330);
}