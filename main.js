// main.js - JavaScript for CSO Academy Book Store

document.addEventListener('DOMContentLoaded', function() {
    // روابط المنتجات (يمكن تحديثها حسب الحاجة)
    const productLinks = {
        'social-engineering': 'https://khattab1.gumroad.com/l/muqiqg',
        'ethical-hacking-handbook': 'https://khattab1.gumroad.com/l/owzvxn',
        'ethical-hacking-challenges': 'https://khattab1.gumroad.com/l/tqvfle',
        'computer-networks': 'https://khattab1.gumroad.com/l/dgthz',
        'security-terminology': 'https://khattab1.gumroad.com/l/qdsbri',
        'kali-linux-handbook': 'https://khattab1.gumroad.com/l/cpkhp'
    };

    // معالجة أحداث الأزرار الرئيسية
    document.getElementById('scrollToBooksBtn').addEventListener('click', function() {
        document.getElementById('books').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });

    document.getElementById('Browse').addEventListener('click', function() {
        document.getElementById('books').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });

    document.getElementById('ViewSample').addEventListener('click', function() {
        document.getElementById('books').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });

    document.getElementById('Browsebooks').addEventListener('click', function() {
        document.getElementById('books').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });

    // معالجة أحداث أزرار "Buy Now" لكل منتج
    document.querySelectorAll('.btn-buy-book').forEach((button, index) => {
        button.addEventListener('click', function() {
            // تحديد المنتج بناءً على الفهرس
            let productKey;
            switch(index) {
                case 0:
                    productKey = 'social-engineering';
                    break;
                case 1:
                    productKey = 'ethical-hacking-handbook';
                    break;
                case 2:
                    productKey = 'ethical-hacking-challenges';
                    break;
                case 3:
                    productKey = 'computer-networks';
                    break;
                case 4:
                    productKey = 'security-terminology';
                    break;
                case 5:
                    productKey = 'kali-linux-handbook';
                    break;
                default:
                    productKey = 'default';
            }
            
            // الانتقال إلى صفحة المنتج
            if(productLinks[productKey]) {
                window.open(productLinks[productKey], '_blank');
            } else {
                alert('رابط الشراء غير متوفر حالياً لهذا المنتج');
            }
        });
    });

    // إضافة تأثيرات للتنقل السلس
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    });

    // إضافة تأثيرات للبطاقات عند التمرير (بدون التأثير على hover)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('card-visible');
            }
        });
    }, observerOptions);

    // تطبيق تأثيرات الظهور على البطاقات
    const cards = document.querySelectorAll('.category-card, .book-card, .testimonial-card');
    cards.forEach(card => {
        card.classList.add('card-hidden');
        observer.observe(card);
    });

    // تحديث السنة في الفوتر تلقائياً
    const currentYear = new Date().getFullYear();
    const copyrightText = document.querySelector('.footer p');
    if (copyrightText) {
        copyrightText.textContent = `© ${currentYear} CSO Academy - Cybersecurity Learning Platform. All rights reserved.`;
    }
});