export const obtenerSucursalMasCercana = (pos, sucursales) => {
  var listaSucursales = [];
  var crd = pos.coords;
  if (crd === undefined) {
    return null;
  }
  var datos = {
    latitud: crd.latitude,
    longitud: crd.longitude,
  };
  for (var i = 0; i < sucursales.length; i++) {
    if (
      parseInt(
        getKilometros(
          datos.latitud,
          datos.longitud,
          sucursales[i].latitud,
          sucursales[i].longitud
        )
      ) <= 5
    ) {
      listaSucursales.push(sucursales[i]);
    }
  }
  // TODO: Se buscan bien las sucusales, despues hay que ver como mostrarlas
  // Probablemente haya que transformar esto en una clase y asignar la lista como un estado
  return listaSucursales;
};

function getKilometros(lat1, lon1, lat2, lon2) {
  var R = 6378.137; //Radio de la tierra en km
  var dLat = rad(lat2 - lat1);
  var dLong = rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(lat1)) *
      Math.cos(rad(lat2)) *
      Math.sin(dLong / 2) *
      Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d.toFixed(3); //Retorna tres decimales
}
function rad(x) {
  return (x * Math.PI) / 180;
}

export const agregarProductoCarrito = (producto) => {
  var elemento = {
    idProducto: producto.id,
    nombreProducto: producto.nombre,
    precio: producto.precio,
    cantidad: 1,
  };
  var carritoActual = JSON.parse(localStorage.getItem("carrito"));
  let pos = PosicionProducto(carritoActual.listaProductos, producto.id)
  if(pos !== -1){
    ModificarCantidadCarrito(producto.idProducto, 1)
    return true;
  }
  var carritoNuevo = {};
  if (carritoActual == null) {
    carritoNuevo = {
      listaProductos: [elemento],
      total: producto.precio * 1,
    };
  } else {
    carritoActual.listaProductos.push(elemento);
    carritoNuevo = {
      listaProductos: carritoActual.listaProductos,
      total: carritoActual.total + producto.precio * 1,
    };
  }

  localStorage.setItem("carrito", JSON.stringify(carritoNuevo));
  return true;
  //console.log(JSON.parse(localStorage.getItem("carrito")));
};

export const TraerInfoCarrito = () => {
  return JSON.parse(localStorage.getItem("carrito"));
};

export const EliminarProductoCarrito = (id) => {
  var carritoActual = JSON.parse(localStorage.getItem("carrito"));
  if (carritoActual.listaProductos.length === 1) {
    localStorage.removeItem("carrito");
  }
  let pos = PosicionProducto( carritoActual.listaProductos, id)
  
  var carritoNuevo = {
    listaProductos: carritoActual.listaProductos,
    total:
      carritoActual.total -
      (carritoActual.listaProductos[pos].precio * carritoActual.listaProductos[pos].cantidad),
  };
  carritoActual.listaProductos.splice(pos, 1);

  localStorage.setItem("carrito", JSON.stringify(carritoNuevo));
  return true;
};

export const ModificarCantidadCarrito = (idProducto, sumarORestar) => {
  var carritoActual = JSON.parse(localStorage.getItem("carrito"));

  if (carritoActual == null) {
    return false;
  }

  let pos = PosicionProducto(carritoActual.listaProductos, idProducto)
  if (sumarORestar === 1) {
    carritoActual.listaProductos[pos].cantidad++;
  }else {
    if (carritoActual.listaProductos[pos].cantidad !== 1) {
      carritoActual.listaProductos[pos].cantidad--;
    } else {
      // Habia un solo producto, si se disminuye su cantidad se elimina
      carritoActual.listaProductos.splice(pos, 1);
    }
  }

  var carritoNuevo = {
    listaProductos: carritoActual.listaProductos,
    total: carritoActual.total + carritoActual.listaProductos[pos] * sumarORestar,
  };

  localStorage.setItem("carrito", JSON.stringify(carritoNuevo));
  return true
};

function PosicionProducto(lista, idProducto) {
  var pos = -1;
  for (var i = 0; i < lista.length; i++) {
    console.log(i + ' lista[i].idProducto '+ lista[i].idProducto + ' idProducto ' + idProducto)
    if (lista[i].idProducto === idProducto) {
      pos = i;
      i = 1000;
    }
  }
  return pos;
}
