function calculateSedekah() {
    let income = parseFloat(document.getElementById('income').value) || 0;
    let percentage = parseFloat(document.getElementById('percentage').value) || 0;
    let sedekah = (income * percentage) / 100;
    let resultElement = document.getElementById('result');
    resultElement.innerHTML = "Jumlah sedekah yang harus anda sisihkan: Rp " + sedekah.toFixed(2);
}

function clearInputsSedekah() {
    document.getElementById('percentage').value = ''
    document.getElementById('income').value = ''
    let inputIds = ['income', 'percentage'];
    inputIds.forEach(function (id) {
        document.getElementById(id).value = '';
    });
    document.getElementById('result').innerHTML = '';
}

function calculateTotalIncome() {
    let monthlyIncome = parseFloat(document.getElementById('monthly-income').value) || 0;
    let otherIncome = parseFloat(document.getElementById('other-income').value) || 0;
    let totalIncome = monthlyIncome + otherIncome;
    document.getElementById('total-monthly-income').value = totalIncome;
}

function calculateZakat() {
    let totalIncome = parseFloat(document.getElementById('total-monthly-income').value) || 0;
    let monthlyNisab = parseFloat(document.getElementById('monthly-nisab').value) || 0;
    let zakat = 0.025 * totalIncome;

    let resultElement = document.getElementById('zakat-result'); 
    if (totalIncome >= monthlyNisab) {
        resultElement.innerHTML = 'Anda wajib membayar zakat sebesar: Rp ' + zakat.toFixed(2);
    } else {
        resultElement.innerHTML = 'Tidak wajib membayar zakat karena belum mencapai nisab.';
    }
}

function clearInputsZakat() {
    
    let inputIds = ['monthly-income', 'other-income', 'total-monthly-income'];
    
    inputIds.forEach(function (id) {
        document.getElementById(id).value = '';
    });
    document.getElementById('result').innerHTML = '';
    document.getElementById('zakat-result').innerHTML = ''
    document.getElementById('result').innerHTML = ''
}