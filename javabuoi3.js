function validateform(e){
    const form = e.target
    var FirstNum = form.querySelector("#so1").value
    var SecondNum= form.querySelector("#so2").value
    if (isNaN(FirstNum) || isNaN(SecondNum)) {
        alert("Vui lòng nhập đủ hai số");
        return;
}
}
var pheptinh = document.querySelector("#pheptinh");
var operators = ["+", "-", "*", "/"];

operators.forEach(operator => {
    var option = document.createElement("option");
    option.value = operator;
    option.textContent = operator;
    pheptinh.appendChild(option);
});
function submit(){
    const so1 = parseFloat(document.getElementById("so1").value);
    const so2 = parseFloat(document.getElementById("so2").value);
    const pheptinh = document.getElementById("pheptinh").value;
    let ketqua;
    switch (pheptinh) {
        case "+":
            ketqua = so1 + so2;
            break;
        case "-":
            ketqua = so1 - so2;
            break;
        case "*":
            ketqua = so1 * so2;
            break;
        case "/":
            if(so1==0){ketqua="0 không thể chia cho bất kì số nào!"; break;}
            ketqua = so1 / so2;
            break;
    }
    document.getElementById("kq").value = ketqua;
    appendToHistory(`${so1} ${pheptinh} ${so2} = ${ketqua}`);
}  
function appendToHistory(expression) {
    const lichSuTinhToan = document.getElementById("history");
    const p = document.createElement("p");
    p.textContent = expression;
    lichSuTinhToan.appendChild(p);
}
document.addEventListener("DOMContentLoaded", function() {
var colorButton = document.getElementById("doimau");
    var t = false;
    colorButton.addEventListener("click", function() {
        if (t) {
            document.body.style.backgroundColor = "white";
        } else {
            document.body.style.backgroundColor = "green";
        }
        t = !t;
    });
});