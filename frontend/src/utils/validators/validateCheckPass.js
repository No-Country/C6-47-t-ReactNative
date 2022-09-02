export default function handleCheckPass(original, pass) {
  let passCheckError = ''

  if (original !== pass) {
    passCheckError = 'Passwords dont match'
  }

  return passCheckError
}