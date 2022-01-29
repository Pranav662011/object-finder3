video="";
objects=[];
status="";

function setup(){
canvas=createCanvas(480,380);
canvas.center();
canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status: detecting object";
  
}





function draw(){
image(video,0,0,480,380);

if( status !=""){

    objectDetector.detect(video, gotResult);

    for(i=0; i<objects.length; i++){
        document.getElementById("status").innerHTML="Status : Objects Detected";
        document.getElementById("number_of_objects").innerHTML="Number Of Objects Detected are - "+objects.length;

        fill("#ff0000");
        percent= floor(objects[i].confidence*100);
        text(objects[i].label+" "+percent+" % ",objects[i].x+15,objects[i].y+15);
        noFill();
        stroke("#ff0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
}


}

function gotResult(error, results){
    if(error){
        console.log(error);
    }

    else{
        console.log(results);
        objects= results;
    }
}



function start(){
    if( status= input){
        document.getElementById("status2").innerHTML="Object Found";
    }

    else{
        document.getElementById("status2").innerHTML="Object Not found";
    };
}