document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('scrollToBooksBtn');

    if (button) {
        button.addEventListener('click', function() {
            window.location.hash = 'books';
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('Browsebooks');

    if (button) {
        button.addEventListener('click', function() {
            window.location.hash = 'books';
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('Browse');

    if (button) {
        button.addEventListener('click', function() {
            window.location.hash = 'books';
        });
    }
});
function openLinkInNewWindow(className, url) {
const buttons = document.querySelectorAll(`.${className}`);

buttons.forEach(button => {
    button.addEventListener('click', () => {
    window.open(url, '_blank'); 
    });
});
}
openLinkInNewWindow('btn-buy-book', 'https://www.gumraod.com');

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('ViewSample');

    if (button) {
        button.addEventListener('click', function() {
            window.location.hash = 'testimonials';
        });
    }
});