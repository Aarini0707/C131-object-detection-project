function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

img = "";
status = "";
objects = [];


function preload() {
    img = loadImage("bed-room-img.jpg");
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
        objects = results;
    }
}