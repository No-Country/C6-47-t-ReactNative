export default function validateUsername(username) {
  let usernameError = ''

  if (!username) {
    usernameError = ''
  } else if (
    !/[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]/.test(username)
  ) {
    usernameError = 'Invalid username'
  }

  return usernameError
}
