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