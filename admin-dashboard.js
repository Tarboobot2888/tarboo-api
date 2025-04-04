auth.onAuthStateChanged(user => {
  if (user && user.email === 'mahmoudmahmed078@gmail.com') {
    document.getElementById('admin-name').textContent = user.displayName || 'مطور';
  } else {
    window.location.href = 'index.html'; // إعادة التوجيه إذا لم يكن المستخدم هو المطور
  }
});

function logout() {
  auth.signOut().then(() => {
    window.location.href = 'index.html';
  });
}