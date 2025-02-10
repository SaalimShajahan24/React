// script.js

// Workout logging function
function logWorkout(workoutType) {
    alert(`You started a ${workoutType} workout!`);
}

// Form validation and login
function loginUser(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Simple login validation (replace with backend API for real implementation)
    if (username && password) {
        alert('Login successful');
    } else {
        alert('Please enter valid credentials');
    }
}

// Form validation and registration
function registerUser(event) {
    event.preventDefault();
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;
    if (username && password) {
        alert('Registration successful');
    } else {
        alert('Please fill all fields');
    }
}
