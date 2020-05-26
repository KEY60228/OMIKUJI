'use strict';

{
  const btn: HTMLElement = document.getElementById('js-btn');

  btn.addEventListener('click', () => {
    const results: string[] = ['大吉', '中吉', '吉', '小吉', '末吉', '凶']
    const n: number = Math.floor(Math.random() * results.length);
    btn.textContent = results[n];
  });
}