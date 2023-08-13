// Animations
AOS.init({
    anchorPlacement: 'top-left',
    duration: 1000
  });
  
  // Add your javascript here

  // Add this JavaScript after including AOS and other libraries
  document.addEventListener('DOMContentLoaded', function() {
    var projectsDropdownToggle = document.querySelector('#projectsDropdown');
    var projectsDropdownMenu = document.querySelector('.dropdown-menu');

    projectsDropdownToggle.addEventListener('click', function() {
      projectsDropdownMenu.classList.toggle('show');
    });

    // Close the dropdown when clicking outside of it
    window.addEventListener('click', function(event) {
      if (!projectsDropdownToggle.contains(event.target) && !projectsDropdownMenu.contains(event.target)) {
        projectsDropdownMenu.classList.remove('show');
      }
    });
  });



