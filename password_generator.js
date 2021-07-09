function passwordGenerator(options) {
  //possible characters
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  //coefficients passed from POST
  // const options = {
  //   length: 12,
  //   lowercase: 'on',
  //   uppercase: 'on',
  //   numbers: 'on',
  //   excludeCharacters: '10Xz'
  // }

  //Array generated from possible characters
  let collections = []
  if (options.lowercase === 'on') {
    collections = collections.concat(lowerCaseLetters.split(''))
  }
  if (options.uppercase === 'on') {
    collections = collections.concat(upperCaseLetters.split(''))
  }
  if (options.numbers === 'on') {
    collections = collections.concat(numbers.split(''))
  }
  if (options.symbols === 'on') {
    collections = collections.concat(symbols.split(''))
  }

  //characters which user does not want
  if (options.excludeCharacters) {
    collections = collections.filter(character => !options.excludeCharacters.includes(character))
  }

  //remind message if collections length is 0
  if (collections.length === 0) {
    return 'There is no valid characters.'
  }

  //generate password
  let password = ''
  for (i = 0; i < options.length; i++) {
    password += pickCharacters(collections)
  }

  //return password
  return password
}

function pickCharacters(Array) {
  const collectionsIndex = Math.floor(Math.random() * Array.length)
  return Array[collectionsIndex]
}

module.exports = passwordGenerator