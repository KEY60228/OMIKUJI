'use strict';
{
    var btn_1 = document.getElementById('js-btn');
    btn_1.addEventListener('click', function () {
        var results = ['大吉', '中吉', '吉', '小吉', '末吉', '凶'];
        var n = Math.floor(Math.random() * results.length);
        btn_1.textContent = results[n];
    });
}
