(function() {
    const h = 868.6;
    const m = 200;
    const o = (m / h) * 100;
    setTimeout(() => {
        document.getElementById('bar').style.width = o.toFixed(2) + '%';
        document.getElementById('perc').innerText = '%' + o.toFixed(1);
        document.getElementById('cur').innerText = m;
    }, 500);
})();
