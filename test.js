// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  let targetElement = document.querySelector('body');
  let messageElement = document.createElement('div');
  messageElement.textContent = 'Hello, Rohit!';
  targetElement.appendChild(messageElement);
});
