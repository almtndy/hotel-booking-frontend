import { backendurl, successNotification, errorNotification } from "../utils/utils.js";

// rooms.js file content
function add_room() {
  // Get the form data
  let formData = new FormData(document.getElementById("add_room_form"));

  // Fetch API call to submit form data
  fetch(`${backendurl}/api/room`, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      // If the response is successful, do something (e.g., show success message)
      document.querySelector('.alert-success').classList.remove('d-none');
      document.querySelector('.alert-danger').classList.add('d-none');
      // You might want to update the room list or perform other actions upon success
    } else {
      // If there's an error in the response, show an error message
      document.querySelector('.alert-danger').classList.remove('d-none');
      document.querySelector('.alert-success').classList.add('d-none');
    }
  })
  .catch(error => {
    // Handle any errors that might occur during the fetch call
    console.error('Error:', error);
  });
}

// Add an event listener to the form submission
let add_room_form = document.getElementById("add_room_form");

add_room_form.addEventListener("submit", function (e) {
  e.preventDefault();
  add_room();
});


//ambot d mo fetch :((
