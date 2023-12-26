// Set the backend URL
const backendurl = 'http://hotel-booking-backend.test';

// Function to fetch and update room data
async function fetchAndPopulateRooms() {
  try {
    // Fetch data from the API endpoint
    const response = await fetch(`${backendurl}/api/rooms`);
    const data = await response.json();

    if (response.ok) {
      // If the response is successful, update the table
      populateTable(data);
    } else {
      // If there's an error in the response, show an error message
      errorNotification("Failed to fetch room data.", 5);
    }
  } catch (error) {
    // Handle any errors that might occur during the fetch call
    console.error('Error:', error);
    errorNotification("An error occurred while fetching room data.", 5);
  }
}

// Function to populate the table with room data
function populateTable(data) {
  const roomDataContainer = document.getElementById("room-data");

  // Clear existing table rows
  roomDataContainer.innerHTML = "";

  // Iterate through the data and populate the table
  data.forEach((room, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <th scope="row">${index + 1}</th>
      <td>${room.room_name}</td>
      <td>${room.price}</td>
      <td>${room.details}</td>
      <td>
        <!-- Add any actions you want here, e.g., edit or delete buttons -->
      </td>
    `;
    roomDataContainer.appendChild(row);
  });
}

// Fetch and populate rooms when the page loads
document.addEventListener("DOMContentLoaded", fetchAndPopulateRooms);
