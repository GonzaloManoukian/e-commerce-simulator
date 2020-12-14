// let producto = 2000;
// let cuotas = parseInt(prompt(`El saldo de su compra es de $${producto}, desea realizar la compra en 1, 3 o 6 cuotas? Por favor ingrese el numero de cuotas:`));

// function calculoCuotas(producto, cuotas) {
//     return parseFloat((producto / cuotas).toFixed(2));
// }

// switch(cuotas) {
//     case 1:
//         alert(`Usted realizara el pago en una cuota por el valor de $${calculoCuotas(producto, cuotas)}.`);
//         console.log(`1 cuota $${calculoCuotas(producto, cuotas)}`)
//         break;
//     case 3:
//         alert(`Usted realizara el pago en 3 cuotas por el valor de $${calculoCuotas(producto, cuotas)} c/u.`);
//         console.log(`3 cuotas $${calculoCuotas(producto, cuotas)} c/u`)
//         break;
//     case 6:
//         alert(`Usted realizara el pago en 6 cuotas por el valor de $${calculoCuotas(producto, cuotas)} c/u.`);
//         console.log(`6 cuotas $${calculoCuotas(producto, cuotas)} c/u`)
//         break;
//     default:
//         alert(`Valor ingresado Incorrecto. Por favor, intentelo nuevamente`);
//         break;
// }

function usuario(user, pass) {
    this.user = user;
    this.pass = pass;
}

let user = prompt(`Ingreses su nombre de usuario`);
let pass = prompt(`Ingrese su Contraseña`);

let usuarioActual = new usuario(user, pass);
console.log(usuarioActual);

alert(`Bienvendio ${usuarioActual.user}. Que bueno tenerte de vuelta!`);
console.log(`Usuario Activo: ${usuarioActual.user}`);


function libro(titulo, autor, editorial, precio) {
    this.titulo = titulo;
    this.autor = autor;
    this.editorial = editorial;
    this.precio = precio;
}

let libro1 = new libro("Cartero", "Charles Bukowski", "Anagrama", 700);
let libro2 = new libro("Viajes por el Scriptorum", "Pual Auster", "Anagrama", 700);




