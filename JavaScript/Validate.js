//  mark field valid 
export function markValid(input, errorId) {
  input.classList.remove('invalid');
  input.classList.add('valid');
  document.getElementById(errorId).classList.remove('show');
}
 
// mark field invalid 
export function markInvalid(input, errorId) {
  input.classList.remove('valid');
  input.classList.add('invalid');
  document.getElementById(errorId).classList.add('show');
}
 
// Validate username
export function validateUsername(input) {
  const val = input.value.trim();
  if (val.length >= 3 && val.length <= 25) {
    markValid(input, 'usernameError');
    return true;
  } else {
    markInvalid(input, 'usernameError');
    return false;
  }
}
 
//  Validate email
export function validateEmail(input) {
  const val = input.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(val)) {
    markValid(input, 'emailError');
    return true;
  } else {
    markInvalid(input, 'emailError');
    return false;
  }
}
 
//  Validate password
export function validatePassword(input) {
  const val = input.value;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
  if (passwordRegex.test(val)) {
    markValid(input, 'passwordError');
    return true;
  } else {
    markInvalid(input, 'passwordError');
    return false;
  }
}
 
// Validate confirm password
export function validateConfirmPassword(input, passwordInput) {
  const val = input.value;
  const passwordVal = passwordInput.value;
  if (val !== '' && val === passwordVal) {
    markValid(input, 'confirmPasswordError');
    return true;
  } else {
    markInvalid(input, 'confirmPasswordError');
    return false;
  }
}