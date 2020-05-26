'use strict';
{
    var btn_1 = document.getElementById('js-btn');
    btn_1.addEventListener('click', function () {
        var n = Math.floor(Math.random() * 5);
        switch (n) {
            case 0:
                btn_1.textContent = '大吉';
                break;
            case 1:
                btn_1.textContent = '中吉';
                break;
            case 2:
                btn_1.textContent = '吉';
                break;
            case 3:
                btn_1.textContent = '小吉';
                break;
            case 4:
                btn_1.textContent = '末吉';
                break;
            case 5:
                btn_1.textContent = '凶';
                break;
        }
    });
}
