// Load navbar
fetch('navbar.html')
    .then(r => r.text())
    .then(html => {
        document.getElementById('navbar-placeholder').innerHTML = html;
    });

// Load menu
fetch('menu.html')
    .then(r => r.text())
    .then(html => {
        document.getElementById('menu-placeholder').innerHTML = html;
        const script = document.createElement('script');
        script.src = '/includes/menu.js';
        document.body.appendChild(script);
    });

    // Load menu
fetch('footer.html')
    .then(r => r.text())
    .then(html => {
        document.getElementById('footer-placeholder').innerHTML = html;
    });
    
