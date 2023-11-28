img = "";
objects=[];
status="";

function preload(){
  img = loadImage('https://th.bing.com/th/id/OIP.QxO6h7JSyLLns6iFPIMCqgHaHa?rs=1&pid=ImgDetMain');
}
function setup(){
    canvas=createCanvas(500,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,400);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("etiqueta").innerHTML = "Estado : Detección de objetos";
}
function modelLoaded(){
    console.log("tu modelo ya cargo 💛");
    status=true;
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects=results;
}
function draw(){
        image(video, 0, 0, 500, 400);
        if(status != "")
      {
        r =  random(255);
        g =  random(255);
        b =  random(255);      
        objectDetector.detect(video, gotResult);
        for(i=0; i<objects.length; i++)
        {

            document.getElementById("numeroobjetos").innerHTML="numero de objetos detectados:"+objects.length;        

            fill(r,g,b);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);        
        }
     }

}