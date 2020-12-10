let producto = 2000;
let cuotas = parseInt(prompt(`El saldo de su compra es de $${producto}, desea realizar la compra en 1, 3 o 6 cuotas? Por favor ingrese el numero de cuotas:`));

function calculoCuotas(producto, cuotas) {
    return parseFloat((producto / cuotas).toFixed(2));
}

switch(cuotas) {
    case 1:
        alert(`Usted realizara el pago en una cuota por el valor de $${calculoCuotas(producto, cuotas)}.`);
        console.log(`1 cuota $${calculoCuotas(producto, cuotas)}`)
        break;
    case 3:
        alert(`Usted realizara el pago en 3 cuotas por el valor de $${calculoCuotas(producto, cuotas)} c/u.`);
        console.log(`3 cuotas $${calculoCuotas(producto, cuotas)} c/u`)
        break;
    case 6:
        alert(`Usted realizara el pago en 6 cuotas por el valor de $${calculoCuotas(producto, cuotas)} c/u.`);
        console.log(`6 cuotas $${calculoCuotas(producto, cuotas)} c/u`)
        break;
    default:
        alert(`Valor ingresado Incorrecto. Por favor, intentelo nuevamente`);
        break;
}
