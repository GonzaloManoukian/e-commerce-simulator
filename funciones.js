let usuario = prompt("Ingrese su nombre y apellido");
let verificacion = prompt("Vuelva a ingresar su nombre y apellido para verificar que no es un robot");

if(usuario == verificacion) {
    console.log("Usuario: " + usuario);
    alert("Bienvenido " + usuario);

    let numero = parseInt(prompt("Ingrese un Numero"))
    
    if(numero >= 10 && numero <= 50) {
        alert("Su numero se encuentra entre 10 y 50")
    } else {
        alert("Su numero es menor a 10 o mayor a 50")
    }
} else {
    alert("Usuario Incorrecto, Intente Nuevamente.")
}
