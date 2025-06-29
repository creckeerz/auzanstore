// admin-protect.js
const ADMIN_PASSWORD = "miku2707"; // ganti password sesuai keinginan
const isLoggedIn = localStorage.getItem("admin_login") === "true";

if (!isLoggedIn) {
  document.body.innerHTML = `
    <div style="display:flex;justify-content:center;align-items:center;height:100vh;font-family:sans-serif;text-align:center;background:#f0f2f5;">
      <div style="background:white;padding:30px;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.1);max-width:300px;width:100%;">
        <h2>🔐 Login Admin</h2>
        <input id="adminPass" type="password" placeholder="Masukkan password" style="width:100%;padding:10px;border-radius:8px;border:1px solid #ccc;margin-bottom:10px;" />
        <button onclick="loginAdmin()" style="padding:10px 20px;border:none;background:#4b6cb7;color:white;border-radius:8px;font-weight:bold;cursor:pointer;width:100%;">Login</button>
        <div id="loginError" style="color:red;margin-top:10px;"></div>
      </div>
    </div>
  `;
}

window.loginAdmin = function() {
  const pass = document.getElementById('adminPass').value;
  if (pass === ADMIN_PASSWORD) {
    localStorage.setItem('admin_login', 'true');
    location.reload();
  } else {
    document.getElementById('loginError').innerText = '❌ Password salah';
  }
};

window.logoutAdmin = function() {
  localStorage.removeItem('admin_login');
  location.reload();
};
