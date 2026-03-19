document.addEventListener("DOMContentLoaded", () => {

    // 1. Sticky Header
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileBtn.querySelector('i').classList.remove('fa-times');
                mobileBtn.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // 3. Simple Form Submission Stub
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn = bookingForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;

            // Show loading state
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            btn.disabled = true;

            // Simulate API Call / Processing
            setTimeout(() => {
                alert("Thank you! Your booking request has been received. Our team will contact you shortly to confirm details.");
                bookingForm.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }
});
