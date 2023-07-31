// Custom JavaScript

// Get all the section titles
const sectionTitles = document.querySelectorAll('.section-title');

// Add click event listener to each section title
sectionTitles.forEach(title => {
  title.addEventListener('click', () => {
    // Toggle the 'active' class on the parent section to show/hide the content
    title.parentElement.classList.toggle('active');
  });
});
