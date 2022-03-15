function tabuada () {
    let txt = document.querySelector('input#txtn');
    let n = Number(txt.value)
    let sel = document.querySelector('option#sel');
    
    
    for (let i = 0; i <= 10; i++) { 
        let tabuada = n * i;
        sel.innerHTML = `<p> ${n} x ${i} = ${tabuada} </p>`;
    }
}