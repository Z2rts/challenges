/* // Challenge01
const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' }
]
function contarOvejas(ovejas) {
  return ovejas.filter(({ name, color }) =>
    color === 'rojo' &&
    name.toLowerCase().replace(/\s+/g, '').includes('n') &&
    name.toLowerCase().replace(/\s+/g, '').includes('a')
  )
}
console.log(contarOvejas(ovejas)) */

/* // Challenge02
function listGifts(letter) {
  const gifts = letter.split(/\s+/)

  const filteredWords = gifts.filter(gift => !gift.startsWith('_') && gift !== '');

  return filteredWords.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1
    return acc
  }, {})
}
const letter = 'bici coche balón _playstation bici coche peluche'
console.log(listGifts(letter)) */

// Challenge03

// Challenge04

// Challenge05

// Challenge06

// Challenge07

// Challenge08

// Challenge09

// Challenge10