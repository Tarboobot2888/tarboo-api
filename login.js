function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      const user = userCredential.user;
      if (user.email === 'mahmoudmahmed078@gmail.com') {
        window.location.href = 'admin-dashboard.html'; // توجهه إلى لوحة تحكم المطور
      } else {
        window.location.href = 'user-dashboard.html'; // توجهه إلى لوحة تحكم المستخدم
      }
    })
    .catch(error => {
      alert('فشل تسجيل الدخول: ' + error.message);
    });
}