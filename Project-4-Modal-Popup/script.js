// 1. جلب العناصر من الـ DOM (من قسم Modal Structure Code)
const modal = document.getElementById('modal');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');

// 2. دوال الإظهار والإخفاء (من قسم Show/Hide Modal)
function showModal() {
    modal.style.display = 'block';
    overlay.style.display = 'block';
    
    // تأخير بسيط جداً لتفعيل كلاس الـ show والأنيميشن (Opacity) بنجاح
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function hideModal() {
    modal.classList.remove('show');
    
    // ننتظر حتى ينتهي تأثير الأنيميشن (0.3 ثانية) ثم نخفي العناصر تماماً من الصفحة
    setTimeout(() => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }, 300);
}

// 3. ربط الأحداث بالأزرار لفتح وإغلاق النافذة (من قسم Close Button & Modal Structure)
openBtn.addEventListener('click', showModal);
closeBtn.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal); // إغلاق النافذة عند الضغط على الخلفية المعتمة