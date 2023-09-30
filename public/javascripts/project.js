// projects.js

document.addEventListener("DOMContentLoaded", function() {

    // Get all project cards
    const projectCards = document.querySelectorAll('.project-card');
  
    // Add hover effect to project cards
    projectCards.forEach(card => {
      card.addEventListener('mouseover', function() {
        this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
      });
      card.addEventListener('mouseout', function() {
        this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
      });
    });
  
    // Add click event to "Explore" buttons
    const exploreButtons = document.querySelectorAll('.project-button');
    
    exploreButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault();
        const projectName = this.parentElement.querySelector('h2').innerText;
        alert(`You're about to explore ${projectName}.`);
        // You can redirect the user to the project page here
        window.location.href = this.href;
      });
    });
  
  });
  