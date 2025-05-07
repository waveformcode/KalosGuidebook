document.addEventListener("DOMContentLoaded", () => {
    // Navbar dropdown
    const activitiesLink = document.getElementById("activities-link");
    const dropdown = document.getElementById("activities-dropdown");
  
    document.addEventListener("click", (e) => {
      const isClickOnNav = activitiesLink.contains(e.target);
      const isInsideNavDropdown = dropdown.contains(e.target);
  
      if (isClickOnNav) {
        e.preventDefault();
  
        const rect = activitiesLink.getBoundingClientRect();
        dropdown.style.top = `${rect.bottom + window.scrollY}px`;
        dropdown.style.left = `${rect.left + window.scrollX}px`;
  
        dropdown.classList.toggle("hidden");
        return;
      }
  
      if (!isInsideNavDropdown) {
        dropdown.classList.add("hidden");
      }
    });
  
    // Body dropdown
    const details = document.querySelector(".dropdown-body details");
  
    document.addEventListener("click", (e) => {
      const isInsideDetails = details.contains(e.target);
  
      if (!isInsideDetails) {
        details.removeAttribute("open");
      }
    });
  });
  