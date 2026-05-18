// Load navbar
fetch('/includes/navbar.html')
    .then(r => r.text())
    .then(html => {
        document.getElementById('navbar-placeholder').innerHTML = html;
    });

// Load menu
fetch('/includes/menu.html')
    .then(r => r.text())
    .then(html => {
        document.getElementById('menu-placeholder').innerHTML = html;
        const script = document.createElement('script');
        script.src = '/includes/menu.js';
        document.body.appendChild(script);
    });

    // Load menu
fetch('/includes/footer.html')
    .then(r => r.text())
    .then(html => {
        document.getElementById('footer-placeholder').innerHTML = html;
    });
    