function validateForm(){
    var name=document.forms[0].txtName.value;
    if (name==""){alert("Hay nhap ten vao!");return false;} 
 else {alert("Hi"+name+"!"); return true;}
  
} 