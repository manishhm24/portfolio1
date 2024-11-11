// Accordion Functionality
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling; // The content div that follows the header
        
        // Toggle visibility
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }

        // Optionally, you can close other open items
        // accordionHeaders.forEach(otherHeader => {
        //     if (otherHeader !== this) {
        //         otherHeader.nextElementSibling.style.display = "none";
        //     }
        // });
    });
});
