// Canvas API Example
const canvas = document.getElementById('courseCanvas');
const ctx = canvas.getContext('2d');

// Draw shapes on canvas
ctx.fillStyle = '#4CAF50';
ctx.fillRect(20, 20, 100, 50);
ctx.fillStyle = '#FFA500';
ctx.arc(200, 75, 50, 0, 2 * Math.PI);
ctx.fill();

// Web Storage API: Save Progress
document.getElementById('save-progress').addEventListener('click', () => {
  localStorage.setItem('progress', '50%');
  alert('Progress saved: 50%');
});

// Geolocation API Example
navigator.geolocation.getCurrentPosition((position) => {
  console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
});

// Drag-and-Drop API
const courses = document.querySelectorAll('.course-card');
courses.forEach((course) => {
  course.addEventListener('dragstart', () => {
    course.style.opacity = '0.5';
  });
  course.addEventListener('dragend', () => {
    course.style.opacity = '1';
  });
});

// Custom Elements with Template and Slot
const template = document.getElementById('feature-template');
const featureContainer = document.getElementById('custom-features');

['Interactive Courses', 'Gamified Quizzes', 'Responsive Design'].forEach((feature) => {
  const clone = template.content.cloneNode(true);
  clone.querySelector('.feature-card').innerHTML = `<p>${feature}</p>`;
  featureContainer.appendChild(clone);
});

// Quiz Example
document.getElementById('quizForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const selectedAnswer = document.querySelector('input[name="question1"]:checked');
  if (selectedAnswer) {
    alert(`You selected: ${selectedAnswer.value}`);
  } else {
    alert('Please select an answer!');
  }
});
