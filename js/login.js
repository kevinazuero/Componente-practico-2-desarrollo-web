// Handle login form submission
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get the selected role from session storage
            const role = sessionStorage.getItem('selectedRole') || 'manager';

            // Simple validation (in a real app, this would be more complex)
            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;

            if (email && password) {
                // Navigate to appropriate dashboard based on role
                if (role === 'admin') {
                    window.location.href = 'admin-dashboard.html';
                } else {
                    window.location.href = 'manager-dashboard.html';
                }
            } else {
                alert('Please enter both email and password');
            }
        });
    }

    // Update login button in navbar to go to role selection
    const loginButtons = document.querySelectorAll('.btn-login');
    loginButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = 'role-selection.html';
        });
    });
});