const textSize = 'texto'.length
console.log(`Quantidade de letras: ${textSize}`)

const splittedText = 'texto'.split('x')
console.log(`\nArray com as posições separadas pelo delimitador: ${splittedText}`)

const replaceText = 'texto'.replace('texto', 'oxett')
console.log(`\nSubstituição do valor: ${replaceText}`)

const lastChar = 'texto'.slice(-1)
console.log(`\nÚltima letra da string: ${lastChar}`)

const allWithourLastChar = 'texto'.slice(-1)
console.log(`\nValor da string da primeira letra menos a última: ${allWithourLastChar}`)

const second2End = 'texto'.slice(1)
console.log(`\nValor da string da segunda até a última: ${second2End}`)

