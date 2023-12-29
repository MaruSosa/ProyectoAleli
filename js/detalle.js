
console.log(window.location.search);
const parametroURL = new URLSearchParams(window.location.search);
const idProducto = parametroURL.get('id');

console.log(idProducto);

const listaNuevaProductos = JSON.parse(localStorage.getItem('listaProductos')) || []; // Manejar el caso en que no haya datos en localStorage

if (idProducto && listaNuevaProductos.length > 0) {
  const productoBuscado = listaNuevaProductos.find(itemProducto => itemProducto.id === idProducto);

  if (productoBuscado) {
    const mainDetalleProducto = document.querySelector('main');
    mainDetalleProducto.innerHTML +=  `<article class="card mb-3">
      <div class="row g-0 p-3">
        <div class="col-md-4">
          <img
            src="${productoBuscado.imagen}"
            class="img-fluid rounded-start justify-content-center"
            alt="usuario" id="imagenDetalle"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title justify-content-center">${productoBuscado.nombre}</h5>
            <p class="card-text">${productoBuscado.descripcion}</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Precio: ${productoBuscado.precio}</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  `;
  } else {
    console.log('El producto con el ID proporcionado no se encuentra en la lista.');
  }
} else {
  console.log('No se proporcionó un ID en la URL o no hay productos en la lista.');
}
