// الحصول على اسم المستخدم عند تسجيل الدخول
auth.onAuthStateChanged(user => {
  if (user) {
    document.getElementById('user-name').textContent = user.displayName || 'مستخدم';
    // إضافة خدمات API هنا حسب الحاجة
  } else {
    window.location.href = 'index.html'; // إعادة التوجيه إلى صفحة تسجيل الدخول إذا لم يكن المستخدم قد سجل الدخول
  }
});

function logout() {
  auth.signOut().then(() => {
    window.location.href = 'index.html';
  });
}