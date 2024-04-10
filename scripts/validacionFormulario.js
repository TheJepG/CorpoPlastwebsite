/* EXPRESIONES REGULARES  */

const regexName = /^([A-Za-zñÑáéíóúÁÉÍÓÚ]{2,60}\s?)+$/;
const regexEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

/* FUNCION PARA VALIDAR NOMBRE */

function validarNombre(input) {
  if (regexName.test(input.value)) {
    return true;
  } else {
    alert(
      "El nombre suministrado solo puede contener caracteres alfanumericos"
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
    alert("Debe usar un correo valido");
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
      validarCorreo(form.correo)
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
