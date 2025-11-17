// Navigation functions
function navigateToLogin(role) {
    // Store the selected role
    sessionStorage.setItem('selectedRole', role);

    // Navigate to login page
    window.location.href = 'login.html';
}

function navigateToDashboard() {
    const role = sessionStorage.getItem('selectedRole') || 'manager';

    if (role === 'admin') {
        window.location.href = 'admin-dashboard.html';
    } else {
        window.location.href = 'manager-dashboard.html';
    }
}

// Check if we're on login page and update icon based on role
if (window.location.pathname.includes('login.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        const role = sessionStorage.getItem('selectedRole') || 'manager';
        const roleIcon = document.getElementById('roleIcon');

        if (role === 'admin' && roleIcon) {
            roleIcon.innerHTML = `
                <svg width="80" height="80" viewBox="0 0 120 120" fill="none">
                    <circle cx="60" cy="35" r="18" fill="white"/>
                    <path d="M40 70 L45 55 L55 50 L65 50 L75 55 L80 70 L75 85 L65 90 L55 90 L45 85 Z" fill="white"/>
                    <rect x="52" y="48" width="4" height="12" fill="#7C3AED"/>
                    <rect x="64" y="48" width="4" height="12" fill="#7C3AED"/>
                    <path d="M48 56 L52 60 L56 56" stroke="#7C3AED" stroke-width="3" fill="none"/>
                    <path d="M64 56 L68 60 L72 56" stroke="#7C3AED" stroke-width="3" fill="none"/>
                </svg>
            `;
        }
    });
}