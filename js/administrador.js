import Producto from './classProducto.js';
import { resumenValidaciones } from "./validaciones.js";

//crear
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

formularioProductos.addEventListener("submit", prepararFormularioProducto);
btnCrearProducto.addEventListener("click", desplegarModalProducto);

function prepararFormularioProducto(e) {
  e.preventDefault();
  console.log("en el evento submit");
  if (altaProducto) {
    crearProducto();
  } else {
    editarProducto();
  }
}

function desplegarModalProducto() {
  limpiarFormulario();
  altaProducto=true;
  modalProducto.show();
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
  
      const productoNuevo = new Producto(
        undefined,
        nombre.value,
        descripcion.value,
        imagen.value,
        precio.value
      );
      
      listaProductos.push(productoNuevo);

      guardarEnLocalstorage();
      console.log(productoNuevo);
     
      crearFila(productoNuevo, listaProductos.length);
 
      Swal.fire(
        "Producto creado",
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
  //Editar
  window.prepararProducto = (idProducto) => {
    const productoBuscado = listaProductos.find((producto) => producto.id === idProducto);
  
    if (productoBuscado) {
      id.value = productoBuscado.id;
      nombre.value = productoBuscado.nombre;
      descripcion.value = productoBuscado.descripcion;
      precio.value = productoBuscado.precio;
      imagen.value = productoBuscado.imagen;
      modalProducto.show();
      altaProducto = false;
    } else {
      console.error('Producto no encontrado');
    }
  };
  
  function editarProducto() {
    const idProducto = id.value;
    const posicionProducto = listaProductos.findIndex((producto) => producto.id === idProducto);
  
    if (posicionProducto !== -1) {
      listaProductos[posicionProducto].nombre = nombre.value;
      listaProductos[posicionProducto].imagen = imagen.value;
      listaProductos[posicionProducto].descripcion = descripcion.value;
      listaProductos[posicionProducto].precio = precio.value;
  
      guardarEnLocalstorage();
  
      let tablaProducto = document.getElementById('tablaProducto');
      tablaProducto.children[posicionProducto].children[1].innerHTML = nombre.value;
      tablaProducto.children[posicionProducto].children[2].children[0].innerHTML = descripcion.value;
      tablaProducto.children[posicionProducto].children[3].children[0].innerHTML = imagen.value;
      tablaProducto.children[posicionProducto].children[4].innerHTML = precio.value;
  
      Swal.fire(
        'Producto modificado',
        'El producto fue modificado exitosamente',
        'success'
      );
  
      limpiarFormulario();
      modalProducto.hide();
    } else {
      console.error('Producto no encontrado en la lista');
    }
  }

    Swal.fire(
      "Producto modificado",
      "El producto fue modificado exitosamente",
      "success"
    );
   
    limpiarFormulario();
    modalProducto.hide();
  //borrar Productos
  window.borrarProducto = (id) => {
    Swal.fire({
      title: "¿Esta seguro de borrar el Producto?",
      text: "No puedes volver atras luego de borrar unProducto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0079FF",
      cancelButtonColor: "#FF0060",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      console.log(result);
      if (result.isConfirmed) {
       
        console.log(id);
        
        let posicionProducto = listaProductos.findIndex(
          (producto) => producto.id === id
        );
        
        listaProductos.splice(posicionProducto, 1);
      
        guardarEnLocalstorage();
        
        let tablaProducto = document.getElementById("tablaProducto");
        tablaProducto.removeChild(tablaProducto.children[posicionProducto]);
      
        Swal.fire(
          "Producto eliminado",
          "El Producto seleccionado fue borrado correctamente",
          "success"
        );
        
      }
    });
  };

