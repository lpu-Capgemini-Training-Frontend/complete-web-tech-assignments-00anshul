
import {
  validateUsername,
  validateEmail,
  validatePassword,
  validateConfirmPassword
} from './Validate';
 
// all input elements from the DOM
const usernameInput        = document.getElementById('username');
const emailInput           = document.getElementById('email');
const passwordInput        = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const form                 = document.getElementById('signupForm');
 
//Live validation 
usernameInput.addEventListener('input', () => validateUsername(usernameInput));
 
emailInput.addEventListener('input', () => validateEmail(emailInput));
 
passwordInput.addEventListener('input', () => {
  validatePassword(passwordInput);
  // Re-check confirm password 
  if (confirmPasswordInput.value !== '') {
    validateConfirmPassword(confirmPasswordInput, passwordInput);
  }
});
 
confirmPasswordInput.addEventListener('input', () =>
  validateConfirmPassword(confirmPasswordInput, passwordInput)
);
 
// Form submit validate all fields 
form.addEventListener('submit', (e) => {
  e.preventDefault();
 
  const isUsernameOk        = validateUsername(usernameInput);
  const isEmailOk           = validateEmail(emailInput);
  const isPasswordOk        = validatePassword(passwordInput);
  const isConfirmPasswordOk = validateConfirmPassword(confirmPasswordInput, passwordInput);
 
  if (isUsernameOk && isEmailOk && isPasswordOk && isConfirmPasswordOk) {
    alert('Account created successfully!');
    form.reset();
    // Remove all validation classes after reset
    [usernameInput, emailInput, passwordInput, confirmPasswordInput]
      .forEach(input => input.classList.remove('valid', 'invalid'));
  }
});