import { backendurl, successNotification, errorNotification } from "../utils/utils.js";

const bookingForm = document.getElementById("booking_form");

bookingForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const submitButton = bookingForm.querySelector("button[type='submit']");
  submitButton.disabled = true;

  try {
    const formData = new FormData(bookingForm);

    const response = await fetch(`${backendurl}/api/booking`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (response.ok) {
      bookingForm.reset();
      successNotification("Booking Successful.", 5);
    } else {
      const errorData = await response.json();
      if (errorData && errorData.message) {
        errorNotification(errorData.message, 5);
      } else {
        errorNotification("Failed to process the booking.", 5);
      }
    }
  } catch (error) {
    errorNotification("An error occurred. Please try again later.", 5);
    console.error("Error during form submission:", error);
  } finally {
    submitButton.disabled = false;
  }
});
