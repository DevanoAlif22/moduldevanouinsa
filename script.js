document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // 1. Light/Dark Mode Theme Switcher
    // ==========================================================================
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const htmlElement = document.documentElement;

    // Check for saved theme preference, otherwise check system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (themeIcon) {
        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            htmlElement.setAttribute('data-theme', 'dark');
            themeIcon.textContent = 'light_mode';
        } else {
            htmlElement.setAttribute('data-theme', 'light');
            themeIcon.textContent = 'dark_mode';
        }
    }

    // Toggle theme callback
    if (themeToggle && themeIcon) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                htmlElement.setAttribute('data-theme', 'light');
                themeIcon.textContent = 'dark_mode';
                localStorage.setItem('theme', 'light');
            } else {
                htmlElement.setAttribute('data-theme', 'dark');
                themeIcon.textContent = 'light_mode';
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // ==========================================================================
    // 2. Mobile Sidebar Toggle Drawer
    // ==========================================================================
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    function openSidebar() {
        if (sidebar) sidebar.classList.add('open');
        if (sidebarOverlay) sidebarOverlay.classList.add('visible');
    }

    function closeSidebar() {
        if (sidebar) sidebar.classList.remove('open');
        if (sidebarOverlay) sidebarOverlay.classList.remove('visible');
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', openSidebar);
    }
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }

    // Close mobile sidebar when clicking sub-links
    const navLinks = document.querySelectorAll('.nav-sub-link, .nav-link, .footer-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                closeSidebar();
            }
        });
    });

    // Handle window resizing to close overlays
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            closeSidebar();
        }
    });

    // Handle caret click dropdown toggling
    const carets = document.querySelectorAll('.caret-icon');
    carets.forEach(caret => {
        caret.addEventListener('click', (e) => {
            e.preventDefault(); // Stop page navigation
            e.stopPropagation(); // Stop click event bubbling
            const navItem = caret.closest('.nav-item');
            if (navItem) {
                navItem.classList.toggle('collapsed');
            }
        });
    });

    // ==========================================================================
    // 3. Scroll Progress Indicator Bar
    // ==========================================================================
    const scrollProgressBar = document.getElementById('scrollProgress');

    if (scrollProgressBar) {
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

            let scrolled = 0;
            if (height > 0) {
                scrolled = (winScroll / height) * 100;
            }

            scrollProgressBar.style.width = scrolled + '%';
        });
    }

    // ==========================================================================
    // 4. Interactive Tabs Logic for Ecosystem Components
    // ==========================================================================
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTabId = button.getAttribute('data-tab');

            // 1. Deactivate current buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // 2. Activate selected button and pane
            button.classList.add('active');

            const targetPane = document.getElementById(targetTabId);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    // ==========================================================================
    // 5. Small Interactive Touch: Active Nav States on Click
    // ==========================================================================
    const allNavLinks = document.querySelectorAll('.nav-sub-link');
    allNavLinks.forEach(subLink => {
        subLink.addEventListener('click', (e) => {
            // Remove active class from other sub links
            allNavLinks.forEach(link => link.classList.remove('active'));
            subLink.classList.add('active');

            // Set active color to parent nav item
            document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
            subLink.closest('.nav-item').classList.add('active');
        });
    });

    // ==========================================================================
    // 6. Interactive Quiz Logic (Modul 4)
    // ==========================================================================
    const quizForm = document.getElementById('quizForm');
    const submitQuizBtn = document.getElementById('submitQuizBtn');
    const quizResultCard = document.getElementById('quizResultCard');
    const resultTitle = document.getElementById('resultTitle');
    const resultText = document.getElementById('resultText');
    const resultIcon = document.getElementById('resultIcon');

    if (quizForm && submitQuizBtn) {
        // Highlight option on change
        const options = quizForm.querySelectorAll('.quiz-option');
        options.forEach(option => {
            const radio = option.querySelector('input[type="radio"]');

            // Allow clicking anywhere on the option card to select
            option.addEventListener('click', (e) => {
                if (submitQuizBtn.textContent === 'Ulangi Kuis') return; // disabled if quiz is submitted

                // If the click is not directly on the radio, trigger radio change
                if (e.target !== radio) {
                    radio.checked = true;
                    // Trigger custom change event
                    radio.dispatchEvent(new Event('change'));
                }
            });

            radio.addEventListener('change', () => {
                // Remove selected class from other options in the same question group
                const questionName = radio.getAttribute('name');
                const siblings = quizForm.querySelectorAll(`input[name="${questionName}"]`);
                siblings.forEach(sib => {
                    sib.closest('.quiz-option').classList.remove('selected');
                });

                // Add selected class to this option
                if (radio.checked) {
                    option.classList.add('selected');
                }
            });
        });

        // Quiz Submit Button Click Event
        submitQuizBtn.addEventListener('click', () => {
            // Retake quiz behavior
            if (submitQuizBtn.textContent === 'Ulangi Kuis') {
                quizForm.reset();
                options.forEach(opt => {
                    opt.classList.remove('selected', 'correct', 'incorrect');
                    opt.querySelector('input[type="radio"]').disabled = false;
                });
                quizResultCard.style.display = 'none';
                submitQuizBtn.textContent = 'Kirim Jawaban';
                submitQuizBtn.classList.remove('btn-secondary');
                submitQuizBtn.classList.add('btn-primary');
                return;
            }

            // Verify if all questions are answered
            const q1 = quizForm.querySelector('input[name="q1"]:checked');
            const q2 = quizForm.querySelector('input[name="q2"]:checked');
            const q3 = quizForm.querySelector('input[name="q3"]:checked');

            if (!q1 || !q2 || !q3) {
                alert('Silakan jawab semua pertanyaan terlebih dahulu sebelum mengirim!');
                return;
            }

            // Scoring key
            const answers = { q1: 'c', q2: 'b', q3: 'a' };
            let score = 0;

            // Q1 verification
            const q1Val = q1.value;
            const q1Opt = q1.closest('.quiz-option');
            if (q1Val === answers.q1) {
                score++;
                q1Opt.classList.add('correct');
            } else {
                q1Opt.classList.add('incorrect');
                // Highlight the correct one
                quizForm.querySelector('input[name="q1"][value="' + answers.q1 + '"]').closest('.quiz-option').classList.add('correct');
            }

            // Q2 verification
            const q2Val = q2.value;
            const q2Opt = q2.closest('.quiz-option');
            if (q2Val === answers.q2) {
                score++;
                q2Opt.classList.add('correct');
            } else {
                q2Opt.classList.add('incorrect');
                quizForm.querySelector('input[name="q2"][value="' + answers.q2 + '"]').closest('.quiz-option').classList.add('correct');
            }

            // Q3 verification
            const q3Val = q3.value;
            const q3Opt = q3.closest('.quiz-option');
            if (q3Val === answers.q3) {
                score++;
                q3Opt.classList.add('correct');
            } else {
                q3Opt.classList.add('incorrect');
                quizForm.querySelector('input[name="q3"][value="' + answers.q3 + '"]').closest('.quiz-option').classList.add('correct');
            }

            // Calculate percentage
            const percentage = Math.round((score / 3) * 100);

            // Display results
            quizResultCard.style.display = 'block';
            quizResultCard.classList.remove('note-box', 'error-container');

            if (percentage === 100) {
                quizResultCard.style.borderLeftColor = '#10b981';
                quizResultCard.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
                resultIcon.textContent = 'emoji_events';
                resultIcon.style.color = '#10b981';
                resultTitle.textContent = 'Luar Biasa! Nilai Anda: 100%';
                resultText.textContent = 'Selamat! Semua jawaban Anda benar. Anda telah memahami materi ekosistem dengan sempurna!';
            } else if (percentage === 67 || percentage === 66) {
                quizResultCard.style.borderLeftColor = '#eab308';
                quizResultCard.style.backgroundColor = 'rgba(234, 179, 8, 0.1)';
                resultIcon.textContent = 'sentiment_satisfied';
                resultIcon.style.color = '#eab308';
                resultTitle.textContent = 'Bagus! Nilai Anda: 67%';
                resultText.textContent = 'Anda menjawab 2 dari 3 pertanyaan dengan benar. Tinjaulah kembali jawaban yang salah untuk meningkatkan pemahaman Anda.';
            } else {
                quizResultCard.style.borderLeftColor = '#ba1a1a';
                quizResultCard.style.backgroundColor = 'rgba(186, 26, 26, 0.1)';
                resultIcon.textContent = 'sentiment_dissatisfied';
                resultIcon.style.color = '#ba1a1a';
                resultTitle.textContent = 'Terima Kasih! Nilai Anda: ' + percentage + '%';
                resultText.textContent = 'Anda hanya menjawab ' + score + ' pertanyaan dengan benar. Silakan baca kembali materi biotik/abiotik dan aliran energi lalu ulangi kuis.';
            }

            // Disable all radio buttons after submit
            quizForm.querySelectorAll('input[type="radio"]').forEach(radio => {
                radio.disabled = true;
            });

            // Toggle submit button to reset button
            submitQuizBtn.textContent = 'Ulangi Kuis';
            submitQuizBtn.classList.remove('btn-primary');
            submitQuizBtn.classList.add('btn-secondary');

            // Scroll smoothly to results card
            quizResultCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    // ==========================================================================
    // 7. ScrollSpy for Sub-Modules
    // ==========================================================================
    // Query all sub-module sections present on the page
    const sections = Array.from(document.querySelectorAll('.sub-module-section'));

    // Find the currently active parent nav item first
    const activeNavItem = document.querySelector('.nav-item.active');
    const subLinks = activeNavItem ? Array.from(activeNavItem.querySelectorAll('.nav-sub-link')) : [];

    if (sections.length > 0 && subLinks.length > 0) {
        window.addEventListener('scroll', () => {
            let currentSectionId = sections[0].getAttribute('id');
            const scrollPosition = window.scrollY + 200; // offset for header + spacing

            sections.forEach(section => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    if (scrollPosition >= sectionTop) {
                        currentSectionId = section.getAttribute('id');
                    }
                }
            });

            // Update sub-link active states
            subLinks.forEach(link => {
                if (link) {
                    const href = link.getAttribute('href');
                    if (href.endsWith('#' + currentSectionId)) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                }
            });
        });
    }

    // ==========================================================================
    // 8. Clipboard Copy Feature
    // ==========================================================================
    const copyButtons = document.querySelectorAll('.btn-copy');
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                const textToCopy = targetEl.textContent;
                navigator.clipboard.writeText(textToCopy).then(() => {
                    // Visual feedback
                    const label = button.querySelector('span:not(.material-symbols-outlined)');
                    const icon = button.querySelector('.material-symbols-outlined');
                    
                    const oldLabel = label.textContent;
                    const oldIcon = icon.textContent;
                    
                    label.textContent = 'Tersalin!';
                    icon.textContent = 'check';
                    button.style.backgroundColor = 'var(--primary-container)';
                    button.style.color = 'var(--on-primary-container)';
                    
                    setTimeout(() => {
                        label.textContent = oldLabel;
                        icon.textContent = oldIcon;
                        button.style.backgroundColor = '';
                        button.style.color = '';
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy: ', err);
                });
            }
        });
    });

    // ==========================================================================
    // 8. Image Lightbox Modal
    // ==========================================================================
    const contentImages = document.querySelectorAll('.hero-image-card img, .bento-image-card img, .card-body img, .content img, .grid-left img, img.hero-img');

    if (contentImages.length > 0) {
        // Create lightbox modal elements
        const modal = document.createElement('div');
        modal.className = 'lightbox-modal';
        
        const wrapper = document.createElement('div');
        wrapper.className = 'lightbox-wrapper';

        const modalImg = document.createElement('img');
        modalImg.className = 'lightbox-img';
        modalImg.alt = 'Enlarged view';

        const closeBtn = document.createElement('button');
        closeBtn.className = 'lightbox-close';
        closeBtn.setAttribute('aria-label', 'Close Image');
        closeBtn.innerHTML = '<span class="material-symbols-outlined">close</span>';

        wrapper.appendChild(modalImg);
        wrapper.appendChild(closeBtn);
        modal.appendChild(wrapper);
        document.body.appendChild(modal);

        // Open modal
        function showModal(src) {
            modalImg.src = src;
            modal.style.display = 'flex';
            // Trigger animation frame
            requestAnimationFrame(() => {
                modal.classList.add('show');
            });
            document.body.style.overflow = 'hidden';
        }

        // Close modal
        function hideModal() {
            modal.classList.remove('show');
            // Wait for transition before hiding display
            setTimeout(() => {
                if (!modal.classList.contains('show')) {
                    modal.style.display = 'none';
                    modalImg.src = '';
                    document.body.style.overflow = '';
                }
            }, 300);
        }

        // Add event listeners to all zoomable images
        contentImages.forEach(img => {
            img.addEventListener('click', (e) => {
                e.stopPropagation();
                showModal(img.src);
            });
        });

        // Close modal clicks
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target === closeBtn || closeBtn.contains(e.target)) {
                hideModal();
            }
        });

        // ESC key close support
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('show')) {
                hideModal();
            }
        });
    }
});
