// Navigation functions
function navigateToLogin(role) {
    // Store the selected role
    sessionStorage.setItem('selectedRole', role);

    // Navigate to login page
    window.location.href = 'login.html';
}
