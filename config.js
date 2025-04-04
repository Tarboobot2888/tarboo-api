// إعدادات Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA7NSz8dErUkKEkNnKQ_oqtJur26qOP9ls",
  authDomain: "tarboo-api.firebaseapp.com",
  databaseURL: "https://tarboo-api-default-rtdb.firebaseio.com",
  projectId: "tarboo-api",
  storageBucket: "tarboo-api.firebasestorage.app",
  messagingSenderId: "391314736451",
  appId: "1:391314736451:web:108a7254f60b26d6e59bf6",
  measurementId: "G-EF3J3KTV84"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();