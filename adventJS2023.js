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

// Challenge05

// Challenge06

// Challenge07

// Challenge08

// Challenge09

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
