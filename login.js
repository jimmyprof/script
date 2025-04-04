document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const enteredUsername = document.getElementById('loginUsername').value;
  const enteredPassword = document.getElementById('loginPassword').value;

  // Get stored credentials from localStorage
  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
    alert('Login successful!');
    window.location.href = 'voting.html'; // Redirect after successful login
  } else {
    alert('Invalid username or password.');
  }
});
