// console.log("carga productos.js");

let stockProductos;

document.addEventListener("DOMContentLoaded", () => {
  $.ajax({
    type: "GET",
    url: "js/productos.json",
    success: function (data) {
      stockProductos = data;
      cargarListaProductos(stockProductos);
    },
    complete: function () {
      $.getScript("/js/funciones.js", function () {
        // console.log("Cargado despues de Ajax");
      });
    },
  });
});

function cargarListaProductos(productos) {
  //   $(".producto__card").hide();

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

  console.log("Agrega Productos");
}
