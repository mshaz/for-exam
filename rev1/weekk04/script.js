function transformUpperCase(){
    let a = document.getElementById("namaPengguna");
    a.value = a.value.toUpperCase();
}

let elUsername = document.getElementById("namaPengguna");
elUsername.addEventListener("keyup",transformUpperCase);


function checkPasswordLength() {
    let password = document.getElementById("kataLaluan").value
    if(password.length < 5){
        alert("Password must be more than 5 characters");
    }else {
        alert("Password Accepted")
    }
}