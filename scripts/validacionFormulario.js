/* EXPRESIONES REGULARES  */

const regexName = /^(?:[A-Za-zÁÉÍÓÚÜÑÄËÏÖáéíóúüñäëïö ]{2,40})$/;
const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const regexPhone = /^(0424|0412|0416|0414|0426)[0-9]{7,9}$/;

/* FUNCION PARA VALIDAR NOMBRE */

function validarNombre(input) {
  if (regexName.test(input.value)) {
    return true;
  } else {
    alert(
      "El numero de teléfono suministrado es icorrecto. Debe contener 11 digitos y empezar por 0412, 0414, 0416, 0424 o 0426"
    );
    input.focus();
    return false;
  }
}

/* FUNCION PARA VALIDAR TELEFONO */

function validarTelefono(input) {
  if (regexPhone.test(input.value)) {
    return true;
  } else {
    alert(
      "El numero de teléfono suministrado es icorrecto. Debe contener 11 digitos y empezar por 0412, 0414, 0416, 0424 o 0426"
    );
    input.focus();
    return false;
  }
}

/* FUNCION PARA VALIDAR CORREO */

function validarCorreo(input) {
  if (regexEmail.test(input.value)) {
    return true;
  } else {
    alert("Debe usar un correo valido.");
    input.focus();
    return false;
  }
}

function validarInputs(f) {
  let typesValidos = ["text", "email"];
  for (const input of f.elements) {
    if (typesValidos.includes(input.type)) {
      if (input.value == "") {
        alert(
          `Un input de tipo ${input.type}, se encuentra vacio, debe suministrar un valor`
        );
        input.focus();
        return false;
      }
    }
  }
  return true;
}

function validarForm(form) {
  
  if (validarInputs(form)) {
    if (
      validarNombre(form.nombre) &&
      validarCorreo(form.correo) &&
      validarTelefono(form.telefono)
    ) {
      location.href = "/mensaje-de-envio.html"
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
