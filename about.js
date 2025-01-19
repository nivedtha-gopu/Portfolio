document.addEventListener('DOMContentLoaded', function() {
    const downArrow = document.querySelector('.down-arrow');

    // Scroll to Fun Facts section when down arrow is clicked
    downArrow.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const targetSection = document.getElementById('fun-facts');
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    const toggleFunFactsButton = document.getElementById('toggle-fun-facts');
    const funFactsContent = document.querySelector('.fun-facts-content');

    const toggleHobbiesButton = document.getElementById('toggle-hobbies');
    const hobbiesContent = document.querySelector('.hobbies-content');

    // Toggle Fun Facts
    toggleFunFactsButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (funFactsContent.style.display === 'none') {
            funFactsContent.style.display = 'block';
        } else {
            funFactsContent.style.display = 'none';
        }
    });

    // Toggle Hobbies
    toggleHobbiesButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (hobbiesContent.style.display === 'none') {
            hobbiesContent.style.display = 'block';
        } else {
            hobbiesContent.style.display = 'none';
        }
    });
});
