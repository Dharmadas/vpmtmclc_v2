const defaultConfig = {
    college_name_english: "National Law College",
    college_name_hindi: "राष्ट्रीय विधि महाविद्यालय",
    college_motto: "प्रबोधनो ज्ञानमयः प्रबोधः",
    hero_title: "Excellence in Legal Education",
    hero_subtitle: "Nurturing Legal Minds for Tomorrow",
    hero_cta_button: "Explore Programs",
    about_title: "About Our College",
    about_description: "We are committed to providing world-class legal education that combines rigorous academic training with practical experience. Our institution has been at the forefront of legal education, producing distinguished lawyers, judges, and legal scholars who have made significant contributions to the field of law.",
    feature_1_title: "Academic Excellence",
    feature_2_title: "Expert Faculty",
    feature_3_title: "Moot Court",
    feature_4_title: "Legal Aid Clinic",
    contact_title: "Get In Touch",
    footer_copyright: "© 2024 National Law College. All rights reserved.",
    background_color: "#2a5298",
    surface_color: "#ffffff",
    text_color: "#2c3e50",
    primary_action_color: "#1e3c72",
    secondary_action_color: "#6c757d",
    font_family: "Segoe UI",
    font_size: 16
};

async function onConfigChange(config) {
    const safeConfig = { ...defaultConfig, ...config };

    // Update text content
    document.getElementById('collegeNameEn').textContent = safeConfig.college_name_english;
    document.getElementById('collegeNameHi').textContent = safeConfig.college_name_hindi;
    document.getElementById('collegeMotto').textContent = safeConfig.college_motto;
    document.getElementById('heroTitle').textContent = safeConfig.hero_title;
    document.getElementById('heroSubtitle').textContent = safeConfig.hero_subtitle;
    document.getElementById('heroCta').textContent = safeConfig.hero_cta_button;
    document.getElementById('aboutTitle').textContent = safeConfig.about_title;
    document.getElementById('aboutDescription').textContent = safeConfig.about_description;
    document.getElementById('feature1Title').textContent = safeConfig.feature_1_title;
    document.getElementById('feature2Title').textContent = safeConfig.feature_2_title;
    document.getElementById('feature3Title').textContent = safeConfig.feature_3_title;
    document.getElementById('feature4Title').textContent = safeConfig.feature_4_title;
    document.getElementById('contactTitle').textContent = safeConfig.contact_title;
    document.getElementById('footerCopyright').textContent = safeConfig.footer_copyright;

    // Apply colors
    const topBar = document.querySelector('.top-bar');
    const hero = document.querySelector('.hero');
    const testimonials = document.querySelector('.testimonials');
    const nav = document.querySelector('nav');
    const ctaButton = document.querySelector('.cta-button');
    const submitButton = document.querySelector('.submit-button');
    const infoLabel = document.querySelector('.info-label');
    
    if (topBar) {
        topBar.style.background = `linear-gradient(135deg, ${safeConfig.primary_action_color} 0%, ${safeConfig.background_color} 100%)`;
    }
    if (hero) {
        hero.style.background = `linear-gradient(135deg, ${safeConfig.primary_action_color} 0%, ${safeConfig.background_color} 50%, ${safeConfig.primary_action_color} 100%)`;
    }
    if (testimonials) {
        testimonials.style.background = `linear-gradient(135deg, ${safeConfig.primary_action_color} 0%, ${safeConfig.background_color} 100%)`;
    }
    if (nav) {
        nav.style.background = safeConfig.surface_color;
    }
    if (ctaButton) {
        ctaButton.style.background = safeConfig.surface_color;
        ctaButton.style.color = safeConfig.primary_action_color;
    }
    if (submitButton) {
        submitButton.style.background = `linear-gradient(135deg, ${safeConfig.primary_action_color} 0%, ${safeConfig.background_color} 100%)`;
    }
    if (infoLabel) {
        infoLabel.style.background = safeConfig.primary_action_color;
    }

    // Update all text elements color
    const textElements = document.querySelectorAll('p, h1, h2, h3, label, .nav-link, .mega-menu a, .info-item');
    textElements.forEach(el => {
        if (!el.closest('.hero') && !el.closest('.testimonials') && !el.closest('footer') && !el.closest('.top-bar')) {
            el.style.color = safeConfig.text_color;
        }
    });

    // Apply font
    const customFont = safeConfig.font_family;
    const baseFontStack = 'Arial, sans-serif';
    document.body.style.fontFamily = `${customFont}, ${baseFontStack}`;

    // Apply font size scaling
    const baseSize = safeConfig.font_size;
    document.querySelector('.college-name-en').style.fontSize = `${baseSize * 1.5}px`;
    document.querySelector('.college-name-hi').style.fontSize = `${baseSize * 1.1}px`;
    document.querySelector('.college-motto').style.fontSize = `${baseSize * 0.95}px`;
    document.querySelector('.hero h1').style.fontSize = `${baseSize * 3}px`;
    document.querySelector('.hero p').style.fontSize = `${baseSize * 1.3}px`;
    document.querySelectorAll('.section-title').forEach(el => el.style.fontSize = `${baseSize * 2.5}px`);
    document.querySelectorAll('.about-content h2').forEach(el => el.style.fontSize = `${baseSize * 2.5}px`);
    document.querySelectorAll('.about-content p').forEach(el => el.style.fontSize = `${baseSize * 1.1}px`);
    document.querySelectorAll('.feature-card h3').forEach(el => el.style.fontSize = `${baseSize * 1.4}px`);
    document.querySelectorAll('.feature-card p').forEach(el => el.style.fontSize = `${baseSize}px`);
}

// Mobile menu toggle
document.getElementById('mobileToggle').addEventListener('click', function() {
    document.getElementById('navMenu').classList.toggle('active');
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            document.getElementById('navMenu').classList.remove('active');
        }
    });
});

// Form submission
/*
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };
    
    // Create success message
    const successDiv = document.createElement('div');
    successDiv.style.cssText = 'background: #28a745; color: white; padding: 15px; border-radius: 8px; margin-top: 20px; text-align: center; animation: fadeInUp 0.5s ease;';
    successDiv.textContent = 'Thank you for your message! We will get back to you soon.';
    
    const form = this;
    form.appendChild(successDiv);
    form.reset();
    
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
});
*/

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .gallery-item, .testimonial-card, .about-content').forEach(el => {
    observer.observe(el);
});

// Initialize Element SDK
if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig: defaultConfig,
        onConfigChange: onConfigChange,
        mapToCapabilities: (config) => ({
            recolorables: [
                {
                    get: () => config.background_color || defaultConfig.background_color,
                    set: (value) => {
                        config.background_color = value;
                        window.elementSdk.setConfig({ background_color: value });
                    }
                },
                {
                    get: () => config.surface_color || defaultConfig.surface_color,
                    set: (value) => {
                        config.surface_color = value;
                        window.elementSdk.setConfig({ surface_color: value });
                    }
                },
                {
                    get: () => config.text_color || defaultConfig.text_color,
                    set: (value) => {
                        config.text_color = value;
                        window.elementSdk.setConfig({ text_color: value });
                    }
                },
                {
                    get: () => config.primary_action_color || defaultConfig.primary_action_color,
                    set: (value) => {
                        config.primary_action_color = value;
                        window.elementSdk.setConfig({ primary_action_color: value });
                    }
                },
                {
                    get: () => config.secondary_action_color || defaultConfig.secondary_action_color,
                    set: (value) => {
                        config.secondary_action_color = value;
                        window.elementSdk.setConfig({ secondary_action_color: value });
                    }
                }
            ],
            borderables: [],
            fontEditable: {
                get: () => config.font_family || defaultConfig.font_family,
                set: (value) => {
                    config.font_family = value;
                    window.elementSdk.setConfig({ font_family: value });
                }
            },
            fontSizeable: {
                get: () => config.font_size || defaultConfig.font_size,
                set: (value) => {
                    config.font_size = value;
                    window.elementSdk.setConfig({ font_size: value });
                }
            }
        }),
        mapToEditPanelValues: (config) => new Map([
            ["college_name_english", config.college_name_english || defaultConfig.college_name_english],
            ["college_name_hindi", config.college_name_hindi || defaultConfig.college_name_hindi],
            ["college_motto", config.college_motto || defaultConfig.college_motto],
            ["hero_title", config.hero_title || defaultConfig.hero_title],
            ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
            ["hero_cta_button", config.hero_cta_button || defaultConfig.hero_cta_button],
            ["about_title", config.about_title || defaultConfig.about_title],
            ["about_description", config.about_description || defaultConfig.about_description],
            ["feature_1_title", config.feature_1_title || defaultConfig.feature_1_title],
            ["feature_2_title", config.feature_2_title || defaultConfig.feature_2_title],
            ["feature_3_title", config.feature_3_title || defaultConfig.feature_3_title],
            ["feature_4_title", config.feature_4_title || defaultConfig.feature_4_title],
            ["contact_title", config.contact_title || defaultConfig.contact_title],
            ["footer_copyright", config.footer_copyright || defaultConfig.footer_copyright]
        ])
    });
}

// (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9a12617064524055',t:'MTc2MzU4MzMzNy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
