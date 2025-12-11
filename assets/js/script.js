// ========================================
        // Variables
        // ========================================
        const navLinks = document.querySelectorAll('.nav-link');
        const contactForm = document.getElementById('contactForm');
        const themeToggle = document.getElementById('themeToggle');

        // ========================================
        // Navigation Active State
        // ========================================
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });

        // ========================================
        // Project Filtering
        // ========================================
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter value
                const filterValue = this.getAttribute('data-filter');
                
                // Filter projects
                document.querySelectorAll('.project-item').forEach(project => {
                    const category = project.getAttribute('data-category');
                    
                    if (filterValue === 'all' || category.includes(filterValue)) {
                        project.style.display = 'block';
                        setTimeout(() => {
                            project.style.opacity = '1';
                        }, 10);
                    } else {
                        project.style.opacity = '0';
                        setTimeout(() => {
                            project.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });

        // ========================================
        // Contact Form Validation
        // ========================================
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            
            // Get form fields
            const nameField = document.getElementById('name');
            const emailField = document.getElementById('email');
            const subjectField = document.getElementById('subject');
            const messageField = document.getElementById('message');
            
            // Reset errors
            nameField.classList.remove('error');
            emailField.classList.remove('error');
            subjectField.classList.remove('error');
            messageField.classList.remove('error');
            document.querySelectorAll('.error-message').forEach(error => {
                error.style.display = 'none';
            });
            
            // Validate Name
            if (nameField.value.trim() === '') {
                nameField.classList.add('error');
                document.getElementById('nameError').style.display = 'block';
                isValid = false;
            }
            
            // Validate Email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailField.value.trim() === '' || !emailRegex.test(emailField.value)) {
                emailField.classList.add('error');
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            }
            
            // Validate Subject
            if (subjectField.value.trim() === '') {
                subjectField.classList.add('error');
                document.getElementById('subjectError').style.display = 'block';
                isValid = false;
            }
            
            // Validate Message
            if (messageField.value.trim() === '') {
                messageField.classList.add('error');
                document.getElementById('messageError').style.display = 'block';
                isValid = false;
            }
            
            // If valid, show success message
            if (isValid) {
                document.getElementById('successMessage').style.display = 'block';
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    document.getElementById('successMessage').style.display = 'none';
                }, 5000);
            }
        });

        // ========================================
        // Dark Mode Toggle
        // ========================================
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            const icon = document.querySelector('.theme-toggle i');
            
            if (document.body.classList.contains('dark-mode')) {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
        });

        // ========================================
        // Scroll Animations for Progress Bars
        // ========================================
        window.addEventListener('scroll', () => {
            document.querySelectorAll('.progress-bar').forEach(bar => {
                const rect = bar.getBoundingClientRect();
                
                if (rect.top < window.innerHeight) {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                }
            });
        });

        // ========================================
        // Smooth Scroll for Navigation
        // ========================================
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                if (href !== '#' && href !== '') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });