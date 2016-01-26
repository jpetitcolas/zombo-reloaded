const circles = document.getElementsByTagName('article')[0];
const newsletterLink = document.getElementById('newsletter-link');

const displayNewsletterLink = () => {
    setTimeout(() => {
        circles.style.display = 'none';
        newsletterLink.style.display = 'block';
        hideNewsletterLink();
    }, 2000);
};

const hideNewsletterLink = () => {
    setTimeout(() => {
        circles.style.display = 'block';
        newsletterLink.style.display = 'none';
        displayNewsletterLink();
    }, 500);
};

hideNewsletterLink();
