function register() {
  const name = document.getElementById('reg-name').value;
  const email = document.getElementById('reg-email').value;
  const password = document.getElementById('reg-password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      // يمكن إضافة المزيد من منطق التعامل مع التسجيل مثل حفظ الاسم في قاعدة البيانات.
      alert('تم التسجيل بنجاح');
      window.location.href = 'user-dashboard.html'; // بعد التسجيل، يتم توجيه المستخدم إلى لوحة التحكم الخاصة به
    })
    .catch(error => {
      alert('فشل التسجيل: ' + error.message);
    });
}