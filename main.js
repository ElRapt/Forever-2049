import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))



// Set a timeout to keep the fake loader for a specific amount of time
setTimeout(function() {
  const loader = document.querySelector('.loader-container');
  // Begin the fade-out
  loader.style.transition = 'opacity 1s ease';
  loader.style.opacity = '0';

  // Wait for the transition to end before clearing the HTML content of the loader from the DOM
  setTimeout(function() {
    // Clears the inner HTML, effectively "deleting" the loader content
    loader.innerHTML = '';
    // Optionally hide the container after clearing content
    loader.style.display = 'none';
  }, 1000); // This matches the duration of the fade-out transition
}, 50); // Display the fake loading screen for 5 seconds, adjust as needed

