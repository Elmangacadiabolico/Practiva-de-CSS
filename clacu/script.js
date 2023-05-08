let display = document.getElementById("displayJs")
let btAc = document.getElementById("AC")
btAc.addEventListener('click', () => {
    display.innerHTML = ""
})

let bt1 = document.getElementById("uno")
bt1.addEventListener('click', () => {
    display.append(bt1.innerHTML)
})

let bt2 = document.getElementById("dos")
bt2.addEventListener('click', () => {
    display.append(bt2.innerHTML)
})

let bt3 = document.getElementById("tres")
bt3.addEventListener('click', () => {
    display.append(bt3.innerHTML)
})

let bt4 = document.getElementById("cuatro")
bt4.addEventListener('click', () => {
    display.append(bt4.innerHTML)
})

let bt5 = document.getElementById("cinco")
bt5.addEventListener('click', () => {
    display.append(bt5.innerHTML)
})

let bt6 = document.getElementById("seis")
bt6.addEventListener('click', () => {
    display.append(bt6.innerHTML)
})

let bt7 = document.getElementById("siete")
bt7.addEventListener('click', () => {
    display.append(bt7.innerHTML)
})

let bt8 = document.getElementById("ocho")
bt8.addEventListener('click', () => {
    display.append(bt8.innerHTML)
})

let bt9 = document.getElementById("nueve")
bt9.addEventListener('click', () => {
    display.append(bt9.innerHTML)
})

let bt0 = document.getElementById("cero")
bt0.addEventListener('click', () => {
    display.append(bt0.innerHTML)
})

let btMas = document.getElementById("mas")
btMas.addEventListener('click', () => {
    display.append(btMas.innerHTML)
})

let btMenos = document.getElementById("menos")
btMenos.addEventListener('click', () => {
    display.append(btMenos.innerHTML)
})

let btPor = document.getElementById("por")
btPor.addEventListener('click', () => {
    display.append(btPor.innerHTML)
})

let btDividir = document.getElementById("dividir")
btDividir.addEventListener('click', () => {
    display.append(btDividir.innerHTML)
})

let btAbrirParentesis = document.getElementById("abrirParentesis")
btAbrirParentesis.addEventListener('click', () => {
    display.append(btAbrirParentesis.innerHTML)
})

let btCerrarParentesis = document.getElementById("cerrarParentesis")
btCerrarParentesis.addEventListener('click', () => {
    display.append(btCerrarParentesis.innerHTML)
})

let btComa = document.getElementById("coma")
btComa.addEventListener('click', () => {
    display.append(btComa.innerHTML)
})

let btIgual = document.getElementById("igual")
btIgual.addEventListener('click', () => {
    display.innerHTML = sumVars(display.innerHTML)
})

console.log(sumVars(["5", "+", "6"]))
function sumVars(a, signoX, b) {
    let resultado = ""
    if (signoX == "+") {
        let resultado = a + b;
    } else if (signoX == "-") {
        let resultado = a - b;
    } else if (signoX == "*") {
        let resultado = a * b;
    } else if (signoX == "/") {
        let resultado = a / b;
    }
    return resultado
}
