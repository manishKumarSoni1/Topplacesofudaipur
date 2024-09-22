document.addEventListener("DOMContentLoaded", function() {
    // FAQ Section Toggle
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.querySelector('.answer');
            const icon = item.querySelector('.toggle-icon');
            if (answer.style.display === "block") {
                answer.style.display = "none";
                icon.textContent = "+";
            } else {
                answer.style.display = "block";
                icon.textContent = "-";
            }
        });
    });

    // Floating Chat Button
    const chatButton = document.getElementById('chatButton');
    const chatWindow = document.getElementById('chatWindow');
    const closeChat = document.getElementById('closeChat');

    chatButton.addEventListener('click', () => {
        chatWindow.style.display = 'block';
    });

    closeChat.addEventListener('click', () => {
        chatWindow.style.display = 'none';
    });
});



let section = document.querySelectorAll('section')
let navLink = document.querySelectorAll('header nav a')

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top > offset && top < offset + height) {
            navLink.forEach(links => {
                links.classList.remove('active');
                let selector = 'header nav a[href*="' + CSS.escape(id) + '"]';
                let activeLink = document.querySelector(selector);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
        }
    });
}




document.addEventListener("DOMContentLoaded", function() {
    const viewAllBtn = document.querySelector(".view-all");
    const placeCards = document.querySelectorAll(".place-card");
    let isExpanded = false;

    viewAllBtn.addEventListener("click", function() {
        if (!isExpanded) {
            placeCards.forEach(card => {
                card.style.display = "block";
            });
            viewAllBtn.textContent = "Show Less";
        } else {
            placeCards.forEach((card, index) => {
                if (index >= 3) {
                    card.style.display = "none";
                }
            });
            viewAllBtn.textContent = "View All";
        }
        isExpanded = !isExpanded;
    });

    // Initially show only the first three cards
    placeCards.forEach((card, index) => {
        if (index >= 3) {
            card.style.display = "none";
        }
    });
});


// translate website

function addCustomStyles() {
    const translateElement = document.querySelector('.goog-te-gadget-simple');
    
    if (translateElement) {
      // Apply styles to the widget container
      translateElement.style.backgroundColor = '#4CAF50'; // Green background
      translateElement.style.borderRadius = '5px';
      translateElement.style.padding = '10px 20px';
      translateElement.style.color = 'white';
      translateElement.style.cursor = 'pointer';
      translateElement.style.transition = 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease';
      translateElement.style.fontFamily = 'Arial, sans-serif';
      
      // Apply hover effect using JavaScript
      translateElement.addEventListener('mouseover', function() {
        translateElement.style.backgroundColor = '#45a049'; // Darker green
        translateElement.style.transform = 'translateY(-3px)';
        translateElement.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
      });
  
      translateElement.addEventListener('mouseout', function() {
        translateElement.style.backgroundColor = '#4CAF50';
        translateElement.style.transform = 'translateY(0)';
        translateElement.style.boxShadow = 'none';
      });
      
      // Hide the Google Translate icon
      const icon = document.querySelector('.goog-te-gadget-icon');
      if (icon) {
        icon.style.display = 'none';
      }
    }
  }
  
  // Run the addCustomStyles function after the widget is loaded
  window.onload = function() {
    setTimeout(addCustomStyles, 1000); // Delay to ensure the widget is fully loaded
  };
  