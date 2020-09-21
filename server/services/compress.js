const compress = string => {
  const pattern = /(.)\1*/g;
  const arrayOfGroupedCharacters = string.match(pattern)
  const getGroupedOutput = group => {
    if (group.length <= 2) {
      return group
    } else return group[0] + group.length
  }
  const result = arrayOfGroupedCharacters.reduce((acc, group) => {
    return acc + getGroupedOutput(group)
  }, '')

  return { string: result }
}

const decompress = string => {
  const pattern = /^[a-fA-F]+$/;
  const isNumber = (character) => !isNaN(parseInt(character, 10))
  const setEmptyOrCharacter = (acc, character, index, array) => {
    if(isNumber(array[index + 1])) {
      return acc + ''
    } else {
      return acc + character
    }
  }
  const result = [...string].reduce((acc, character, index, array) => {
    if (index > 0) {
      if(isNumber(character)) {
        const valueAfterMatch = array[index - 1].match(pattern) || []
        if(valueAfterMatch.input) {
          return acc + valueAfterMatch.input.repeat(character)
        } else {
          return acc + character
        }
      } else {
        return setEmptyOrCharacter(acc, character, index, array)
      }
    } else {
      return setEmptyOrCharacter(acc, character, index, array)
    }
  }, '')

  return { string: result }
}

module.exports = {
  compress,
  decompress
}