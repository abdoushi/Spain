// hotel form validation 
//////////////

function validateForm() {

    const emailInput = document.querySelector('#R-email');
    const phoneInput = document.querySelector('#phone-No');
    const zipcodeInput = document.querySelector('#zipcode');


    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const zipcode = zipcodeInput.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10,15}$/;
    const zipcodePattern = /^\d{4,10}$/;

    const errorElements = document.querySelectorAll('.error-message');

    // يزيل اي رسالة خطأ متواجدة
    errorElements.forEach(element => element.remove());

    let isValid = true;

    // يتحقق من نمط البريد
    if (!emailPattern.test(email)) {
        displayError(emailInput, 'البريد الإلكتروني غير صحيح');
        isValid = false;
    }

    // يتحقق من صحة رقم الهاتف
    if (!phonePattern.test(phone)) {
        displayError(phoneInput, 'رقم الهاتف غير صحيح');
        isValid = false;
    }

    // يتحقق من صحة الرمز البريدي
    if (!zipcodePattern.test(zipcode)) {
        displayError(zipcodeInput, 'الرمز البريدي غير صحيح');
        isValid = false;
    }

    return isValid;
}
// عند نواجد خطأ يقوم بانشاء رسالة خطأ
function displayError(inputElement, message) {
    const errorMsg = document.createElement('div');
    errorMsg.classList.add('error-message', 'error');
    errorMsg.textContent = message;
    inputElement.parentNode.insertBefore(errorMsg, inputElement.nextSibling);
}

document.addEventListener('DOMContentLoaded', () => {
    const confirmButton = document.getElementById('confirm-btn-f');
    confirmButton.addEventListener('click', (event) => {
        event.preventDefault(); //يمنع ال المتصفح من عمل refresh للصفحة عند الضغط على تاكيد
        if (validateForm()) {
            //عند التحقق من جميع الشروط والضغط على تأكيد يحولنا الى الصفحة الرئيسية
            window.location.href = "hotel-done.html";
        }
    });
});

