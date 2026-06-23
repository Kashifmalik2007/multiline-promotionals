<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Login | Multiline Promotional</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { background:#2e3092; font-family:'Montserrat',sans-serif; min-height:100vh; display:flex; align-items:center; justify-content:center; }
    .login-box { background:#252878; border-radius:12px; padding:48px 40px; width:100%; max-width:420px; box-shadow:0 20px 60px rgba(0,0,0,0.5); }
    .login-logo { text-align:center; margin-bottom:32px; }
    .login-logo .brand { color:#f5811e; font-size:1.1rem; font-weight:800; letter-spacing:2px; }
    .login-logo .sub { color:#a0a3c4; font-size:0.7rem; letter-spacing:1px; }
    h2 { color:#fff; font-size:1.5rem; font-weight:700; margin-bottom:8px; text-align:center; }
    p.sub { color:#a0a3c4; font-size:0.85rem; text-align:center; margin-bottom:28px; }
    .form-group { margin-bottom:18px; }
    label { color:#a0a3c4; font-size:0.8rem; font-weight:600; display:block; margin-bottom:6px; letter-spacing:0.5px; }
    input { width:100%; padding:12px 16px; background:#2e3092; border:1px solid #3d41a8; border-radius:8px; color:#fff; font-size:0.9rem; outline:none; transition:border-color 0.2s; }
    input:focus { border-color:#f5811e; }
    .input-icon { position:relative; }
    .input-icon i { position:absolute; left:14px; top:50%; transform:translateY(-50%); color:#a0a3c4; }
    .input-icon input { padding-left:40px; }
    .btn-login { width:100%; padding:13px; background:#f5811e; color:#000; border:none; border-radius:8px; font-size:1rem; font-weight:700; cursor:pointer; transition:background 0.2s; margin-top:8px; }
    .btn-login:hover { background:#e0700f; }
    .flash-error { background:#ff4444; color:#fff; padding:10px 14px; border-radius:8px; margin-bottom:16px; font-size:0.85rem; }
    .flash-success { background:#00c851; color:#fff; padding:10px 14px; border-radius:8px; margin-bottom:16px; font-size:0.85rem; }
    .back-link { display:block; text-align:center; margin-top:20px; color:#a0a3c4; font-size:0.85rem; text-decoration:none; }
    .back-link:hover { color:#f5811e; }
    .default-creds { background:#2e3092; border:1px solid #3d41a8; border-radius:8px; padding:12px; margin-bottom:16px; font-size:0.78rem; color:#a0a3c4; text-align:center; }
    .default-creds strong { color:#f5811e; }
  </style>
</head>
<body>
  <div class="login-box">
    <div class="login-logo">
      <div class="brand">MULTILINE PROMOTIONAL</div>
      <div class="sub">ADMIN PANEL</div>
    </div>
    <h2>Admin Login</h2>
    <p class="sub">Sign in to manage your products</p>

    <% if (typeof error !== 'undefined' && error.length > 0) { %>
    <div class="flash-error"><i class="fas fa-exclamation-circle"></i> <%= error[0] %></div>
    <% } %>
    <% if (typeof success !== 'undefined' && success.length > 0) { %>
    <div class="flash-success"><i class="fas fa-check-circle"></i> <%= success[0] %></div>
    <% } %>

    <div class="default-creds">
      Default: <strong>admin</strong> / <strong>password</strong> — Change after first login
    </div>

    <form action="/admin/login" method="POST">
      <div class="form-group">
        <label>USERNAME</label>
        <div class="input-icon">
          <i class="fas fa-user"></i>
          <input type="text" name="username" placeholder="Enter username" required autocomplete="username">
        </div>
      </div>
      <div class="form-group">
        <label>PASSWORD</label>
        <div class="input-icon">
          <i class="fas fa-lock"></i>
          <input type="password" name="password" placeholder="Enter password" required autocomplete="current-password">
        </div>
      </div>
      <button type="submit" class="btn-login"><i class="fas fa-sign-in-alt"></i> Sign In</button>
    </form>
    <a href="/" class="back-link"><i class="fas fa-arrow-left"></i> Back to Website</a>
  </div>
</body>
</html>
