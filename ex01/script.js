function verificar() {
    let txt = document.querySelector('input#txtn');
    let n = Number(txt.value);
    let res = document.querySelector('div#res');

    if (n < 0) {
        res.innerHTML = '<p> <strong>Valor Negativo</strong> </p>'
    } else {
        res.innerHTML = '<p> <strong>Valor Positivo</strong> </p>'
    }
}