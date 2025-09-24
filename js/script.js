// ===== HOMEFINDER REAL ESTATE APPLICATION =====
// Consolidated JavaScript for HomeFinder Real Estate Platform

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeThemeToggle();
    initializeNavigation();
    initializeScrollEffects();
    initializePropertyFilter();
    initializeContactForm();
    initializeFAQ();
    initializeSkillsAnimation();
    initializeAOS();
    initializeSmoothScrolling();
    initializePropertySearchForm();
    initializePropertyInteractions();
    initializeCharacterCounter();
});

// ===== THEME TOGGLE FUNCTIONALITY =====
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.querySelector('.theme-icon');
    
    // Check for saved theme preference or default to 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeIcon) themeIcon.textContent = '☀️';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        if (themeIcon) themeIcon.textContent = '🌙';
    }
    
    // Toggle theme function
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Add rotation animation
        if (themeToggle) {
            themeToggle.classList.add('rotating');
            setTimeout(() => {
                themeToggle.classList.remove('rotating');
            }, 300);
        }
        
        // Update theme
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update icon
        if (themeIcon) {
            themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        }
        
        // Optional: Dispatch custom event for other components
        window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: newTheme } }));
    }
    
    // Add click event listener
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Add keyboard support
    if (themeToggle) {
        themeToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleTheme();
            }
        });
    }
}

// ===== NAVIGATION FUNCTIONALITY =====
function initializeNavigation() {
    // Handle both .nav-toggle and #hamburger selectors
    const navToggle = document.querySelector('.nav-toggle') || document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu') || document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a, .nav-link');

    // Toggle mobile menu
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Update active nav link based on scroll position
    window.addEventListener('scroll', throttle(updateActiveNavLink, 100));
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id], main');
    const navLinks = document.querySelectorAll('.nav-link, .nav-menu a');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (sectionId && link.getAttribute('href').includes(sectionId)) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===== SCROLL EFFECTS =====
function initializeScrollEffects() {
    const header = document.querySelector('.header, header');
    
    // Header background on scroll
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        });
    }

    // Parallax effect for hero section
    const hero = document.querySelector('.hero, .hero-section');
    if (hero) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }
}

// ===== PROPERTY SEARCH FORM =====
function initializePropertySearchForm() {
    const searchForm = document.querySelector('.property-search-form, .advanced-search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(searchForm);
            const searchData = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = searchForm.querySelector('button[type="submit"], .search-btn');
            if (submitBtn) {
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Searching...';
                submitBtn.disabled = true;
                
                // Simulate search (replace with actual search logic)
                setTimeout(() => {
                    alert(`Searching for properties with criteria: ${JSON.stringify(searchData, null, 2)}`);
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 1000);
            }
        });
    }
}

// ===== PROPERTY INTERACTIONS =====
function initializePropertyInteractions() {
    // Property filtering and sorting
    const sortSelect = document.querySelector('#sort-properties');
    const viewToggle = document.querySelectorAll('.view-btn');
    const propertiesContainer = document.querySelector('.properties-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const propertyCards = document.querySelectorAll('.project-card, .property-card');

    // Sorting functionality
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            console.log('Sorting properties by:', this.value);
            // Implement sorting logic here
        });
    }

    // View toggle functionality
    viewToggle.forEach(btn => {
        btn.addEventListener('click', function() {
            viewToggle.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            if (propertiesContainer) {
                if (this.textContent.includes('List')) {
                    propertiesContainer.classList.add('list-view');
                    propertiesContainer.classList.remove('grid-view');
                } else {
                    propertiesContainer.classList.add('grid-view');
                    propertiesContainer.classList.remove('list-view');
                }
            }
        });
    });

    // Property filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter properties/projects
            propertyCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Property card interactions
    propertyCards.forEach(card => {
        const favoriteBtn = card.querySelector('.favorite-btn');
        const shareBtn = card.querySelector('.share-btn');
        const contactBtn = card.querySelector('.contact-btn');
        const detailsBtn = card.querySelector('.details-btn');
        
        if (favoriteBtn) {
            favoriteBtn.addEventListener('click', function(e) {
                e.preventDefault();
                this.classList.toggle('active');
                this.style.color = this.classList.contains('active') ? '#e74c3c' : '';
            });
        }
        
        if (shareBtn) {
            shareBtn.addEventListener('click', function(e) {
                e.preventDefault();
                // Modern share API if available
                if (navigator.share) {
                    navigator.share({
                        title: 'Check out this property!',
                        url: window.location.href
                    });
                } else {
                    // Fallback: copy to clipboard
                    navigator.clipboard.writeText(window.location.href).then(() => {
                        alert('Property link copied to clipboard!');
                    });
                }
            });
        }
        
        if (contactBtn) {
            contactBtn.addEventListener('click', function(e) {
                e.preventDefault();
                // Scroll to contact form or show contact modal
                const contactSection = document.querySelector('.contact-section, #contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                    window.location.href = '/pages/contact.html';
                }
            });
        }
        
        if (detailsBtn) {
            detailsBtn.addEventListener('click', function(e) {
                e.preventDefault();
                alert('Property details page would be shown here!');
            });
        }
    });
}

// ===== PROPERTY FILTER (renamed from portfolio filter) =====
function initializePropertyFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const propertyCards = document.querySelectorAll('.project-card, .property-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter properties
            propertyCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ===== CONTACT FORM =====
function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form, #contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            // Validate form
            if (validateContactForm(formObject)) {
                // Show loading state
                const submitBtn = contactForm.querySelector('button[type="submit"], .submit-btn');
                
                if (submitBtn) {
                    const originalText = submitBtn.textContent;
                    submitBtn.textContent = 'Sending...';
                    submitBtn.disabled = true;

                    // Simulate form submission
                    setTimeout(() => {
                        // Show success message
                        if (formSuccess) {
                            contactForm.style.display = 'none';
                            formSuccess.style.display = 'block';
                            
                            // Reset after 5 seconds
                            setTimeout(() => {
                                contactForm.reset();
                                contactForm.style.display = 'block';
                                formSuccess.style.display = 'none';
                                submitBtn.textContent = originalText;
                                submitBtn.disabled = false;
                                clearFormErrors();
                            }, 5000);
                        } else {
                            alert('Thank you for your message! We will get back to you soon.');
                            contactForm.reset();
                            submitBtn.textContent = originalText;
                            submitBtn.disabled = false;
                            clearFormErrors();
                        }
                    }, 2000);
                }
            }
        });

        // Real-time validation
        const formInputs = contactForm.querySelectorAll('input, select, textarea');
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });

            input.addEventListener('input', function() {
                clearFieldError(this);
            });
        });
    }
}

function validateContactForm(formData) {
    let isValid = true;
    const errors = {};

    // Name validation
    if (!formData.name || formData.name.trim().length < 2) {
        errors.name = 'Please enter your full name (at least 2 characters)';
        isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
        isValid = false;
    }

    // Phone validation (optional)
    if (formData.phone && formData.phone.length > 0) {
        const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
        if (!phoneRegex.test(formData.phone)) {
            errors.phone = 'Please enter a valid phone number';
            isValid = false;
        }
    }

    // Subject validation (if exists)
    if (formData.subject === '') {
        errors.subject = 'Please select a subject';
        isValid = false;
    }

    // Message validation
    if (!formData.message || formData.message.trim().length < 10) {
        errors.message = 'Please enter a message (at least 10 characters)';
        isValid = false;
    }

    // Display errors
    displayFormErrors(errors);

    return isValid;
}

function validateField(field) {
    const fieldName = field.name;
    const fieldValue = field.value;
    let error = '';

    switch (fieldName) {
        case 'name':
            if (!fieldValue || fieldValue.trim().length < 2) {
                error = 'Please enter your full name (at least 2 characters)';
            }
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!fieldValue || !emailRegex.test(fieldValue)) {
                error = 'Please enter a valid email address';
            }
            break;
        case 'phone':
            if (fieldValue && fieldValue.length > 0) {
                const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
                if (!phoneRegex.test(fieldValue)) {
                    error = 'Please enter a valid phone number';
                }
            }
            break;
        case 'subject':
            if (!fieldValue) {
                error = 'Please select a subject';
            }
            break;
        case 'message':
            if (!fieldValue || fieldValue.trim().length < 10) {
                error = 'Please enter a message (at least 10 characters)';
            }
            break;
    }

    const errorElement = document.getElementById(fieldName + 'Error');
    if (errorElement) {
        errorElement.textContent = error;
        field.style.borderColor = error ? '#ef4444' : '';
    }

    return !error;
}

function displayFormErrors(errors) {
    // Clear previous errors
    clearFormErrors();

    // Display new errors
    Object.keys(errors).forEach(fieldName => {
        const errorElement = document.getElementById(fieldName + 'Error');
        const fieldElement = document.querySelector(`[name="${fieldName}"]`);
        
        if (errorElement) {
            errorElement.textContent = errors[fieldName];
        }
        
        if (fieldElement) {
            fieldElement.style.borderColor = '#ef4444';
        }
    });
}

function clearFormErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    const formFields = document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea');

    errorElements.forEach(element => {
        element.textContent = '';
    });

    formFields.forEach(field => {
        field.style.borderColor = '';
    });
}

function clearFieldError(field) {
    const errorElement = document.getElementById(field.name + 'Error');
    if (errorElement) {
        errorElement.textContent = '';
        field.style.borderColor = '';
    }
}

// ===== FAQ FUNCTIONALITY =====
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');

                // Close all FAQ items
                faqItems.forEach(faqItem => {
                    faqItem.classList.remove('active');
                });

                // Open clicked item if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
}

// ===== SKILLS ANIMATION =====
function initializeSkillsAnimation() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    // Intersection Observer for skills animation
    if (skillBars.length > 0) {
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const width = progressBar.getAttribute('data-width');
                    
                    setTimeout(() => {
                        progressBar.style.width = width;
                    }, 200);
                    
                    skillsObserver.unobserve(progressBar);
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => {
            skillsObserver.observe(bar);
        });
    }
}

// ===== AOS (ANIMATE ON SCROLL) =====
function initializeAOS() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = element.getAttribute('data-aos-delay') || 0;
                
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.animation = `${element.getAttribute('data-aos')} 0.6s ease forwards`;
                }, delay);
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // Observe all elements with data-aos attribute
    const aosElements = document.querySelectorAll('[data-aos]');
    aosElements.forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });
}

// ===== SMOOTH SCROLLING =====
function initializeSmoothScrolling() {
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header, header')?.offsetHeight || 80;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== CHARACTER COUNTER =====
function initializeCharacterCounter() {
    const messageField = document.querySelector('#message, textarea[name="message"]');
    if (messageField) {
        const counter = document.createElement('div');
        counter.className = 'character-counter';
        counter.style.fontSize = '0.875rem';
        counter.style.color = 'var(--text-light)';
        counter.style.textAlign = 'right';
        counter.style.marginTop = 'var(--spacing-xs)';
        
        messageField.parentNode.appendChild(counter);
        
        messageField.addEventListener('input', function() {
            const length = this.value.length;
            const maxLength = 1000;
            counter.textContent = `${length}/${maxLength} characters`;
            
            if (length > maxLength * 0.9) {
                counter.style.color = 'var(--warning-color, #f39c12)';
            } else {
                counter.style.color = 'var(--text-light, #6b7280)';
            }
        });
        
        // Initialize counter
        messageField.dispatchEvent(new Event('input'));
    }
}

// ===== UTILITY FUNCTIONS =====

// Debounce function for performance optimization
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

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== ACCESSIBILITY ENHANCEMENTS =====

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu, #nav-menu');
        const navToggle = document.querySelector('.nav-toggle, #hamburger');
        
        if (navMenu && navMenu.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Close active FAQ
        const activeFAQ = document.querySelector('.faq-item.active');
        if (activeFAQ) {
            activeFAQ.classList.remove('active');
        }
    }

    // Enter key for FAQ items
    if (e.key === 'Enter' && e.target.classList.contains('faq-question')) {
        e.target.click();
    }
});

// Focus management for mobile menu
function manageFocus() {
    const navMenu = document.querySelector('.nav-menu, #nav-menu');
    const navToggle = document.querySelector('.nav-toggle, #hamburger');
    
    if (navMenu && navToggle) {
        navToggle.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                // Focus first nav link when menu opens
                const firstNavLink = navMenu.querySelector('a');
                if (firstNavLink) {
                    setTimeout(() => firstNavLink.focus(), 100);
                }
            }
        });
    }
}

// Initialize focus management
manageFocus();

// ===== NEWSLETTER SIGNUP =====
function initializeNewsletter() {
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (email && validateEmail(email)) {
                alert('Thank you for subscribing to our newsletter!');
                this.reset();
            } else {
                alert('Please enter a valid email address.');
            }
        });
    });
}

// Email validation helper
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Initialize newsletter on load
document.addEventListener('DOMContentLoaded', initializeNewsletter);

// ===== PERFORMANCE MONITORING =====
function logPerformanceMetrics() {
    if ('performance' in window) {
        window.addEventListener('load', function() {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                if (perfData) {
                    console.log('Page Load Time:', Math.round(perfData.loadEventEnd - perfData.fetchStart), 'ms');
                    console.log('DOM Content Loaded:', Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart), 'ms');
                }
            }, 100);
        });
    }
}

// Initialize performance monitoring in development
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    logPerformanceMetrics();
}