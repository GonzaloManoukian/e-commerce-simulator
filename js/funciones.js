/* ===== Funcion Constructora de Productos ===== */

// function libro(titulo, autor, editorial, precio) {
//     this.titulo = titulo;
//     this.autor = autor;
//     this.editorial = editorial;
//     this.precio = precio;
// }

// const libro1 = new libro("Cartero", "Charles Bukowski", "Anagrama", 700);
// const libro2 = new libro("Viajes por el Scriptorum", "Pual Auster", "Anagrama", 700);
// const libro3 = new libro("Seda", "Alessandro Baricco", "Anagrama", 700);


// /* ===== Carrito ===== */

// let carrito = [];


// /* ===== Agregar Producto al Carrito ===== */


const addToCart = document.querySelectorAll(`.producto__botonComprar`);
addToCart.forEach(addToCartButton => {
    addToCartButton.addEventListener(`click`, addToCartClicked);
});

const carritoContenedor = document.querySelector(`.carrito__listaContenedor`)

function addToCartClicked(event) {
    const button = event.target;
    const producto = button.closest(`.producto__card`);
    
    const productoTitulo = producto.querySelector(`.producto__titulo`).textContent;
    const productoAutor = producto.querySelector(`.producto__autor`).textContent;
    const productoPrecio = producto.querySelector(`.producto__precio`).textContent;
    
    agregarProductoAlCarrito(productoTitulo, productoAutor, productoPrecio);
};

function agregarProductoAlCarrito(productoTitulo, productoAutor, productoPrecio) {
    const carritoRow = document.createElement('div');
    const carritoContenido = `
    <div class="carrito__item">
    <div class="carrito__itemDescripcion">
        <h3 class="producto__titulo"> ${productoTitulo} </h3>
        <p class="prdocuto__autor"> ${productoAutor} </p>
        <a href="#" class="carrito__productoEliminar"> Eliminar </a>
    </div>

    <div class="carrito__Cantidad">
        <input class="carrito__itemCantidad" type="number" min="1" value="1">
    </div>

    <div class="carrito__itemPrecio">
        <h3> ${productoPrecio} </h3>
    </div>
    </div>`;

    carritoRow.innerHTML = carritoContenido;
    carritoContenedor.append(carritoRow);
};





