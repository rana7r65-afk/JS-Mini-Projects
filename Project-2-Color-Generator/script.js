// 1. دالة توليد ألوان عشوائية بصيغة RGB (من قسم Generate Random Colors)
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// 2. دالة إنشاء مربعات الألوان (من قسم Create Color Boxes)
function createColorBox(color) {
    const box = document.createElement('div');
    box.classList.add('color-box'); // إضافة كلاس للتنسيق
    box.style.background = color;
    box.textContent = color; // عرض كود اللون داخل المربع
    return box;
}

// 3. دالة النسخ إلى الحافظة عند الضغط على اللون (من قسم Copy to Clipboard)
function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    alert("Color copied!");
}

// 4. الدالة الأساسية لتوليد اللوحة (مجمعة من قسم Generate Palette Code)
function generatePalette() {
    const palette = document.getElementById('palette');
    
    // تفريغ اللوحة القديمة قبل توليد ألوان جديدة
    palette.innerHTML = '';

    // حلقة تكرارية لتوليد 5 ألوان وعرضها
    for (let i = 0; i < 5; i++) {
        const color = getRandomColor();
        const box = createColorBox(color);
        
        // إضافة حدث عند الضغط على المربع لنسخ اللون
        box.addEventListener('click', () => copyToClipboard(color));
        
        // إضافة المربع داخل حاوية اللوحة
        palette.appendChild(box);
    }
}

// ربط زر التوليد بالدالة لتشتغل عند الضغط عليه
document.getElementById('generate-btn').addEventListener('click', generatePalette);

// تشغيل الدالة تلقائياً عند فتح الصفحة لأول مرة ليظهر شكل التصميم مباشرة
generatePalette();