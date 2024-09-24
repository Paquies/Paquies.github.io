document.addEventListener('DOMContentLoaded', function() {
    const themeSelect = document.getElementById('theme-select');
    const currentTheme = localStorage.getItem('theme') || 'auto';

    document.documentElement.setAttribute('data-theme', currentTheme);
    themeSelect.value = currentTheme;

    themeSelect.addEventListener('change', function() {
        const selectedTheme = themeSelect.value;
        document.documentElement.setAttribute('data-theme', selectedTheme);
        localStorage.setItem('theme', selectedTheme);
    });

    if (currentTheme === 'auto') {
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        if (prefersDarkScheme.matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }
});