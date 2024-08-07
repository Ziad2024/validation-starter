let Name=document.querySelector(".name")
let phoneError=document.querySelector(".phone")
let emailError=document.querySelector(".email")
let messageError=document.querySelector(".message")

function validatename(){
    var name =document.getElementById("name").value
    if(name.length == 0){
        Name.innerHTML="Name is required"
        return false;
    }
    if (!name.match(/^[A-Za-z]+(\s[A-Za-z]+)+$/))
    {
        Name.innerHTML="just first and last name"
        Name.style.color = "red";
        return false;
    }
    Name.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    Name.style.color = "green";
    return true;
}

function validatephone(){
    var phone =document.getElementById("phone").value
    if(phone.length == 0){
        phoneError.innerHTML="phone is required"
        phoneError.style.color = "red";
        return false;
    }
    if(phone.length !== 11){
        phoneError.innerHTML="should be in 11 digits"
        return false;
    }
    if (!phone.match(/^[0-9]{11}$/))
    {
        phoneError.innerHTML="only digits"
        return false;
    }
    phoneError.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    phoneError.style.color = "green";
    return true;
}

function validateemail(){
    var email =document.getElementById("email").value
    if(email.length == 0){
        emailError.innerHTML="email is required"
        emailError.style.color = "red";
        return false;
    }
    
    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/))
    {
        emailError.innerHTML="email is invalid"
        return false;
    }
    emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    emailError.style.color = "green";
    return true;
}

function validatemessage(){
    var message =document.getElementById("message").value
    let required=30;
    let left= required - message.length;
    if(message.length == 0){
        messageError.innerHTML="messaga is required"
        messageError.style.color = "red";
        return false;
    }
    if(left > 0){
        messageError.innerHTML= left + ` more charachters required`
        return false;
    }
    messageError.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    messageError.style.color = "green";
    return true;
}

function validate(){
    if(!validatename() || !validatephone() || !validateemail() || !validatemessage())
    {
        return false;
    }
}