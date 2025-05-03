// Theme Switcher Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved theme preference or use the default theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
    
    // Get the theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    
    // Update initial icon
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = savedTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
        }
        
        // Add click event listener
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            // Update theme
            document.body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Update icon
            const icon = this.querySelector('i');
            if (icon) {
                icon.className = newTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
            }
        });
    }
});

// Function to create and add the theme toggle button
function createThemeToggle() {
    // Create the theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.id = 'theme-toggle';
    themeToggle.className = 'theme-toggle';
    themeToggle.setAttribute('aria-label', 'Toggle theme');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    
    // Add the button to the body
    document.body.appendChild(themeToggle);
}

// Function to toggle between light and dark themes
function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    // Update the theme
    document.body.setAttribute('data-theme', newTheme);
    
    // Save the theme preference
    localStorage.setItem('theme', newTheme);
    
    // Update the theme toggle button icon
    updateThemeIcon(newTheme);
}

// Function to update the theme toggle button icon
function updateThemeIcon(theme) {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
        }
    }
} 