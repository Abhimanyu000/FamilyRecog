Webcam.set({
    height:300,
    width:300,
    image_format:"png",
    png_quality: 10,
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function takePic(){
    Webcam.snap(function(data_uri){
        document.getElementById("capturedIMG").innerHTML="<img id='IMGRESULTE' src='"+data_uri+"'>";
    })
}

console.log("ml5 library for js", ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/7RO2pdAyV/model.json", modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}

function identity(){
    image1=document.getElementById("IMGRESULTE");
    classifier.classify(image1, gotResult);
}

function gotResult(error, results){
    if (error){
        console.error(error);
    }
    else {
        console.log(results);

        document.getElementById("objectnameinthiswebpage").innerHTML=results[0].label;
        document.getElementById("objectresultinthiswebpage").innerHTML=results[0].confidence.toFixed(4);
    }
}