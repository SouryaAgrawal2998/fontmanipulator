difference= 0;
leftwristx= 0;
rightwristx= 0;
function setup(){
    video= createCapture(VIDEO);
    video.size(500,500);
    canvas= createCanvas(800,500);
    canvas.position(550,75);
    posenet= ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function draw(){
    background('#969A97');
    fill('red');
    textSize(difference);
    text('Sourya',50,250);                                
}
function modelLoaded(){
    console.log("Model has been loaded");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftwristx= results[0].pose.leftWrist.x;
        rightwristx= results[0].pose.rightWrist.x;
        difference= floor(leftwristx-rightwristx);
        console.log("LeftWristX= "+leftwristx+" RightWristX= "+rightwristx+" Difference= "+difference);
    }
}