let listaProductos =
  JSON.parse(localStorage.getItem("listaProductos")) || [];

listaProductos.map((producto) => {
  crearColumna(producto);
});

function crearColumna(producto) {
  let grilla = document.querySelector("#grilla");
  grilla.innerHTML += `
    <aside class="col-12 col-md-4 col-lg-3 mb-3">
    <div class="card h-100" >
      <img src="${producto.imagen}" class="card-img-top imagenProducto" alt="${producto.nombre}">
      <div class="card-body">
        <h5 class="card-title tituloCardProducto">${producto.nombre}</h5>
      </div>
      <div class='card-footer d-flex justify-content-center'>
      <a class="btn btn-primary" href='../pages/detalle.html'>ver detalle</a>
      </div>
    </div>
  </aside>
    `;
}