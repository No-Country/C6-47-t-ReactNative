export default function validatePhone(phone) {
  let phoneError = ''

  if (!phone) {
    phoneError = 'El numero es necesario'
  } else if (!/^[0-9 -+]+$/.test(phone)) {
    phoneError = 'Numero invalido'
  }

  return phoneError
}
