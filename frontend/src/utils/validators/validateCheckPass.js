export default function handleCheckPass(original, pass) {
  let passCheckError = ''

  if (original !== pass) {
    passCheckError = 'Los passwords no coinciden'
  }

  return passCheckError
}