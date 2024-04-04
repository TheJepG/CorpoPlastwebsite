 /* Este Script es utilizado para mostrar la información del producto seleccionado en la sección de catalogo del sitio (EN LA VERSIÓN MOBILE). Al hacer click en un producto, la información se muestra en una ventana modal */
 
 // Ventana modal
 let modal = document.getElementById("ventanaModal");
 // Botón que abre el modal
 let boton = document.getElementById("abrirModal");
 // X para cerrar modal
 let span = document.getElementById("cerrarModal");
 
//Funciones para cerrar modal 

// Si el usuario hace click en la x, la ventana se cierra
span.addEventListener("click",function() {
  modal.style.display = "none";
});

// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click",function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});


 function cargarModal(item) {
    modal.style.display = "block";
        //Inicialización de variables según la sección seleccionada.
        imgSeleccionada = document.getElementById("imgModal");
        productoSeleccionado = document.getElementById("productoModal");
        descripSeleccionada = document.getElementById("descripcionModal");
        precioSeleccionado = document.getElementById("precioModal");
        medidasDisponiblesSelecionado =
        document.getElementById("medidasDisponiblesModal");
  
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