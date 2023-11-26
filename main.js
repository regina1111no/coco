img = "";
objects=[];
status="";

function preload(){
  img = loadImage('https://th.bing.com/th/id/OIP.QxO6h7JSyLLns6iFPIMCqgHaHa?rs=1&pid=ImgDetMain');
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
        if(status != "")
      {
        for(i=0; i<objects.length; i++)
        {
            document.getElementById("etiqueta").innerHTML="objetos detectados";
        

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);        
        }
     }

}