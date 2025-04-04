document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('signupUsername').value;
  const password = document.getElementById('signupPassword').value;

  if (username && password) {
    // Save to localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Signup successful! You can now login.');
    window.location.href = 'login.html'; // Redirect to login page
  } else {
    alert('Please fill out all fields.');
  }
});