//creating a array with the photos file path
var photos=["photos/image1.jpg","photos/image2.jpg","photos/image3.jpg"];

//finding image
var imageTag=document.querySelector("#slider");
var count=0;

function next(){
    count++;
    if(count>=photos.length){
        count=0;
        imageTag.src=photos[count];
    }
    else{
        imageTag.src=photos[count];
    }
}
function prev(){
    count--;
    if(count<0){
        count=photos.length-1;
        imageTag.src=photos[count];
    }
    else{
        imageTag.src=photos[count];
    }
}