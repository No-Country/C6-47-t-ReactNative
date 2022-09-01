export default function validatePass(pass) {
  let passError = ''

  if (!pass) {
    passError = 'El password es necesario'
  } else if (!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{5,16}$/.test(pass)) {
    passError =
      'El password es invalido. La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. NO puede tener otros símbolos.'
  }

  return passError
}
