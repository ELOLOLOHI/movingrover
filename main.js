canvas= document.getElementById("canvasy");
ctx= canvas.getContext("2d");

roverx=10;
rovery=10;
roverw=100;
roverh=90;

nasaarray=["image2.jpg", "image3.jpg", "image4.jpg", "mars.jpg"];


randomized=Math.floor(Math.random()*4);
console.log(randomized);
backgroundim= nasaarray[randomized];

roverim= "rover.png";

function add(){
    backgroundtag= new Image();
    backgroundtag.onload=uploadback;
    backgroundtag.src= backgroundim;
    
    rovertag= new Image();
    rovertag.onload= uploadrover;
    rovertag.src=roverim;
};

function uploadback(){
    ctx.drawImage(backgroundtag, 0, 0, canvas.width, canvas.height);
};

function uploadrover(){
    ctx.drawImage(rovertag, roverx, rovery, roverw, roverh);
};

window.addEventListener("keydown", mykey);
function mykey(e){
    keypressed= e.keycode;
    console.log(keypressed);
    if(keypressed=="37"){
        console.log("left");
        left();
        
    }
    if(keypressed=="38"){
        console.log("up");
        up();
        

    }
    if(keypressed=="39"){
        console.log("right");
        right();
        
    }
    if(keypressed=="40"){
        console.log("down");
        down();
        
    }
}

function left(){
    if(roverx>=0){
        roverx= roverx-10;
        console.log("rover x="+ roverx+"and rover y="+rovery);
        uploadback();//this is used to upload a new background everytime a new rover is drawn, the cover the old ones and to make the animation look smooth.
        uploadrover();//this is used to upload a new rover the new x and y everytime the key is pressed, and to ensure it comes over the upload back. 
        
    };
};

function up(){
    if(rovery>=0){
        rovery= rovery+10;
        console.log("rover x="+ roverx+"and rover y="+rovery);
        uploadback();//this is used to upload a new background everytime a new rover is drawn, the cover the old ones and to make the animation look smooth.
        uploadrover();//this is used to upload a new rover the new x and y everytime the key is pressed, and to ensure it comes over the upload back. 
        
    };
};

function right(){
    if(roverx<=700){
        roverx= roverx+10;
        console.log("rover x="+ roverx+"and rover y="+rovery);
        uploadback();//this is used to upload a new background everytime a new rover is drawn, the cover the old ones and to make the animation look smooth.
        uploadrover();//this is used to upload a new rover the new x and y everytime the key is pressed, and to ensure it comes over the upload back. 
        
    };
};

function down(){
    if(rovery<=500){
        rovery= rovery-10;
        console.log("rover x="+ roverx+"and rover y="+rovery);
        uploadback();//this is used to upload a new background everytime a new rover is drawn, the cover the old ones and to make the animation look smooth.
        uploadrover();//this is used to upload a new rover the new x and y everytime the key is pressed, and to ensure it comes over the upload back. 
        
    };
};








