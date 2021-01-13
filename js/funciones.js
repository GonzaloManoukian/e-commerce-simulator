/* ===== SELECTORES ===== */
const agregarProductoCarrito = document.querySelectorAll(`.producto__botonComprar`);
const carritoContenedor = document.querySelector(`.carrito__listaContenedor`);
const listaCarritoHTML = document.querySelector(`.carrito__listaContenedor`);

let carrito = [];

/* ===== LISTENERS ===== */

agregarProductoCarrito.forEach((addToCartButton) => {
  addToCartButton.addEventListener(`click`, agregarProducto);
});

listaCarritoHTML.addEventListener("click", quitarProducto);

document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  insertarCarritoHTML();
  actualizarCarritoTotal();
});

/* === JQUERY: SELECTORES - LISTENERS === */

const restarCantidadItem = $(".carrito__listaContenedor").on("click", restarCantidad);
const sumarCantidadItem = $(".carrito__listaContenedor").on("click", sumarCantidad);


/* ===== FUNCIONES ===== */


function agregarProducto(e) {
  const button = e.target;
  const producto = button.closest(`.producto__card`);

  obtenerDatos(producto);
}


function obtenerDatos(producto) {
  const productoAgregado = {
    titulo: producto.querySelector(`.producto__titulo`).textContent,
    autor: producto.querySelector(`.producto__autor`).textContent,
    precio: producto.querySelector(`.producto__precio`).textContent,
    cantidad: producto.querySelector(`.producto__itemCantidad`).value,
    id: producto.querySelector(`.producto__botonComprar`).getAttribute("data-id"),
  };

  const existe = carrito.some((producto) => producto.id == productoAgregado.id);
  const cantidadInput = producto.querySelector(`.producto__itemCantidad`).value;

  if (existe) {
    const productos = carrito.map((producto) => {
      if (producto.id === productoAgregado.id) {
        producto.cantidad = Number(producto.cantidad) + Number(cantidadInput);
        return producto;
      } else {
        return producto;
      }
    });
    carrito = [...productos];
  } else {
    carrito.push(productoAgregado);
  }

  insertarCarritoHTML();
  guardarStorage();
}


function insertarCarritoHTML() {
  limpiarCarrito();

  carrito.forEach((producto) => {
    /* Destructuring sobre el producto */
    const { titulo, autor, precio, cantidad, id } = producto;

    const carritoRow = document.createElement("div");
    const carritoContenido = `
        <div class="carrito__item">
        <div class="carrito__itemDescripcion">
            <h3 class="producto__titulo"> ${titulo} </h3>
            <p class="prdocuto__autor"> ${autor} </p>
            <a href="#" class="carrito__productoEliminar" data-id="${id}"> Eliminar </a>
        </div>
    
        <div class="carrito__Cantidad">
            <a href="#" class="carritoItemRestar" data-id="${id}"> - </a>
            <p class="carrito__itemCantidad"> ${cantidad} </p>
            <a href="#" class="carritoItemSumar" data-id="${id}"> + </a>
        </div>
    
        <div class="carrito__itemPrecio">
            <h3> ${precio} </h3>
        </div>
        </div>`;

    carritoRow.innerHTML = carritoContenido;
    carritoContenedor.append(carritoRow);
  });

  actualizarCarritoTotal();
  carritoCantidadTotal();
}


function limpiarCarrito() {
  while (carritoContenedor.firstChild) {
    carritoContenedor.removeChild(carritoContenedor.firstChild);
  }
}


function guardarStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}


function quitarProducto(e) {
  if (e.target.classList.contains("carrito__productoEliminar")) {
    e.preventDefault();

    const productoId = e.target.getAttribute("data-id");

    carrito = carrito.filter((producto) => producto.id != productoId);

    insertarCarritoHTML();
    guardarStorage();
    actualizarCarritoTotal();
  }
}


function actualizarCarritoTotal() {
  let total = 0;
  const carritoTotal = document.querySelector(`.carrito__totalCalculo--h`);

  carritoTotal.textContent = `$${total}`;

  if (carrito != []) {
    carrito.forEach((producto) => {
      const { titulo, autor, precio, cantidad, id } = producto;
      const precioParse = Number(precio.replace("$", ""));
      total = total + cantidad * precioParse;

      carritoTotal.textContent = `$${total}`;
    });
  } else {
    total = 0;
  }
}


function carritoCantidadTotal() {
  const spanCarrito = document.querySelector("#carrito_lenght");

  let cantidadTotal = 0;

  spanCarrito.textContent = `${cantidadTotal}`;

  if (carrito != []) {
    carrito.forEach((producto) => {
      const { titulo, autor, precio, cantidad, id } = producto;
      cantidadTotal = cantidadTotal + Number(cantidad);

      spanCarrito.textContent = `${cantidadTotal}`;
    });
  } else {
    cantidadTotal = 0;
  }
}


function restarCantidad(e) {
  if (e.target.classList.contains("carritoItemRestar")) {
    e.preventDefault();

    const cantidadId = e.target.getAttribute("data-id");
    const productos = carrito.map((producto) => {
      if (producto.id === cantidadId) {
        producto.cantidad--;
        if (producto.cantidad <= 1) {
          producto.cantidad = 1;
        }
        return producto;
      } else {
        return producto;
      }
    });
    carrito = [...productos];
  }

  insertarCarritoHTML();
  guardarStorage();
  actualizarCarritoTotal();
}


function sumarCantidad(e) {
  if (e.target.classList.contains("carritoItemSumar")) {
    e.preventDefault();

    const cantidadId = e.target.getAttribute("data-id");
    const productos = carrito.map((producto) => {
      if (producto.id === cantidadId) {
        producto.cantidad++;
        return producto;
      } else {
        return producto;
      }
    });
    carrito = [...productos];
  }

  insertarCarritoHTML();
  guardarStorage();
  actualizarCarritoTotal();
}
