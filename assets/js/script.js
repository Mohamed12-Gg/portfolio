// ── Year ──
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

// ── Reveal on scroll ──
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ── Smooth scroll ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const id = a.getAttribute('href');
        if(id.length > 1){ const el = document.querySelector(id); if(el){ e.preventDefault(); el.scrollIntoView({ behavior:'smooth' }); } }
    });
});

// ── Hamburger menu ──
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
if(hamburger && mobileNav){
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileNav.classList.toggle('open');
        document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            mobileNav.classList.remove('open');
            document.body.style.overflow = '';
        });
    });
}

// ── Project Filtering ──
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filterValue = btn.getAttribute('data-filter');

            // Update active state on buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter project cards
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    card.classList.remove('hide');
                    card.classList.add('fade-in');
                    setTimeout(() => card.classList.remove('fade-in'), 350);
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });
}

// ── WhatsApp Contact Form Handler ──
const whatsappForm = document.getElementById('whatsappForm');
if (whatsappForm) {
    whatsappForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('waName').value.trim();
        const contact = document.getElementById('waContact').value.trim();
        const subject = document.getElementById('waSubject').value.trim();
        const message = document.getElementById('waMessage').value.trim();

        if (!name || !message) return;

        let text = `👋 *New Contact Message from Portfolio*\n\n`;
        text += `👤 *Name:* ${name}\n`;
        if (contact) text += `📱 *Email / Phone:* ${contact}\n`;
        if (subject) text += `📌 *Subject:* ${subject}\n`;
        text += `\n💬 *Message:*\n${message}`;

        const phoneNumber = '201559500460';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, '_blank');
    });
}