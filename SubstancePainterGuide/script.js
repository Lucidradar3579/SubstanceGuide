/* Substance 3D Painter for Roblox - JavaScript Functionality */

document.addEventListener('DOMContentLoaded', function() {
    // Dark mode toggle (if implemented)
    const darkModeToggle = document.createElement('button');
    darkModeToggle.innerHTML = '🌓 Dark Mode';
    darkModeToggle.style.position = 'fixed';
    darkModeToggle.style.top = '20px';
    darkModeToggle.style.right = '20px';
    darkModeToggle.style.padding = '8px 12px';
    darkModeToggle.style.background = 'var(--primary)';
    darkModeToggle.style.color = 'white';
    darkModeToggle.style.border = 'none';
    darkModeToggle.style.borderRadius = 'var(--border-radius-sm)';
    darkModeToggle.style.cursor = 'pointer';
    darkModeToggle.style.zIndex = '1000';
    darkModeToggle.style.fontSize = '0.9rem';

    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        // Save preference to localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            this.innerHTML = '☀️ Light Mode';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            this.innerHTML = '🌓 Dark Mode';
        }
    });

    // Check for saved preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '☀️ Light Mode';
    }

    // Add toggle to header if it exists
    const header = document.querySelector('header');
    if (header) {
        header.appendChild(darkModeToggle);
    }

    // Active nav item based on current page
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.category-list li a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') && currentPath.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });

    // Add some interactive elements to demo pages
    // Material builder interactive element (would be on specific pages)
    const materialBuilder = document.querySelector('.material-builder');
    if (materialBuilder) {
        // This would be implemented on specific material pages
        // For now, just a placeholder
    }

    // Texture resolution calculator (would be on specific pages)
    const resolutionCalculator = document.querySelector('.resolution-calculator');
    if (resolutionCalculator) {
        // This would be implemented on optimization pages
        // For now, just a placeholder
    }

    // Roblox texture checklist (would be on specific pages)
    const textureChecklist = document.querySelector('.texture-checklist');
    if (textureChecklist) {
        // This would be implemented on Roblox workflow pages
        // For now, just a placeholder
        const checklistItems = textureChecklist.querySelectorAll('input[type="checkbox"]');
        checklistItems.forEach(item => {
            item.addEventListener('change', function() {
                // Save checklist state to localStorage
                const checkedItems = Array.from(textureChecklist.querySelectorAll('input[type="checkbox"]:checked')).length;
                const totalItems = textureChecklist.querySelectorAll('input[type="checkbox"]').length;
                // In a real implementation, we would save this state
            });
        });
    }

    // Add smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add copy to clipboard functionality for code blocks
    document.querySelectorAll('pre code').forEach(block => {
        const copyBtn = document.createElement('button');
        copyBtn.innerHTML = '📋 Copy';
        copyBtn.style.position = 'absolute';
        copyBtn.style.top = '5px';
        copyBtn.style.right = '5px';
        copyBtn.style.padding = '2px 6px';
        copyBtn.style.background = 'var(--primary-dark)';
        copyBtn.style.color = 'white';
        copyBtn.style.border = 'none';
        copyBtn.style.borderRadius = 'var(--border-radius-sm)';
        copyBtn.style.cursor = 'pointer';
        copyBtn.style.fontSize = '0.75rem';
        copyBtn.style.zIndex = '10';

        const pre = block.parentElement;
        pre.style.position = 'relative';
        pre.appendChild(copyBtn);

        copyBtn.addEventListener('click', function() {
            const text = block.textContent;
            navigator.clipboard.writeText(text).then(() => {
                copyBtn.innerHTML = '✅ Copied';
                setTimeout(() => {
                    copyBtn.innerHTML = '📋 Copy';
                }, 2000);
            }).catch(err => {
                copyBtn.innerHTML = '❌ Error';
                setTimeout(() => {
                    copyBtn.innerHTML = '📋 Copy';
                }, 2000);
            });
        });
    });
});

// Simple debounce function for search
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}