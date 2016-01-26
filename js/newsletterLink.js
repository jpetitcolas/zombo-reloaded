const newsletterLink = document.getElementById('newsletter-link');

const displayNewsletterLink = () => {
    setTimeout(() => {
        newsletterLink.style.display = 'block';
        hideNewsletterLink();
    }, 2000);
};

const hideNewsletterLink = () => {
    setTimeout(() => {
        newsletterLink.style.display = 'none';
        displayNewsletterLink();
    }, 500);
};

hideNewsletterLink();
