// Role Selection Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Role selection functionality
    const roleCards = document.querySelectorAll('.role-card');
    const roleSelectBtns = document.querySelectorAll('.role-select-btn');

    // Card click handler
    roleCards.forEach(card => {
        card.addEventListener('click', function() {
            selectRole(this);
        });
    });

    // Button click handler (prevents event bubbling)
    roleSelectBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.role-card');
            selectRole(card);
        });
    });

    function selectRole(selectedCard) {
        // Remove selected class from all cards
        roleCards.forEach(card => {
            card.classList.remove('selected');
            const btn = card.querySelector('.role-select-btn');
            if (btn) {
                btn.classList.remove('btn-primary');
                btn.classList.add('btn-outline-purple');
                btn.textContent = btn.textContent.replace('Selected', 'Select');
            }
        });

        // Add selected class to clicked card
        selectedCard.classList.add('selected');
        const selectedBtn = selectedCard.querySelector('.role-select-btn');
        const role = selectedCard.getAttribute('data-role');

        if (selectedBtn) {
            selectedBtn.classList.remove('btn-outline-purple');
            selectedBtn.classList.add('btn-primary');
            selectedBtn.textContent = `Selected ${role.charAt(0).toUpperCase() + role.slice(1)}`;
        }

        // Store selected role
        localStorage.setItem('selectedRole', role);

        // Show confirmation and redirect
        showRoleConfirmation(role);
    }

    function showRoleConfirmation(role) {
        // Create confirmation modal-like notification
        const existingNotification = document.querySelector('.role-notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = 'role-notification alert alert-success alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-3';
        notification.style.zIndex = '1060';
        notification.innerHTML = `
            <strong>Role Selected!</strong> You've chosen ${role} access. Redirecting to login...
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;

        document.body.appendChild(notification);

        // Auto redirect after 2 seconds
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000);
    }

    // Check if there's a previously selected role
    const previousRole = localStorage.getItem('selectedRole');
    if (previousRole) {
        const previousCard = document.querySelector(`.role-card[data-role="${previousRole}"]`);
        if (previousCard) {
            selectRole(previousCard);
        }
    }

    // Add keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === '1' || e.key === 'a') {
            const adminCard = document.querySelector('.role-card[data-role="admin"]');
            if (adminCard) selectRole(adminCard);
        } else if (e.key === '2' || e.key === 'm') {
            const managerCard = document.querySelector('.role-card[data-role="manager"]');
            if (managerCard) selectRole(managerCard);
        } else if (e.key === 'Enter') {
            const selectedCard = document.querySelector('.role-card.selected');
            if (selectedCard) {
                const role = selectedCard.getAttribute('data-role');
                showRoleConfirmation(role);
            }
        }
    });
});