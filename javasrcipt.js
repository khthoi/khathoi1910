// main.js

function kiemTraChanLe(x) {
    if (!isNaN(x)) {
        if (x % 2 === 0) {
            alert(x + " là số chẵn.");
        } else {
            alert(x + " là số lẻ.");
        }
    } else {
        alert("Vui lòng nhập một số hợp lệ.");
    }
}

// Gọi hàm kiemTraChanLe với giá trị x = 4
kiemTraChanLe(4);
