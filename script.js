// JavaScript code (script.js)
// Get all the sections
const sections = document.querySelectorAll('.section');

// Add click event listener to each section
sections.forEach(section => {
  section.addEventListener('click', () => {
    // Toggle the 'active' class on the clicked section to show/hide the content
    section.classList.toggle('active');
  });
});
