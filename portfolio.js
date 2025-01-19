// Scroll to Skills section when arrow-down in header is clicked
function scrollToContent() {
    window.scrollTo({
        top: document.getElementById('skills').offsetTop,
        behavior: 'smooth'
    });
}

// Scroll to Projects section when arrow-down in skills is clicked
function scrollToProjects() {
    window.scrollTo({
        top: document.getElementById('projects').offsetTop,
        behavior: 'smooth'
    });
}

// Toggle Projects visibility (show/hide with animation)
function toggleProjects() {
    var projectsSection = document.getElementById('projects');

    if (projectsSection.classList.contains('show')) {
        projectsSection.classList.remove('show');
    } else {
        projectsSection.classList.add('show');
    }
}
