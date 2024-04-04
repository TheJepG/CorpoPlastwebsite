/* Este Script es utilizado para mostrar la información del producto seleccionado en la sección de catalogo del sitio. Basicamente al hacer click en algun producto, muestra la información escrita en el HTML de dicho producto en el div seleccionador y modifica el GRID para darle espacio*/


let seleccion;
let gridMostrador;
let imgSeleccionada;
let productoSeleccionado;
let descripSeleccionada;
let precioSeleccionado;
let medidasDisponiblesSelecionado;
let anchoPantalla;

function cargar(item, section) {
  anchoPantalla = screen.width;
  quitarBordes();
  if (anchoPantalla >= 1260) {
    if (section == 1) {
      //Agregamos el atributo onclick para posicionar la pantalla en la sección del catalogo seleccionada
      document
        .getElementById("gridMostrador")
        .setAttribute("onclick", "enviarACatalogo(1)");

      //Inicialización de variables según la sección seleccionada.
      seleccion = document.getElementById("seleccion");
      gridMostrador = document.getElementById("gridMostrador");
      imgSeleccionada = document.getElementById("img");
      productoSeleccionado = document.getElementById("producto");
      descripSeleccionada = document.getElementById("descripcion");
      precioSeleccionado = document.getElementById("precio");
      medidasDisponiblesSelecionado =
        document.getElementById("medidasDisponibles");

      //Modifica el GRID y hace aparecer la seleccion
      gridMostrador.style =
        "grid-template-columns: repeat(3, 1fr); width: 55%;";
      seleccion.style = "display: flex; opacity: 1;";

      //Poner borde de color a item seleccionado
      item.style.border = "0.1em solid #1e84c6";

      //Inyecta la información  del producto seleccionado.
      imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

      productoSeleccionado.innerHTML =
        item.getElementsByTagName("p")[0].innerHTML;

      descripSeleccionada.innerHTML =
        item.getElementsByTagName("p")[1].innerHTML;

      precioSeleccionado.innerHTML =
        item.getElementsByTagName("span")[0].innerHTML;

        medidasDisponiblesSelecionado.innerHTML =
        item.getElementsByTagName("select")[0].innerHTML;
    } else if (section == 2) {
      //Agregamos el atributo onclick para posicionar la pantalla en la sección del catalogo seleccionada
      document
        .getElementById("gridMostrador2")
        .setAttribute("onclick", "enviarACatalogo(2)");

      //Inicialización de variables según la sección seleccionada.
      seleccion = document.getElementById("seleccion2");
      gridMostrador = document.getElementById("gridMostrador2");
      imgSeleccionada = document.getElementById("img2");
      productoSeleccionado = document.getElementById("producto2");
      descripSeleccionada = document.getElementById("descripcion2");
      precioSeleccionado = document.getElementById("precio2");
      medidasDisponiblesSelecionado = document.getElementById(
        "medidasDisponibles2"
      );

      //Modifica el GRID y hace aparecer la seleccion
      gridMostrador.style =
        "grid-template-columns: repeat(3, 1fr); width: 55%;";
      seleccion.style = "display: flex; opacity: 1;";

      //Poner borde de color a item seleccionado
      item.style.border = "0.1em solid #1e84c6";

      //Inyecta la información  del producto seleccionado.

      imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

      productoSeleccionado.innerHTML =
        item.getElementsByTagName("p")[0].innerHTML;

      descripSeleccionada.innerHTML =
        item.getElementsByTagName("p")[1].innerHTML;

      precioSeleccionado.innerHTML =
        item.getElementsByTagName("span")[0].innerHTML;

        medidasDisponiblesSelecionado.innerHTML =
        item.getElementsByTagName("select")[0].innerHTML;
    } else if (section == 3) {
      //Agregamos el atributo onclick para posicionar la pantalla en la sección del catalogo seleccionada
      document
        .getElementById("gridMostrador3")
        .setAttribute("onclick", "enviarACatalogo(3)");

      //Inicialización de variables según la sección seleccionada.
      seleccion = document.getElementById("seleccion3");
      gridMostrador = document.getElementById("gridMostrador3");
      imgSeleccionada = document.getElementById("img3");
      productoSeleccionado = document.getElementById("producto3");
      descripSeleccionada = document.getElementById("descripcion3");
      precioSeleccionado = document.getElementById("precio3");
      medidasDisponiblesSelecionado = document.getElementById(
        "medidasDisponibles3"
      );

      //Modifica el GRID y hace aparecer la seleccion
      gridMostrador.style =
        "grid-template-columns: repeat(3, 1fr); width: 55%;";
      seleccion.style = "display: flex; opacity: 1;";

      //Poner borde de color a item seleccionado
      item.style.border = "0.1em solid #1e84c6";

      //Inyecta la información  del producto seleccionado.

      imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

      productoSeleccionado.innerHTML =
        item.getElementsByTagName("p")[0].innerHTML;

      descripSeleccionada.innerHTML =
        item.getElementsByTagName("p")[1].innerHTML;

      precioSeleccionado.innerHTML =
        item.getElementsByTagName("span")[0].innerHTML;

        medidasDisponiblesSelecionado.innerHTML =
        item.getElementsByTagName("select")[0].innerHTML;
    } else if (section == 4) {
      //Agregamos el atributo onclick para posicionar la pantalla en la sección del catalogo seleccionada
      document
        .getElementById("gridMostrador4")
        .setAttribute("onclick", "enviarACatalogo(4)");

      //Inicialización de variables según la sección seleccionada.
      seleccion = document.getElementById("seleccion4");
      gridMostrador = document.getElementById("gridMostrador4");
      imgSeleccionada = document.getElementById("img4");
      productoSeleccionado = document.getElementById("producto4");
      descripSeleccionada = document.getElementById("descripcion4");
      precioSeleccionado = document.getElementById("precio4");
      medidasDisponiblesSelecionado = document.getElementById(
        "medidasDisponibles4"
      );

      //Modifica el GRID y hace aparecer la seleccion
      gridMostrador.style =
        "grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(2, 1fr); width: 55%;";
      seleccion.style = "display: flex; opacity: 1;";

      //Poner borde de color a item seleccionado
      item.style.border = "0.1em solid #1e84c6";

      //Inyecta la información  del producto seleccionado.

      imgSeleccionada.src = item.getElementsByTagName("img")[0].src;

      productoSeleccionado.innerHTML =
        item.getElementsByTagName("p")[0].innerHTML;

      descripSeleccionada.innerHTML =
        item.getElementsByTagName("p")[1].innerHTML;

      precioSeleccionado.innerHTML =
        item.getElementsByTagName("span")[0].innerHTML;

      medidasDisponiblesSelecionado.innerHTML =
        item.getElementsByTagName("select")[0].innerHTML;
    }
  }
}

function cerrar(sectionCerrar) {
  if (sectionCerrar == 1) {
    seleccion = document.getElementById("seleccion");
    gridMostrador = document.getElementById("gridMostrador");
  }
  if (sectionCerrar == 2) {
    seleccion = document.getElementById("seleccion2");
    gridMostrador = document.getElementById("gridMostrador2");
  }
  if (sectionCerrar == 3) {
    seleccion = document.getElementById("seleccion3");
    gridMostrador = document.getElementById("gridMostrador3");
  }
  if (sectionCerrar == 4) {
    seleccion = document.getElementById("seleccion4");
    gridMostrador = document.getElementById("gridMostrador4");
  }
  seleccion.style.width = "0";
  seleccion.style.height = "0";
  seleccion.style.position = "relative";
  seleccion.style.opacity = "0";
  gridMostrador.style = "width: 100%;";
  seleccion.style.display = "none";
  quitarBordes();
  return sectionCerrar;
}

function quitarBordes() {
  var items = document.getElementsByClassName("item");
  for (i = 0; i < items.length; i++) {
    items[i].style.border = "none";
  }
}
