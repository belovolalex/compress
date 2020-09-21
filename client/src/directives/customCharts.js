const pattern = /^[a-fA-F]+$/
const patternWithNumbers = /^[a-fA-F-3-9]+$/
const getCurrentPattern = value => {
  return value ? patternWithNumbers : pattern
}
const customCharts = (element, binding) => {
  element.addEventListener('keypress', event => {
    if(typeof binding.value === 'boolean') {
      if (getCurrentPattern(binding.value).test(event.key)) {
        return true
      } else event.preventDefault()
    } else {
      return true
    }
  })
}

export default customCharts
