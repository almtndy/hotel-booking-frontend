// Form Register
const url = "http://hotel-booking-backend.test";

const form_register = document.getElementById("form_register");

form_register.onsubmit = async (e) => {
    e.preventDefault();
    // console.log('hakdog');
    
  // disable button
  document.querySelector("#form_register button").disabled = true;

  //get values of form (input, text area,select) put it as form data
  const formData = new FormData(form_register);

  //fetch api user registered endpoint
  const response = await fetch(url + "/api/user", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    //get response if 200-299 status code
  if (response.ok) {
    const json = await response.json();
    console.log(json);

    document.querySelector(".alert-success").classList.remove("d-none");
    document.querySelector(".alert-success").classList.add("d-block");
    
    form_register.reset();

    successNotification("Registered Successfully.", 5);
  }
  // get response if 422 status code
   else if (response.status == 422) {
    const json = await response.json();
    
    errorNotification(json.message, 5);
  }

  //enable button
  document.querySelector("#form_register button").disabled = false;
};

function successNotification(message, seconds){
  document.querySelector(".alert-success").classList.remove("d-none");
  document.querySelector(".alert-success").classList.add("d-block");
  document.querySelector(".alert-success").innerHTML = message;
  
  setTimeout(function(){
      document.querySelector(".alert-success").classList.remove("d-block");
      document.querySelector(".alert-success").classList.add("d-none");
  }, seconds * 1000);
}

function errorNotification(message, seconds){
  document.querySelector(".alert-danger").classList.remove("d-none");
  document.querySelector(".alert-danger").classList.add("d-block");
  document.querySelector(".alert-danger").innerHTML = message;

  setTimeout(function(){
      document.querySelector(".alert-danger").classList.remove("d-block");
      document.querySelector(".alert-danger").classList.add("d-none");
  }, seconds * 1000);
}