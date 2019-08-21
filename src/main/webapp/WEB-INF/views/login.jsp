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
    
      <!-- / brand -->
    </div>
  </div>
  <div id="content-body">
    <div class="py-5 text-center w-100">
      <div class="mx-auto w-xxl w-auto-xs">
        <div class="px-3">
          <form name="form">
            <div class="form-group">
              <input type="email" class="form-control" placeholder="Email" required>
            </div>
            <div class="form-group">
              <input type="password" class="form-control" placeholder="password" required>
            </div>      
            <button type="submit" class="btn primary">Sign in</button>
          </form>
          <div class="my-4">
            <a href="forgot-password.html" class="text-primary _600">Forgot password?</a>
          </div>
          <div>
            Do not have an account? 
            <a href="signup.html" class="text-primary _600">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- build:js scripts/app.min.js -->
 <%@ include file="include/script.jsp" %>
</body>
</html>
