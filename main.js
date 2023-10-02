function setup()    {
    video= createCapture(VIDEO);
    video.size(600,650);
    canvas=createCanvas(620,650);
    canvas.position(600,110);
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()  {
    console.log('poseNet has been initialized');
}
function draw(){
    background="white";
    document.getElementById("font_area").innerHTML="Width & Height will be"+ difference+ "px";
}