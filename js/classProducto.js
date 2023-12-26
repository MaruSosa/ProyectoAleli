export default class Producto {
    #id;
    #nombre;
    #descripcion;
    #imagen;
    #precio;
  
    constructor(id, nombre, descripcion, imagen, precio) {
      this.#id = id;
      this.#nombre = nombre;
      this.#descripcion = descripcion;
      this.#imagen = imagen;
      this.#precio = precio;
    }
  
    // Getters
    get id() {
      return this.#id;
    }
  
    get nombre() {
      return this.#nombre;
    }
  
    get descripcion() {
      return this.#descripcion;
    }
  
    get imagen() {
      return this.#imagen;
    }
  
    get precio() {
      return this.#precio;
    }
  
    // Setters
    set id(newId) {
      this.#id = newId;
    }
  
    set nombre(newNombre) {
      this.#nombre = newNombre;
    }
  
    set descripcion(newDescripcion) {
      this.#descripcion = newDescripcion;
    }
  
    set imagen(newImagen) {
      this.#imagen = newImagen;
    }
  
    set precio(newPrecio) {
      this.#precio = newPrecio;
    }
  
//para q funcione stringify
    toJSON(){
      return {
        id : this.id,
        nombre : this.nombre,
        descripcion : this.descripcion,
        imagen : this.imagen,
        precio : this.precio,
      }
    }
}
