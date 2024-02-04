var img=[];
var curimg=0;
function load_images(){
    for(i=1;i<6;i++) img[i]= new Image();
        img[1].src="https://a.pinatafarm.com/1139x1138/f55da91a83/cheems.jpg";
        img[2].src="https://pbs.twimg.com/profile_images/1366441277663895552/Omm9O6P5_400x400.jpg"
        img[3].src="https://i.redd.it/k5fzefpq9h341.png"
        img[4].src="https://i.redd.it/b1k205qlxp751.png"
        img[5].src="https://th.bing.com/th/id/OIP.PXWxOv7dFQ_gn04u5uD8rwHaHT?rs=1&pid=ImgDetMain"
    } 
function next(){
    if (curimg<img.length-1) curimg++;
    document.getElementById("rose").src=img[curimg].src;
    if (curimg==5) curimg=0;
}
function back(){
    if (curimg>0){
        curimg--;
        document.getElementById("rose").src=img[curimg].src;
    }
    if (curimg==1) curimg=img.length-1;
}