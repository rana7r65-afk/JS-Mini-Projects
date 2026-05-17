// 1. مصفوفة البيانات (من قسم Dynamic Generation Code)
const data = [
    ['1', 'John Doe', 'Developer', 'Active'],
    ['2', 'Jane Smith', 'Designer', 'Pending'],
    ['3', 'Bob Johnson', 'Manager', 'Active'],
    ['4', 'Alice Brown', 'QA Engineer', 'Inactive']
];

function generateTable() {
    const container = document.getElementById('table-container');
    container.innerHTML = ''; // تفريغ الحاوية قبل التوليد لتجنب التكرار

    // 2. إنشاء هيكل الجدول (من قسم Create Table Structure)
    const table = document.createElement('table');
    table.classList.add('data-table');

    // إنشاء صف العناوين الأساسية (Header Row)
    const headerRow = document.createElement('tr');
    const headers = ['ID', 'Name', 'Role', 'Status'];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // 3. دالة إضافة الصفوف والخلايا (من قسم Add Rows & Cells)
    function addRow(rowData) {
        const row = document.createElement('tr');
        rowData.forEach(text => {
            const cell = document.createElement('td');
            cell.textContent = text;
            
            // إضافة لمسة جمالية: إذا كانت الخلية تحتوي على حالة، نعطيها كلاس اللون المناسب لها
            if (['Active', 'Pending', 'Inactive'].includes(text)) {
                cell.classList.add(text);
            }

            row.appendChild(cell);
        });
        table.appendChild(row);
    }

    // 4. المرور على البيانات لتوليد الصفوف (من قسم Dynamic Generation Code)
    data.forEach(rowData => addRow(rowData));

    // 5. تنسيق الجدول عبر جافاسكريبت مباشرة (من قسم Style with CSS)
    table.style.borderCollapse = 'collapse';
    table.style.width = '100%';
    
    // تطبيق التنسيق على الخلايا والعناوين بعد إضافتها للجدول
    const allCells = table.querySelectorAll('th, td');
    allCells.forEach(cell => {
        cell.style.padding = '12px';
        cell.style.border = '1px solid #334155'; // لون الحدود المتناسق مع الخلفية الداكنة
    });

    // إضافة الجدول النهائي إلى الحاوية في الصفحة
    container.appendChild(table);
}

// ربط الزر بالدالة ليتم توليد الجدول عند الضغط عليه
document.getElementById('generate-table-btn').addEventListener('click', generateTable);