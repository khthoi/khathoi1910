function validateForm() {
    var x = document.getElementById("username").value;
    if (x == "") {
        alert("Please note down your name");
        return false;
    }
    x = document.getElementById("email").value;
    if (x == "") {
        alert("Please note down your email");
        return false;
    }
    x = document.getElementById("phoneNumber").value;
    if (isNaN(Number(x)) || x.length === 0 || x.length > 10) {
        alert("The phone number must be a number with a maximum length of 10 digits. Please enter it again.");
        return false;
    }
    x = document.getElementById("company").value;
    if (x == "") {
        alert("Please note down your Company");
        return false;
    }
}
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
            else if(window.pageYOffset==0){
                if(now="upper"){
                phai.classList.remove("nholaiphai");
                trai.classList.remove("nholaitrai");
                now="under";
                }
        }
    })
})
var img = [];
        var curimg = 0;
        function loadImages() {
            for (var i = 1; i < 4; i++) {
                img[i] = new Image();
                img[i].src = "web3/anhcanhan" + i + ".jpg";
            }
        }
        function next() {
            curimg = (curimg + 1) % img.length;
            document.getElementById("anh").style.opacity = 0;
            setTimeout(function () {
                document.getElementById("anh").src = img[curimg].src;
                document.getElementById("anh").style.opacity = 1;
            }, 500);
        }

        function back() {
            curimg = (curimg - 1 + img.length) % img.length;
            document.getElementById("anh").style.opacity = 0;
            setTimeout(function () {
                document.getElementById("anh").src = img[curimg].src;
                document.getElementById("anh").style.opacity = 1;
            }, 500);
        }
        loadImages();
        document.getElementById("anh").src = img[curimg].src;
        function toggle(){
            var dropdown=document.querySelector('.bao');
            dropdown.classList.toggle('active');
        }