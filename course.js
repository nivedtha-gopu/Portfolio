// Interactive arrow effect with slide animation
document.querySelectorAll('.course-arrow').forEach(arrow => {
    arrow.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const targetContent = document.getElementById(targetId);
        
        // Toggle the show class to slide in/out the details
        if (targetContent.classList.contains('show')) {
            targetContent.classList.remove('show');
        } else {
            targetContent.classList.add('show');
        }
    });
});
