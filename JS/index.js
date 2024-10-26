// hotel form validation
//////////////

function validateForm() {
  const emailInput = document.querySelector("#R-email");
  const phoneInput = document.querySelector("#phone-No");
  const zipcodeInput = document.querySelector("#zipcode");

  const email = emailInput.value.trim();
  const phone = phoneInput.value.trim();
  const zipcode = zipcodeInput.value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\d{10,15}$/;
  const zipcodePattern = /^\d{4,10}$/;

  const errorElements = document.querySelectorAll(".error-message");

  // يزيل اي رسالة خطأ متواجدة
  errorElements.forEach((element) => element.remove());

  let isValid = true;

  // يتحقق من نمط البريد
  if (!emailPattern.test(email)) {
    displayError(emailInput, "البريد الإلكتروني غير صحيح");
    isValid = false;
  }

  // يتحقق من صحة رقم الهاتف
  if (!phonePattern.test(phone)) {
    displayError(phoneInput, "رقم الهاتف غير صحيح");
    isValid = false;
  }

  // يتحقق من صحة الرمز البريدي
  if (!zipcodePattern.test(zipcode)) {
    displayError(zipcodeInput, "الرمز البريدي غير صحيح");
    isValid = false;
  }

  return isValid;
}
// عند نواجد خطأ يقوم بانشاء رسالة خطأ
function displayError(inputElement, message) {
  const errorMsg = document.createElement("div");
  errorMsg.classList.add("error-message", "error");
  errorMsg.textContent = message;
  inputElement.parentNode.insertBefore(errorMsg, inputElement.nextSibling);
}

document.addEventListener("DOMContentLoaded", () => {
  const confirmButton = document.getElementById("confirm-btn-f");
  confirmButton.addEventListener("click", (event) => {
    event.preventDefault(); //يمنع ال المتصفح من عمل refresh للصفحة عند الضغط على تاكيد
    if (validateForm()) {
      //عند التحقق من جميع الشروط والضغط على تأكيد يحولنا الى الصفحة الرئيسية
      window.location.href = "hotel-done.html";
    }
  });
});

///////////////////////

////////////////////

function validateForm() {
  const usernameInput = document.querySelector(".username");
  const emailInput = document.querySelector(".login-email");
  const passwordInput = document.querySelector(".login-password");

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errorElements = document.querySelectorAll(".error-message");

  // يزيل اي رسالة خطأ متواجدة
  errorElements.forEach((element) => element.remove());

  let isValid = true;

  // يتحقق من اسم المستخدم
  if (username === "") {
    displayError(usernameInput, "اسم المستخدم مطلوب");
    isValid = false;
  }

  // يتحقق من نمط البريد
  if (!emailPattern.test(email)) {
    displayError(emailInput, "البريد الإلكتروني غير صحيح");
    isValid = false;
  }

  // يتحقق من طول كلمة السر
  if (password.length < 6) {
    displayError(passwordInput, "كلمة السر يجب أن تكون 6 أحرف على الأقل");
    isValid = false;
  }

  return isValid;
}
// عند نواجد خطأ يظهر ينشا رسالة خطأ
function displayError(inputElement, message) {
  const errorMsg = document.createElement("div");
  errorMsg.classList.add("error-message", "error");
  errorMsg.textContent = message;
  inputElement.parentNode.insertBefore(errorMsg, inputElement.nextSibling);
}
//حدث عند توافق جميع الشروط
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateForm()) {
      window.location.href = "login.html";
    } //عند التحقق من جميع الشروط والضغط على تسجيل يحولنا الى صفحة تسجيل الدخول
  });
});
//////////////////////////

