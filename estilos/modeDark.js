
function applyInitialMode() {
    const mode = localStorage.getItem('mode') || 'light';
    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('dark-mode-toggle').style.display = 'none';
        document.getElementById('light-mode-toggle').style.display = 'block';
    } else {
        document.body.classList.add('light-mode');
    }
}

function toggleDarkMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode', !isDarkMode);
    localStorage.setItem('mode', isDarkMode ? 'dark' : 'light');
    document.getElementById('dark-mode-toggle').style.display = isDarkMode ? 'none' : 'block';
    document.getElementById('light-mode-toggle').style.display = isDarkMode ? 'block' : 'none';
}

function initDarkModeToggle() {
    document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
    document.getElementById('light-mode-toggle').addEventListener('click', toggleDarkMode);
}