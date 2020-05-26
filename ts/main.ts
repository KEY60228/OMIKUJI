'use strict';

{
  const btn: HTMLElement = document.getElementById('js-btn');

  btn.addEventListener('click', () => {
    const n: number = Math.random();
    if (n < 0.05) {
      btn.textContent = '大吉';
    } else if (n < 0.2) {
      btn. textContent = '中吉';
    } else {
      btn.textContent = '吉'
    }
  });
}