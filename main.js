img = "";
objects=[];
status="";

function preload(){
  img = loadImage('dog_cat.jpg');
}
function setup(){
    canvas=createCanvas(700,550);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("etiqueta").innerHTML = "Estado : Detección de objetos";
}
function modelLoaded(){
    console.log("tu modelo ya cargo 💛");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects=results;
}
function draw(){
        image(img, 0, 0, 700, 600);
        fill("#FF0000");
        text("perro", 45, 75);
        noFill();
        stroke("#FF0000");
        rect(30, 60, 450, 350 );
        fill("#FF0000");
        text("gato🐈‍⬛", 345, 185);
        noFill();
        stroke("#FF0000");
        rect(320, 100, 360, 450 );
}