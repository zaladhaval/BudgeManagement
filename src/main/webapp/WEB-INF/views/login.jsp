<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Signin</title>
  <%@ include file="include/style.jsp" %>
</head>
<body>
  <div class="d-flex flex-column flex">
    <div class="navbar light bg pos-rlt box-shadow">
      <div class="mx-auto">
        <!-- brand -->
        <a href="../index.html" class="navbar-brand">
          <svg viewBox="0 0 24 24" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M19.51 3.08L3.08 19.51c.09.34.27.65.51.9.25.24.56.42.9.51L20.93 4.49c-.19-.69-.73-1.23-1.42-1.41zM11.88 3L3 11.88v2.83L14.71 3h-2.83zM5 3c-1.1 0-2 .9-2 2v2l4-4H5zm14 18c.55 0 1.05-.22 1.41-.59.37-.36.59-.86.59-1.41v-2l-4 4h2zm-9.71 0h2.83L21 12.12V9.29L9.29 21z"
              fill="#fff" class="fill-theme" />
          </svg>
          <img src="resources/assets/images/logo.png" alt="." class="hide">
          <span class="hidden-folded d-inline">Budge Management</span>
        </a>
        <!-- / brand -->
      </div>
    </div>
    <div id="content-body">
      <div class="padding">
        <div class="row">
          <div class="col-sm-4" style="position: fixed;  left: 50%; transform: translateX(-50%);">
            <form data-plugin="parsley" data-option="{}">
              <div class="box">
                <div class="box-header">
                  <h2 style="text-align: center;">Login</h2>
                </div>
                <div class="box-body">
                  <p class="text-muted">Please fill the information to continue</p>
                    <span>${error}</span>
                  <div class="form-group">
                    <input type="email" class="form-control" placeholder="Email" required>
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control" placeholder="password" required>
                  </div>

                  <div class="text-right">
                    <button type="submit" class="btn primary">Submit</button>
                  </div>
                  <div class="my-4">
                    <a href="forgot-password.html" class="text-primary _600">Forgot password?</a>
                  </div>
                  <div>
                    Do not have an account?
                    <a href="/signup" class="text-primary _600">Sign up</a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- build:js scripts/app.min.js -->
  <%@ include file="include/script.jsp" %>
</body>
</html>