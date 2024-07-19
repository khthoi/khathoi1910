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
function toggle(){
    var dropdown=document.querySelector('.bao');
    dropdown.classList.toggle('active');
}

function toggleAccordion(panelId) {
    var panel = document.getElementById(panelId);
    var allPanels = document.querySelectorAll('.downdown-content');

    // Close all panels
    allPanels.forEach(function(p) {
        if (p !== panel) {
            p.style.maxHeight = null;
        }
    });

    // Toggle the clicked panel
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}


