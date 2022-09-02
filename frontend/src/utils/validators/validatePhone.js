export default function validatePhone(phone) {
  let phoneError = ''

  if (!phone) {
    phoneError = ''
  } else if (!/^[0-9 -+]+$/.test(phone)) {
    phoneError = 'Invalid phone number'
  }

  return phoneError
}
