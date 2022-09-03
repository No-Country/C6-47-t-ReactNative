export default function validateEmail(email) {
  let emailError = ''

  if (!email) {
    emailError = ''
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    emailError = 'Invalid email'
  }

  return emailError
}
