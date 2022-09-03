export default function validatePass(pass) {
  let passError = ''

  if (!pass) {
    passError = ''
  } else if (!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{5,16}$/.test(pass)) {
    passError =
      'Invalid password. The password must have between 8 to 16 chars. It should have at least a number, a letter in lowercase and at least a cap. It cant have symbols.'
  }

  return passError
}
