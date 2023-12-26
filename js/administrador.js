import Producto from './classProducto.js';
import { resumenValidaciones } from "./validaciones.js";


let formularioProductos = document.getElementById("formProducto");
let modalProducto = new bootstrap.Modal(
  document.getElementById("modalProducto")
);
const btnCrearProducto = document.querySelector("#btnCrearProducto");
const id = document.getElementById("id"),
  nombre = document.getElementById("nombre"),
  descripcion = document.getElementById("descripcion"),
  imagen = document.getElementById("imagen"),
  precio = document.getElementById("precio");

let altaProducto = true; 

let listaProductos = JSON.parse(localStorage.getItem("listaProductos")) || [];
if (listaProductos.length > 0) {
  listaProductos = listaProductos.map(
    (producto) =>
      new Producto(
        producto.id,
        producto.nombre,
        producto.descripcion,
        producto.imagen,
        producto.precio,
      )
  );
}
console.log(listaProductos);

cargaInicial();

function cargaInicial() {
  if (listaProductos.length > 0) {
    listaProductos.map((Producto, posicion) =>
      crearFila(Producto, posicion + 1)
    );
  }
}

function crearFila(Producto, fila) {
  console.log(Producto);
  let tablaProducto = document.getElementById("tablaProducto");
  tablaProducto.innerHTML += `<tr>
  <th scope="row">${fila}</th>
  <td>${Producto.nombre}</td>
  <td><span class="my-class text-truncate">${Producto.descripcion}</span></td>
  <td><span class="my-class text-truncate">${Producto.imagen}</span></td>
  <td>${Producto.precio}</td>
  <td>
    <button class="btn btn-warning" onclick="prepararProducto('${Producto.id}')">
      <i class="bi bi-pencil-square"></i>
    </button>
    <button class="btn btn-danger" onclick="borrarProducto('${Producto.id}')">
      <i class="bi bi-x-square"></i>
    </button>
  </td>
</tr>`;
}

formularioProductos.addEventListener("submit", prepararProducto);
btnCrearProducto.addEventListener("click", desplegarModalProducto);

function desplegarModalProducto() {
  limpiarFormulario();
  altaProducto=true;
  modalProducto.show();
}
function prepararProducto(e) {
    e.preventDefault();
    console.log("en el evento submit");
    if (altaProducto) {
      crearProducto();
    } else {
        // editarProducto();
    }
  }
  
function crearProducto() {
 
    const resumen = resumenValidaciones(
      nombre.value,
      descripcion.value,
      imagen.value,
      precio.value
    );

    mostrarMensajeError(resumen);
    if (resumen.length === 0) {
      // crear producto
      const productoNuevo = new Producto(
        undefined,
        nombre.value,
        descripcion.value,
        imagen.value,
        precio.value
      );
      
      listaProductos.push(productoNuevo);
      //guardar el array en localstorage
      guardarEnLocalstorage();
      console.log(productoNuevo);
      //dibujar la fila en la tabla
      crearFila(productoNuevo, listaProductos.length);
      //mostrar un mensaje
      Swal.fire(
        "producto creado",
        "El producto fue creado exitosamente",
        "success"
      );
      limpiarFormulario();
    
    }
  }
  
  function mostrarMensajeError(resumen) {
    if (resumen.length > 0) {
      alert.className = "alert alert-danger mt-3";
      alert.innerHTML = resumen;
    } else {
      alert.className = "alert alert-danger mt-3 d-none";
    }
  }
  
  function guardarEnLocalstorage() {
    localStorage.setItem("listaProductos", JSON.stringify(listaProductos));
  }
  
  function limpiarFormulario() {
    formularioProductos.reset();
  }