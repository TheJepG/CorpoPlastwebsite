/* ANIMACION MOSTRAR ELEMENTOS CON SCROLL */

function mostrarScroll() {
  let animado = document.getElementsByClassName("animado");
  let scrollTop = document.documentElement.scrollTop;
  for (var i = 0; i < animado.length; i++) {
    let alturaAnimado = animado[i].offsetTop;
    if (alturaAnimado - 900 < scrollTop) {
      animado[i].style.opacity = 1;
      animado[i].classList.add("mostrarArriba");
    }
  }
}

window.addEventListener("scroll", mostrarScroll);

/* MENU HAMBURGUESA MOBILE */

function burgerMenu() {
  _items.classList.toggle("open");
  _toggle.classList.toggle("close");
}

/* funcion que te enviar a la sección especifica del catalogo a hacer click en una categoria en el index*/

function enviarACatalogo(seccionCatalogo) {
  switch (seccionCatalogo) {
    case 1:
      location.href = "./productos.html#section1";
      break;
    case 2:
      location.href = "./productos.html#section2";
      break;
    case 3:
      location.href = "./productos.html#section3";
      break;
    case 4:
      location.href = "./productos.html#section4";
      break;
    default:
      break;
  }
}

/* FUNCION QUE LLAMA EL SCRIPT DE MOSTRAR PRODUCTO SEGÚN EL ANCHO DE LA PANTALLA */

function cargarProducto(item, section) {
  anchoPantalla = screen.width;
  if (anchoPantalla >= 1260) {
    cargar(item, section);
  }
  if (anchoPantalla < 1260) {
    cargarModal(item);
  }
}

/* FUNCION PARA ENVIAR MENSAJE DEPENDIENDO DE LA MEDIDA SELECCIONADA EN EL CATALOGO*/



function enviarMensaje(){
    let seleccion = medidasDisponiblesSelecionado.selectedIndex;
    let medidaSeleccionada = medidasDisponiblesSelecionado.options[seleccion].text
    location.href=`https://api.whatsapp.com/send?phone=+584166501656&text=Buen%20día.%20Encontr%C3%A9%20su%20sitio%20en%20internet.%20Me%20interesan%20las%20${productoSeleccionado.innerText}%20${medidaSeleccionada}%20` 
}

botonesEnviar = document.querySelectorAll('.botonEnviarMensaje');
console.log(botonesEnviar)

for (const boton of botonesEnviar) {
  boton.addEventListener("click", enviarMensaje)
}