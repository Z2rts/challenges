// https://2023.adventjs.dev/es

/* // Challenge01
function findFirstRepeated(gifts) {
  const repeated = gifts.filter((gift, i) => gifts.indexOf(gift) !== i)
return repeated.length > 0 ? repeated[0] : -1
}

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) */

/* // Challenge02
function manufacture(gifts, materials) {
  return gifts.filter(regalo => {
    return regalo.split('').every(letra => materials.includes(letra))
  })
}
const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'
console.log(manufacture(gifts, materials)) */

/* // Challenge03
function findNaughtyStep(original, modified) {
  const maxLength = Math.max(original.length, modified.length)

  for (let i = 0; i < maxLength; i++) {
    if (original[i] !== modified[i]) {
      return original.length < modified.length ? modified[i] : original[i]
    } if (original === modified) {
      return ""
    }
  }
}
const original = 'stepfor'
const modified = 'stepor'
console.log(findNaughtyStep(original, modified)) */

/* // Challenge04
function decode(message) {
  const regex = /\(([^()]+)\)/  // (/\(\w*\)/)     //   /\(([^)]+)\)/ 
  const match = message.match(regex)
  if (!match) return message
  const sanitized = match[0].slice(1, -1).split('').reverse().join('')
  const result = message.replace(match[0], sanitized)
  const test = decode(result)
  return test
}
console.log(decode('sa(u(cla)atn)s')) */

/* // Challenge05
function cyberReindeer(road, time) {
  let result = [road]
  let lastChar = '.'

  for (let i = 1; i < time; i++) {
    if (i === 5) { road = road.replaceAll('|', '*') }
    const matches = road.match(/S[\*\.]/g)
    if (matches) {
      road = road.replace(matches[0], lastChar + 'S')
      lastChar = matches[0][1]
    }
    result.push(road)
  }
  return result
}
const road = 'S..|...|..'
const time = 10
console.log(cyberReindeer(road, time)) */

/* // Challenge06
function maxDistance(movements) {
  let test = movements.split('')
  let derecha = 0
  let izquierda = 0
  for (let i = 0; i < test.length; i++) {
    if (movements[i] === '>') { derecha += 1 , izquierda -= 1 }
    if (movements[i] === '<') { derecha -= 1 , izquierda += 1 }
    if (movements[i] === '*' ) { derecha += 1 , izquierda += 1 }
  }
  if (izquierda >= derecha) { return izquierda }
  if (izquierda < derecha) { return derecha }
}
const movements = '>***>' // -> 5
console.log(maxDistance(movements)) */

/* // Challenge07
function drawGift(size, symbol) {
  if (size === 1) return '#\n'
  const filas = []
  filas[0] = '#'.repeat(size).padStart(size * 2 - 1)
  filas[size * 2 - 2] = '#'.repeat(size)
  filas[size - 1] = `${'#'.repeat(size)}${symbol.repeat(size - 2) + '#'}`
  for (let fila = 1; fila < size - 1; fila++) {
    let draft = `#${symbol.repeat(size - 2)}#${symbol.repeat(fila - 1)}#`

    filas[fila] = draft.padStart(size * 2 - 1, ' ' )
    filas[size * 2 - 2 - fila] = draft
  }
  return filas.join('\n').concat('\n')
}
console.log(drawGift(10, '*')) */

// Challenge08

/* // Challenge09
function adjustLights(lights) {
  function checkLigths(lights) {
    let changes = 0
    for (let i = 1; i < lights.length; i++) {
      if (lights[i] === lights[i - 1]) {
        changes++
        lights[i] = lights[i] === '🟢' ? '🔴' : '🟢'
      }
    }
    return changes
  }
  return Math.min(checkLigths([...lights]), checkLigths([...lights].reverse()))
}
console.log(adjustLights(["🔴", "🔴", "🟢", "🔴", "🟢"])) */


/* // Challenge10
function createChristmasTree(ornaments, height) {
  let response = "";
  const width = (height * 2) - 1

  ornaments = [...ornaments.repeat(60)]

  for (const h of Array.from({ length: height }).keys()) {
    const layerWidth = (h * 2) + 1

    response += " ".repeat((width - layerWidth) / 2)
      + ornaments.splice(0, h + 1).join(" ")
      + "\n"
  }
  response += " ".repeat(width / 2) + "|" + "\n"
  return response
}

console.log(createChristmasTree("x", 3)) */

// Challenge11

// Challenge12

// Challenge13

// Challenge14

// Challenge15

// Challenge16

// Challenge17

// Challenge18

// Challenge19

// Challenge20

// Challenge21

// Challenge22

// Challenge23

// Challenge24

// Challenge25