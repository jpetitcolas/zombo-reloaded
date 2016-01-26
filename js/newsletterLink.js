var newsletterLink = document.getElementById('newsletter-link');

var displayNewsletterLink = function () {
    setTimeout(function () {
        newsletterLink.style.display = 'block';
        hideNewsletterLink();
    }, 2000);
};

var hideNewsletterLink = function () {
    setTimeout(function () {
        newsletterLink.style.display = 'none';
        displayNewsletterLink();
    }, 500);
};

hideNewsletterLink();
