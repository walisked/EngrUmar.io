// Function to update time every second
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = timeString;
  }
  
  // Call the update time function immediately and set an interval to update every second
  setInterval(updateTime, 1000);
  updateTime();  // Initial call to display the time right away
  
  // Mobile navigation toggle script
  document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navigation = document.querySelector('.navigation');
  
    // Function to toggle navigation visibility
    const toggleNavigation = () => {
        navigation.classList.toggle('show');
    };
  
    navToggle.addEventListener('click', toggleNavigation);
  
    // Function to check if the device is mobile
    const isMobileDevice = () => window.matchMedia('(max-width: 768px)').matches;
  
    // Show or hide navToggle based on device type
    const adjustNavToggleVisibility = () => {
        navToggle.style.display = isMobileDevice() ? 'block' : 'none';
    };
  
    // Initial check to set the visibility of navToggle
    adjustNavToggleVisibility();
  
    // Debounce resize event to avoid excessive function calls
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(adjustNavToggleVisibility, 150);
    });
  });
  