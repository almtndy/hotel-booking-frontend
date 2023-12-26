function setRouter() {
    switch (window.location.pathname) {
      // If you are logged in you cant access outside pages; redirect to homepage
      case "/":
      case "/login.html":
      case "/register.html":
        if (localStorage.getItem("token")) {
          window.location.pathname = "/dashboard.html";
        }
        break;

      // If you are not logged in you cant access homepage; redirect to /
      case"/bookings.html":
      case"/rooms.html":
      case "/dashboard.html":
        if (!localStorage.getItem("token")) {
          window.location.pathname = "/login.html";

        }
        break;
        
    default:
        break;

  
    }
  }
  
  export { setRouter };