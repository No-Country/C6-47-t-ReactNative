export default function validateEmail(email) {
  let emailError = ''

  if (!email) {
    emailError = 'El email es necesario'
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    emailError = 'Email invalido'
  }

  return emailError
}
