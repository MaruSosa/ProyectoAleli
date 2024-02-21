// let x1=0, y1=0;
// window.client
// const 
//   vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
//   dist_to_draw = 50,
//   delay = 1000,
//   fsize = [
//     '1.1rem', '1.4rem', '.8rem', '1.7rem'
//   ],
//   colors = [
//   '#FF0000',
//   '#0000FF',
//   '#FFA500',
//   '#FF00FF',
//   '#00FF00',
//   '#5EB0E9'
// ],
//   rand = (min, max) => 
//     Math.floor(Math.random() * (max - min + 1)) + min,
//   selRand = (o) => o[rand(0, o.length -1)],
//   distanceTo =  (x1, y1, x2, y2) => 
//     Math.sqrt((Math.pow(x2-x1,2))+(Math.pow(y2-y1,2))),
//   shouldDraw = (x, y) => 
//     (distanceTo(x1, y1, x, y) >= dist_to_draw),
//   addStr = (x, y) => {
//     const str = document.createElement("div");
//     str.innerHTML = '&#10022;';
//     str.className = 'star';
//     str.style.top = `${y + rand(-20,20)}px`;
//     str.style.left = `${x}px`;
//     str.style.color = selRand(colors);
//     str.style.fontSize = selRand(fsize);
//     document.body.appendChild(str);
//     const fs = 10 + 5 * parseFloat(getComputedStyle(str).fontSize);
//     str.animate({
//       translate: `0 ${(y+fs)>vh?vh-y:fs}px`,
//       opacity: 0,
//       transform: `rotateX(${rand(1, 500)}deg) rotateY(${rand(1, 500)}deg)`
//     }, {
//       duration: delay,
//       fill: 'forwards',

//     });
 
//     setTimeout(() => {
//         str.remove();
//       }, delay);
//   }

// addEventListener("mousemove", (e) => {
//   const {clientX, clientY} = e;
//   if(shouldDraw(clientX, clientY)){
//     addStr(clientX, clientY);
//     x1 = clientX;
//     y1 = clientY;
//   }
// });
// Función para buscar el producto
function searchProduct(event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  // Obtener el valor del campo de búsqueda
  var searchTerm = document.getElementById("searchInput").value.toLowerCase();

  // Obtener los productos del LocalStorage (asumiendo que se guardan como un arreglo)
  var products = JSON.parse(localStorage.getItem("productos")) || [];

  // Realizar la búsqueda del producto
  var searchResult = products.filter(function(product) {
      return product.toLowerCase().includes(searchTerm);
  });

  // Mostrar los resultados (puedes cambiar esto según tu lógica de presentación)
  if (searchResult.length > 0) {
      alert("Se encontraron productos: " + searchResult.join(", "));
  } else {
      alert("No se encontraron productos que coincidan con la búsqueda.");
  }
}
