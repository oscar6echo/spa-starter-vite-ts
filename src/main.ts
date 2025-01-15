import { setupCounter } from './counter.ts';
import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';

const elt_app = document.querySelector<HTMLDivElement>('#app');

if (elt_app) {
  elt_app.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;
  const elt_counter = document.querySelector<HTMLButtonElement>('#counter');
  if (elt_counter) {
    setupCounter(elt_counter);
  }
}
