function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').textContent = timeString;
  }
  
  // Update time every second
  setInterval(updateTime, 1000);
  
  // Initial call to display time immediately
  updateTime();
  
  // script.js

// script.js

document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navigation = document.querySelector('.navigation');

  // Function to toggle navigation visibility
  const toggleNavigation = () => {
      navigation.classList.toggle('show');
  };

  navToggle.addEventListener('click', toggleNavigation);

  // Function to check if the device is mobile
  const isMobileDevice = () => {
      return window.matchMedia('(max-width: 768px)').matches;
  };

  // Show navToggle only on mobile devices
  if (isMobileDevice()) {
      navToggle.style.display = 'block';
  } else {
      navToggle.style.display = 'none';
  }

  // Adjust navToggle visibility on window resize
  window.addEventListener('resize', () => {
      if (isMobileDevice()) {
          navToggle.style.display = 'block';
      } else {
          navToggle.style.display = 'none';
      }
  });
});

