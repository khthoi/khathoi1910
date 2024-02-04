document.addEventListener("DOMContentLoaded", function () {
    var phai=document.querySelector(".nav2");
    var trai=document.querySelector(".trai");
        var now="under";
    window.addEventListener("scroll", function () {
        console.log(window.pageYOffset);
        if(window.pageYOffset>80){
            if(now=="under"){
                console.log("yes");
                now="upper";
                phai.classList.add("nholaiphai");
                trai.classList.add("nholaitrai");
            }
        }
    })
})