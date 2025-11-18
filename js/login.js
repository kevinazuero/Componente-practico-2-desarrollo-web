document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const role = sessionStorage.getItem('selectedRole') || 'manager';

            const email = this.querySelector('input[type="email"]').value;
            const password = this.querySelector('input[type="password"]').value;

            if (email && password) {
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

    const loginButtons = document.querySelectorAll('.btn-login');
    loginButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = 'role-selection.html';
        });
    });
});