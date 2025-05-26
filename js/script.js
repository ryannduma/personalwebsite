// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const themeIcon = document.querySelector('.theme-icon');
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
    } else {
        themeIcon.textContent = '🌙';
    }
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    if (!localStorage.getItem('theme')) {
        const themeIcon = document.querySelector('.theme-icon');
        if (e.matches) {
            document.body.setAttribute('data-theme', 'dark');
            themeIcon.textContent = '☀️';
        } else {
            document.body.removeAttribute('data-theme');
            themeIcon.textContent = '🌙';
        }
    }
});