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