let stockProductos = [];

//////////////////////////////////////////////////////////////////////////////////
// CARGA DE PRODUCTOS INICIAL
//////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
  fetch("./js/productos.json")
    .then((ans) => ans.json())
    .then((productos) => {
      stockProductos = productos;
      stockProductos = stockProductos.sort((a, b) => (a.titulo > b.titulo ? 1 : -1));
      cargarListaProductos(stockProductos);
      darFuncionalidadBotonesCompra();
    });
});

function cargarListaProductos(productos) {
  productos.forEach((producto) => {
    const { imagen, titulo, autor, precio, id } = producto;

    const catalogoContenedor = document.querySelector(".producto__catalogoContenedor");
    catalogoContenedor.innerHTML += `
		<div class="producto__card flex flex-ai-c">
		<img src="${imagen}" alt="" class="producto__imagen" />
		<div class="producto__detalles">
		  <h3 class="producto__titulo">${titulo}</h3>
		  <p class="producto__autor">${autor}</p>
		  <div class="producto__clasif flex flex-ai-c">
			<h4 class="producto__precio">$${precio}</h4>
			<div class="producto__estrella">
			  <span class="producto__estrella-active">&#9733;</span>
			  <span class="producto__estrella-active">&#9733;</span>
			  <span class="producto__estrella-active">&#9733;</span>
			  <span class="">&#9733;</span>
			  <span class="">&#9733;</span>
			</div>
		  </div>
		  <button class="producto__botonComprar" data-id="${id}">
			Agregar al Carrito
		  </button>
		</div>
	  </div>
		`;
  });
}

//////////////////////////////////////////////////////////////////////////////////
// ORDENAR PRODUCTOS POR
//////////////////////////////////////////////////////////////////////////////////

const sortBy = document.querySelector("#sortBy");

sortBy.addEventListener("change", sortByOption);

function sortByOption(e) {
  const option = e.target.value;

  if (option == "AZ") {
    ordenarAZ();
  } else if (option == "ZA") {
    ordenarZA();
  } else if (option == "precioUp") {
    ordenarPrecioUp();
  } else if (option == "precioDown") {
    ordenarPrecioDown();
  }
}

function ordenarAZ() {
  const catalogoContenedor = document.querySelector(".producto__catalogoContenedor");
  stockProductos = stockProductos.sort((a, b) => (a.titulo > b.titulo ? 1 : -1));

  limpiarProductos();
  cargarListaProductos(stockProductos);
  darFuncionalidadBotonesCompra();
}

function ordenarZA() {
  const catalogoContenedor = document.querySelector(".producto__catalogoContenedor");
  stockProductos = stockProductos.sort((a, b) => (b.titulo > a.titulo ? 1 : -1));

  limpiarProductos();
  cargarListaProductos(stockProductos);
  darFuncionalidadBotonesCompra();
}

function ordenarPrecioUp() {
  const catalogoContenedor = document.querySelector(".producto__catalogoContenedor");
  stockProductos = stockProductos.sort((a, b) => a.precio - b.precio);

  limpiarProductos();
  cargarListaProductos(stockProductos);
  darFuncionalidadBotonesCompra();
}

function ordenarPrecioDown() {
  const catalogoContenedor = document.querySelector(".producto__catalogoContenedor");
  stockProductos = stockProductos.sort((a, b) => b.precio - a.precio);

  limpiarProductos();
  cargarListaProductos(stockProductos);
  darFuncionalidadBotonesCompra();
}

function limpiarProductos() {
  while (catalogoContenedor.firstChild) {
    catalogoContenedor.removeChild(catalogoContenedor.firstChild);
  }
}

//////////////////////////////////////////////////////////////////////////////////
// BARRA DE BUSQUEDA
//////////////////////////////////////////////////////////////////////////////////

const busquedaInput = document.querySelector("#search");
busquedaInput.addEventListener("submit", busquedaProductos);

function busquedaProductos(e) {
  e.preventDefault();

  const busqueda = document.querySelector("#searchBar").value;

  const resultadoBusqueda = stockProductos.filter(
    (producto) =>
      producto.titulo.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase()) ||
      producto.autor.toLocaleLowerCase().includes(busqueda.toLocaleLowerCase())
  );

  limpiarProductos();
  cargarListaProductos(resultadoBusqueda);
  darFuncionalidadBotonesCompra();
}

//////////////////////////////////////////////////////////////////////////////////
// FILTROS
//////////////////////////////////////////////////////////////////////////////////

const atributoFiltro = document.querySelectorAll(".aside__filters--atributos");

atributoFiltro.forEach((atributo) => {
  atributo.addEventListener("click", filtrarProductos);
});

function filtrarProductos(e) {
  e.preventDefault();

  const atributo = e.target.textContent.toLocaleLowerCase();

  const resultado = stockProductos.filter((producto) => producto.categoria.toLocaleLowerCase() == atributo);

  if (atributo == "todos los libros") {
    limpiarProductos();
    cargarListaProductos(stockProductos);
    darFuncionalidadBotonesCompra();
  } else if (resultado != 0) {
    limpiarProductos();
    cargarListaProductos(resultado);
    darFuncionalidadBotonesCompra();
  } else {
    catalogoContenedor.innerHTML = `
		  <p> No se encontraron productos relacionados a su busqueda </p>
		  `;
  }

  atributoFiltro.forEach((atributo) => {
    atributo.classList.remove("filtersActive");
  });

  e.target.classList.add("filtersActive");
}
