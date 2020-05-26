'use strict';
{
    var btn_1 = document.getElementById('js-btn');
    btn_1.addEventListener('click', function () {
        var n = Math.random();
        if (n < 0.05) {
            btn_1.textContent = '大吉';
        }
        else if (n < 0.2) {
            btn_1.textContent = '中吉';
        }
        else {
            btn_1.textContent = '吉';
        }
    });
}
