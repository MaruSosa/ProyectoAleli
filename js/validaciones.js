function validarCantidadCaracteres(texto, min, max){
    if(texto.length >= min && texto.length <= max){
        console.log('la palabra es valida')
        return true;
    }else{
        console.log('la palabra es incorrecta')
        return false;
    }
  }
  function validarCantidadCaracteresDescripcion(texto,min,max){
      if(texto.length>=min&& texto.length<=max){
          return true;
      }else{
          return false;
      }
  }
  function validarImagen (url){
    const patron = /\.(jpg|jpeg|png|gif)$/i;
    if (patron.test(url)) {
      console.log('La URL de la imagen tiene un formato válido');
      return true;
    } else {
      console.log('La URL de la imagen tiene un formato erróneo');
      return false;
    }
  };
  function validarPrecio(precio){
      const regex = /^(?!0+(\.0+)?$)(?!-0+(\.0+)?$)\d+(\.\d+)?$/;
      return regex.test(precio);
    }
  
  
  export function resumenValidaciones(nombre, descripcion, imagen, precio){
    let resumen = '';
    if(! validarCantidadCaracteres(nombre,2, 100)){
  
        resumen = 'El nombre debe contener entre 2 y 100 caracteres <br>';
    };
    if(! validarCantidadCaracteresDescripcion(descripcion,5, 300)){
      
        resumen += 'La descripcion debe contener entre 5 y 300 caracteres <br>';
    };
    if(!validarImagen(imagen)){
        
        resumen += 'La url debe ser valida y contener una extension (.jpg,.png o .gif) <br>';
    };
    if(! validarPrecio(precio)){
        
        resumen += 'Debe ingresar un numero mayor a 0 <br>';
    };
    return resumen;
  }