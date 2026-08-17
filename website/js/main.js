/* ==========================================================================
   Kodemuda Web Development Agency - Main JavaScript Interactions
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initScrollHeader();
    initMobileMenu();
    initPortfolioFilter();
    initContactForm();
});

/**
 * 1. Scroll listener to style sticky navbar on scroll
 */
function initScrollHeader() {
    const navbar = document.querySelector('header.sticky-nav, nav.fixed-nav');
    if (!navbar) return;

    const handleScroll = () => {
        if (window.scrollY > 10) {
            navbar.classList.add('scroll-scrolled');
        } else {
            navbar.classList.remove('scroll-scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once in case page loads scrolled down
}

/**
 * 2. Mobile navigation menu drawer toggle
 */
function initMobileMenu() {
    const menuToggleBtn = document.querySelector('.mobile-menu-toggle');
    const mobileNavMenu = document.querySelector('.mobile-nav-menu');
    
    if (!menuToggleBtn || !mobileNavMenu) return;

    menuToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileNavMenu.classList.toggle('open');
        
        // Update menu icon if it's a Material symbol
        const iconSpan = menuToggleBtn.querySelector('.material-symbols-outlined');
        if (iconSpan) {
            if (mobileNavMenu.classList.contains('open')) {
                iconSpan.textContent = 'close';
            } else {
                iconSpan.textContent = 'menu';
            }
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileNavMenu.classList.contains('open') && !mobileNavMenu.contains(e.target) && !menuToggleBtn.contains(e.target)) {
            mobileNavMenu.classList.remove('open');
            const iconSpan = menuToggleBtn.querySelector('.material-symbols-outlined');
            if (iconSpan) iconSpan.textContent = 'menu';
        }
    });
}

/**
 * 3. Portfolio interactive filter
 */
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    
    if (filterButtons.length === 0 || portfolioCards.length === 0) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const selectedCategory = button.textContent.trim().toLowerCase();

            portfolioCards.forEach(card => {
                // Determine card category by reading a badge or text inside card
                const categoryBadge = card.querySelector('.portfolio-tag');
                if (!categoryBadge) return;

                const cardCategory = categoryBadge.textContent.trim().toLowerCase();

                // Check mapping match
                let isMatch = false;
                if (selectedCategory === 'semua proyek' || selectedCategory === 'all') {
                    isMatch = true;
                } else if (selectedCategory === 'landing page' && cardCategory === 'landing page') {
                    isMatch = true;
                } else if (selectedCategory === 'company profile' && cardCategory === 'company profile') {
                    isMatch = true;
                } else if (selectedCategory === 'custom web app' && (cardCategory === 'custom web app' || cardCategory === 'progressive web app')) {
                    isMatch = true;
                }

                if (isMatch) {
                    card.style.display = 'flex';
                    // Quick fade in effect
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.transition = 'opacity 0.4s ease, transform 0.3s ease';
                        card.style.opacity = '1';
                    }, 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/**
 * 4. WhatsApp consultation brief prefill and redirect
 */
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Retrieve values
        const nameInput = contactForm.querySelector('input[placeholder*="nama" i], #name');
        const contactInput = contactForm.querySelector('input[placeholder*="kontak" i], #contact');
        const packageSelect = contactForm.querySelector('select:nth-of-type(1), #package');
        const budgetSelect = contactForm.querySelector('select:nth-of-type(2), #budget');
        const briefTextarea = contactForm.querySelector('textarea, #brief');

        const name = nameInput ? nameInput.value.trim() : '';
        const contact = contactInput ? contactInput.value.trim() : '';
        const packageChosen = packageSelect ? packageSelect.value : 'Belum Memilih';
        const budget = budgetSelect ? budgetSelect.value : 'Belum Memilih';
        const brief = briefTextarea ? briefTextarea.value.trim() : '';

        // Simple Validation
        if (!name || !contact) {
            alert('Silakan isi Nama Lengkap dan Kontak Anda.');
            return;
        }

        // Target WhatsApp number (Kodemuda business number example: +62 812-3456-7890)
        const waNumber = '6281234567890'; 

        // Build WhatsApp prefilled message
        let waMessage = `Halo Kodemuda! Saya tertarik untuk konsultasi pembuatan website.\n\n`;
        waMessage += `*Detail Kontak:*\n`;
        waMessage += `- Nama: ${name}\n`;
        waMessage += `- Kontak/WA: ${contact}\n\n`;
        waMessage += `*Detail Proyek:*\n`;
        waMessage += `- Pilihan Paket: ${packageChosen}\n`;
        waMessage += `- Estimasi Budget: ${budget}\n\n`;
        
        if (brief) {
            waMessage += `*Brief Singkat:*\n${brief}\n`;
        }

        // Encode URI
        const encodedMessage = encodeURIComponent(waMessage);
        const waURL = `https://api.whatsapp.com/send?phone=${waNumber}&text=${encodedMessage}`;

        // Redirect user to WhatsApp
        window.open(waURL, '_blank');
    });

    // Handle normal button clicks pointing directly to WhatsApp (such as bottom buttons)
    const directWaBtns = document.querySelectorAll('a[href="#"], button.btn-whatsapp');
    directWaBtns.forEach(btn => {
        if (btn.tagName === 'A' && btn.textContent.trim().toLowerCase().includes('whatsapp')) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const waNumber = '6281234567890';
                const message = encodeURIComponent('Halo Kodemuda, saya ingin bertanya tentang layanan pembuatan website.');
                window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${message}`, '_blank');
            });
        }
    });
}
