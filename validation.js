let form = document.querySelector(".form-regist");
let nameInput = document.getElementById("name");
let genderInputs = document.getElementsByName("gender");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  

  let isNameValid = validateName();
  let isGenderValid = validateGender();
  let isEmailValid = validateEmail();
  let isPasswordValid = validatePassword();

  
  if (isNameValid && isGenderValid && isEmailValid && isPasswordValid) {
    window.location.href = "./login.html";
  }
  });

function validateName() {
  let name = nameInput.value.trim();
  if (name.length < 4) {
    setError("Nama minimal harus memiliki 4 huruf");
    return false;
  }
  clearError();
  return true;
}

function validateGender() {
  for (let i = 0; i < genderInputs.length; i++) {
    if (genderInputs[i].checked) {
      clearError();
      return true;
    }
  }
  setError("Gender harus dipilih");
  return false;
}

function validateEmail() {
  let email = emailInput.value.trim();
  if (email === "") {
    setError("Email harus diisi");
    return false;
  }
  if (!email.includes("@")) {
    setError("Email tidak valid");
    return false;
  }
  clearError();
  return true;
}

function validatePassword() {
  let password = passwordInput.value.trim();
  if (password.length < 7 || password.length > 15) {
    setError("Password harus memiliki 7-15 karakter");
    return false;
  }
  if (!/^[a-zA-Z0-9]+$/.test(password)) {
    setError("Password harus terdiri dari huruf dan angka");
    return false;
  }
  clearError();
  return true;
}

function setError(message) {
  alert(message);
}

function clearError() {
}
