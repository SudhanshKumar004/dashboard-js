function loginpage(){
    let getemail = localStorage.getItem("email");
    let getpsw = localStorage.getItem("password");
    let email = document.querySelector('#email1').value;
    let psw = document.querySelector('#psw2').value;

    if(getemail == email && getpsw == psw){
        window.alert("done")
        window.location.href = "./dash.html";
        return false;
    }

}