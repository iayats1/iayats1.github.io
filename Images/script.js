document.addEventListener("DOMContentLoaded", function() {
    fetch('nav.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('body').insertAdjacentHTML('afterbegin', data);
        
        // Setup main navigation toggle
        document.querySelectorAll('.menu-toggle').forEach(toggle => {
            toggle.addEventListener('click', function() {
                document.getElementById('navigation-wrapper').classList.toggle('show-menu');
            });
        });


        // In your JavaScript file
        document.querySelector('.mobile-button').addEventListener('click', function() {
        document.getElementById('mobileMenuOverlay').style.display = 'flex';
        document.body.classList.add('blur-background');
});

        document.getElementById('closeMenuButton').addEventListener('click', function() {
        document.getElementById('mobileMenuOverlay').style.display = 'none';
        document.body.classList.remove('blur-background');
});

        // Highlight current page link
        const navLinks = document.querySelectorAll('.fixed-nav a');
        const currentUrl = window.location.pathname.split('/').pop();

        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentUrl) {
                link.classList.add('active');
            }
        });
    });
});

