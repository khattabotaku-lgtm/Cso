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

    // رابط تحميل Roadmap (سيضاف لاحقاً)
    const roadmapDownloadLink = 'downloads/Cybersecurity Learning Roadmap.pdf';

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
                    // Roadmap - تحميل مباشر
                    startRoadmapDownload();
                    return; // لا تتابع إلى Gumroad
                case 1:
                    productKey = 'social-engineering';
                    break;
                case 2:
                    productKey = 'ethical-hacking-handbook';
                    break;
                case 3:
                    productKey = 'ethical-hacking-challenges';
                    break;
                case 4:
                    productKey = 'computer-networks';
                    break;
                case 5:
                    productKey = 'security-terminology';
                    break;
                case 6:
                    productKey = 'kali-linux-handbook';
                    break;
                default:
                    productKey = 'default';
            }
            
            // الانتقال إلى صفحة المنتج في Gumroad
            if(productLinks[productKey]) {
                window.open(productLinks[productKey], '_blank');
            } else {
                alert('Purchase link is not available for this product');
            }
        });
    });

    // دالة لبدء تحميل Roadmap
    function startRoadmapDownload() {
        // إنشاء عنصر رابط للتحميل
        const downloadLink = document.createElement('a');
        downloadLink.href = roadmapDownloadLink;
        downloadLink.download = 'Cybersecurity-Career-Roadmap.pdf';
        downloadLink.target = '_blank';
        
        // إضافة الرابط إلى الصفحة ونقر عليه
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        
        // عرض رسالة تأكيد
        showDownloadMessage();
    }

    // دالة لعرض رسالة التحميل
    function showDownloadMessage() {
        // إنشاء عنصر للرسالة
        const messageDiv = document.createElement('div');
        messageDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #0A192F, #1a2a5e);
            color: white;
            padding: 30px 40px;
            border-radius: 15px;
            box-shadow: 0 10px 40px rgba(0, 255, 136, 0.3);
            border: 2px solid #00FF88;
            z-index: 9999;
            text-align: center;
            max-width: 400px;
            animation: fadeIn 0.3s ease;
        `;
        
        messageDiv.innerHTML = `
            <h3 style="color: #00FF88; margin-bottom: 15px; font-size: 22px;">📥 Download Started!</h3>
            <p style="margin-bottom: 20px; line-height: 1.6;">Your Cybersecurity Career Roadmap is downloading...</p>
            <p style="font-size: 14px; color: #b0d4ff;">If download doesn't start automatically, <a href="${roadmapDownloadLink}" download style="color: #00FF88; text-decoration: underline;">click here</a></p>
            <button id="closeMessageBtn" style="
                background: #00FF88;
                color: #0A192F;
                border: none;
                padding: 10px 25px;
                border-radius: 8px;
                cursor: pointer;
                font-weight: bold;
                margin-top: 15px;
                transition: all 0.3s;
            ">OK</button>
        `;
        
        document.body.appendChild(messageDiv);
        
        // إضافة أنماط CSS للرسوم المتحركة
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translate(-50%, -40%); }
                to { opacity: 1; transform: translate(-50%, -50%); }
            }
        `;
        document.head.appendChild(style);
        
        // إغلاق الرسالة عند النقر على الزر
        document.getElementById('closeMessageBtn').addEventListener('click', function() {
            document.body.removeChild(messageDiv);
            document.head.removeChild(style);
        });
        
        // إغلاق الرسالة تلقائياً بعد 5 ثواني
        setTimeout(() => {
            if(document.body.contains(messageDiv)) {
                document.body.removeChild(messageDiv);
                document.head.removeChild(style);
            }
        }, 5000);
    }

    // معالجة حدث العرض الخاص
    document.getElementById('bundleOffer').addEventListener('click', function() {
        alert('Complete Bundle for $4 will be available soon!');
        // يمكنك إضافة رابط الشراء هنا لاحقاً
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