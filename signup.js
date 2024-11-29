function data(){
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let number = document.querySelector('#number').value;
    let psw = document.querySelector('#psw').value;


    if(name === ""){
        document.querySelector('#errorname').innerHTML = "Please enter name";
        let selectedname = document.querySelector('#name');
        selectedname.style.borderColor = "red";
        selectedname.style.outlineColor = "red";
        return false;
    }

    if(email === ""){
        document.querySelector('#erroremail').innerHTML = "Please enter email"
        let selectedemail = document.querySelector('#email');
        selectedemail.style.borderColor = "red";
        selectedemail.style.outlineColor = "red";
        return false;
    }

    else if(!(email.includes('@') && email.includes('.com'))){
        document.querySelector('#erroremail').innerHTML = "Enter valid email.";
        let selectemail = document.querySelector('#email');
        selectemail.style.borderColor = "red";
        selectemail.style.outlineColor = "red";
        return false;
    }

    if(number === ""){
        document.querySelector('#errornum').innerHTML = "Please enter number"
        let selectednumber = document.querySelector('#number');
        selectednumber.style.borderColor = "red";
        selectednumber.style.outlineColor = "red";
        return false;
    }

     else if(number.length !== 10){
        document.querySelector('#errornum').innerHTML = "Please enter 10 digit number";
        let selectnumber = document.querySelector('#number');
        selectnumber.style.borderColor = "red";
        selectnumber.style.outlineColor = "red";
        return false;
    }

     else if(isNaN(number)){
        document.querySelector('#errornum').innerHTML = "Please enter numbers only";
        let selectnumber = document.querySelector('#number');
        selectnumber.style.borderColor = "red";
        selectnumber.style.outlineColor = "red";
        return false;
    }
    
    if(psw === ""){
        document.querySelector('#errorpsw').innerHTML = "Please enter password"
        let selectedpsw = document.querySelector('#psw');
        selectedpsw.style.borderColor = "red";
        selectedpsw.style.outlineColor = "red";
        return false;
    }

    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
    localStorage.setItem("number", number)
    localStorage.setItem("password", psw)

    window.alert("Signed Up Successfully")
}