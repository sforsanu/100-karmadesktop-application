// renderer.js

const { ipcRenderer } = require('electron');

function signUp(email, password) {
  // Send sign-up data to the main process
  ipcRenderer.send('sign-up', { email, password });
}

// Example usage in your application
// Replace 'actualUsername' and 'actualPassword' with the real user input
signUp('actualUsername', 'actualPassword');
