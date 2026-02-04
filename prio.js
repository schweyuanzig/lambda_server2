(function() {
    const h = 1078.66;
    const m = 400;
    const o = (m / h) * 100;
    setTimeout(() => {
        document.getElementById('bar').style.width = o.toFixed(2) + '%';
        document.getElementById('perc').innerText = '%' + o.toFixed(1);
        document.getElementById('cur').innerText = m;
    }, 500);
})();
