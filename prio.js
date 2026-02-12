(function() {
    const h = 872.54;
    const m = 500;
    const o = (m / h) * 100;
    setTimeout(() => {
        document.getElementById('bar').style.width = o.toFixed(2) + '%';
        document.getElementById('perc').innerText = '%' + o.toFixed(1);
        document.getElementById('cur').innerText = m;
    }, 500);
})();
