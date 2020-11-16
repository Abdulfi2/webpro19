function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if ( username == "ahmad2017" && password == "integrity"){
    alert ("Login successsfully");
    window.location = "../../Login/login.html";
      }
      else{
        alert("Invalid username or password");
        }
      return false;
      }