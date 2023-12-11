import { setRouter } from "../router/router.js";

setRouter();

const backendurl = "http://hotel-booking-backend.test";

//notification
function successNotification(message, seconds = ""){
    document.querySelector(".alert-success").classList.remove("d-none");
    document.querySelector(".alert-success").classList.add("d-block");
    document.querySelector(".alert-success").innerHTML = message;
    
    if(seconds != "") {
      setTimeout(function(){
        document.querySelector(".alert-success").classList.remove("d-block");
        document.querySelector(".alert-success").classList.add("d-none");
      }, seconds * 1000);
    }
  }
  
  function errorNotification(message, seconds = ""){
    document.querySelector(".alert-danger").classList.remove("d-none");
    document.querySelector(".alert-danger").classList.add("d-block");
    document.querySelector(".alert-danger").innerHTML = message;
  
    if (seconds != ""){
      setTimeout(function(){
        document.querySelector(".alert-danger").classList.remove("d-block");
        document.querySelector(".alert-danger").classList.add("d-none");
      }, seconds * 500);
    }
  }

  export { backendurl, successNotification, errorNotification};