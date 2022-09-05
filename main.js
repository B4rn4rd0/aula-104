Webcam.attach('#camera');

camera = document.getElementById("camera");

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality:90
});

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='selfie_image' src='"+data_uri+"'>";
    });
}

console.log("ml5 versão: ", ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/XauRBiY3T/model.json',modelLoaded);
function modelLoaded(){
    console.log("Model Loaded");
}

function check(){
    
}