function setRouter() {
  switch (window.location.pathname) {
    // If you are logged in you cant access outside pages; redirect to homepage
    case "/":
    case "/admin/login.html":
    case "/admin/register.html":
      if (localStorage.getItem("token")) {
        window.location.pathname = "/admin/dashboard.html";
      }
      break;

    case "/":
    case "/login.html":
    case "/register.html":
      if (localStorage.getItem("token")) {
        window.location.pathname = "/homepage.html";
      }
      break;

    // If you are not logged in you cant access homepage; redirect to /
    case"/admin/bookings.html":
    case "/dashboard.html":
      case "/rooms.html":
      if (!localStorage.getItem("token")) {
        window.location.pathname = "/admin/login.html";

      }
      break;

    case"/booking_confirmation.html":
    case "/homepage.html":
      if (!localStorage.getItem("token")) {
        window.location.pathname = "/login.html";

      }
      break;
      
  default:
      break;


  }
}

export { setRouter };