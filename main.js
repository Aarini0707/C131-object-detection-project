function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects";
}

img = "";
status = "";
function preload() {
    img = loadImage("dog_cat.jpg");
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#ff0000");
    text("Dog", 100, 80);
    noFill();
    stroke("#ff0000");
    rect(70, 50, 500, 330);

    fill("#ff0000");
    text("Cat", 270, 80);
    noFill();
    stroke("#ff0000");
    rect(265, 50, 450, 200)
}

function modelLoaded() {
    console.log("Model is Loaded");
    status = true;
    objectDetector.detect(img, gotresults);
}

function gotresults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
    }
}