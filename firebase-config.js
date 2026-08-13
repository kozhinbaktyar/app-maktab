// ===== دامەزراندنی هاوبەشی Firebase (هەموو پەڕەکان ئەمە import دەکەن) =====
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAsDs_tQemRJwwjH0m8U2YvlqZjWXHEO0k",
  authDomain: "test-school-53999.firebaseapp.com",
  databaseURL: "https://test-school-53999-default-rtdb.firebaseio.com",
  projectId: "test-school-53999",
  storageBucket: "test-school-53999.firebasestorage.app",
  messagingSenderId: "847312056047",
  appId: "1:847312056047:web:44f84a1bb21e49d0b7751a"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
