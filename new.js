var span1=document.getElementsByClassName("close1")[0];
span1.onclick=function(){
  box1.style.display="none"
  body.style.backgroundColor="white"
}
var text=document.getElementById("text");
text.onclick=function(){
  box.style.display="none"
  box1.style.display="block"
}
var email1=document.forms['vform1']['email1'];
var password1=document.forms['vform1']['password1'];
password1.addEventListener('blur' ,password1verify, true)
function validate1(){
  if(email1.value==""){
    alert("Email Required");
    return false;
  }
   if(password1.value==""){
    alert("Password Required");
    return false;
  }
  else if(password1.value.length<4){
    document.getElementById("small2").innerHTML="Password Must Be Atleast 5 charters"
    document.getElementById("small2").style.color="red"
    return false;
  }
}
function password1verify(){
  if(password1.value!=""){
    document.getElementById("small2").innerHTML=""
    return true;


  }
}
var span = document.getElementsByClassName('close')[0];
span.onclick = function() {
    box.style.display = "none"
    body.style.backgroundColor = "white"

    }


function button() {
    box.style.display = "block"
    body.style.backgroundColor = "#ddd"
}
var username = document.forms['vform']['username'];
var email = document.forms['vform']['email'];
var psw = document.forms['vform']['psw'];
var psw1 = document.forms['vform']['psw1'];

username.addEventListener('blur', nameverify, true);
email.addEventListener('blur', emailverify, true);
psw.addEventListener('blur', pswverify, true);
psw1.addEventListener('blur', pswverify, true);

function validate() {
    if (username.value == "" && email.value == "" && psw.value == "" && psw1.value == "") {
        username.style.padding = "8px"
        email.style.padding = "8px"
        psw.style.padding = "8px"
        psw1.style.padding = "8px"
        username.style.border = "2px solid red"
        email.style.border = "2px solid red"
        psw.style.border = "2px solid red"
        psw1.style.border = "2px solid red"
        document.getElementById("check").style.backgroundColor = "red"
        document.getElementById("check1").style.backgroundColor = "red"
        document.getElementById("check2").style.backgroundColor = "red"
        document.getElementById("check3").style.backgroundColor = "red"
        document.getElementById("icon").style.display = "block"
        document.getElementById("icon1").style.display = "block"
        document.getElementById("icon2").style.display = "block"
        document.getElementById("icon3").style.display = "block"

        document.getElementById("name").innerHTML = "UserName Required"
        document.getElementById("name").style.color = "red"
        document.getElementById("mail").innerHTML = "Email Required"
        document.getElementById("mail").style.color = "red "
        document.getElementById("password1").innerHTML = "Password Required"
        document.getElementById("password1").style.color = "red"

        return false;
    } else if (username.value.length < 3) {
        document.getElementById("name").innerHTML = "Username Must Be atleast 5 charters"
        document.getElementById("name").style.color = "red"
        document.getElementById("icon").style.display = "block"
        document.getElementById("check").style.backgroundColor = "red"

        username.focus();
        return false;
    } else if (psw.value != psw1.value) {
        document.getElementById("password1").innerHTML = "Password Not Match"
        document.getElementById("password1").style.color = "red"
        document.getElementById("check2").style.backgroundColor = "red"
        document.getElementById("check3").style.backgroundColor = "red"
        return false;

    } else if (psw.value.length < 4) {
        document.getElementById("password1").innerHTML = "password Must Be atleast 5 charters "
        document.getElementById("password1").style.color = "red"
        document.getElementById("check2").style.backgroundColor = "red"
        document.getElementById("check3").style.backgroundColor = "red"
        psw.style.border = "1px solid red"
        psw1.style.border = "1px solid red"
        document.getElementById("icon2").style.display = "block"
        document.getElementById("icon3").style.display = "block"
        return false;
    } else if (psw.value === psw1.value) {
        psw.style.border = "2px solid green"
        psw1.style.border = "2px solid green"
        document.getElementById("circle2").style.display = "block"
        document.getElementById("circle2").style.color = "green"
        document.getElementById("circle3").style.display = "block"
        document.getElementById("circle3").style.color = "green"
        document.getElementById("icon2").style.display = "none"
        document.getElementById("icon3").style.display = "none"
        document.getElementById("password1").innerHTML = ""
        document.getElementById("check2").style.backgroundColor = "green"
        document.getElementById("check3").style.backgroundColor = "green"
        psw.style.padding = "8px"
        psw1.style.padding = "8px"
        return false;
    }
}

function nameverify() {
    if (username.value.length >= 3) {
        username.style.padding = "8px"
        username.style.border = "2px solid green"
        document.getElementById("circle").style.display = "block"
        document.getElementById("circle").style.color = "green"
        document.getElementById("name").innerHTML = ""
        document.getElementById("icon").style.display = "none"
        document.getElementById("check").style.backgroundColor = "green"

        return true;
    }
}

function emailverify() {
    if (email.value != "") {
        email.style.padding = "8px"
        email.style.border = "2px solid green"
        document.getElementById("circle1").style.display = "block"
        document.getElementById("circle1").style.color = "green"
        document.getElementById("mail").innerHTML = ""
        document.getElementById("check1").style.backgroundColor = "green"
        document.getElementById("icon1").style.display = "none"
        return true;
    }
}
