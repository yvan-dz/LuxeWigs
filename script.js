
// FAQ Toggle
const faqItems = document.querySelectorAll('.faq-item h3');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        parent.classList.toggle('active');
    });
});

const lightboxLinks = document.querySelectorAll('.lightbox');
const modal = document.createElement('div');
modal.classList.add('lightbox-modal');
document.body.appendChild(modal);

lightboxLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const imgSrc = this.getAttribute('href');
        modal.innerHTML = `<img src="${imgSrc}" alt="Lightbox Image">`;
        modal.classList.add('active');
    });
});

modal.addEventListener('click', function() {
    modal.classList.remove('active');
});
