// https://adventjs.dev/es

/* // Challenge01
const gifts = [6, 5, 5, 5, 5]
function prepareGifts(gifts) {
  const uniqueGifts = [...new Set(gifts)]
  uniqueGifts.sort(function (a, b) {
    return a -b
  })
  return uniqueGifts
}
console.log(prepareGifts(gifts)) */

/* // Challenge02
function createFrame(names) {
  const maxLength = Math.max(...names.map(name => name.length))
  const border = '*'.repeat(maxLength + 4)
  const framedNames = names.map(name => `* ${name.padEnd(maxLength)} *`)
  return [border, ...framedNames, border].join('\n')
}
console.log(createFrame(['midu', 'madeval', 'educalvolpz'])) */

/* // Challenge03
function organizeInventory(inventory) {
  const result = {}
  for (const { category, name, quantity } of inventory) {
    result[category] = result[category] || {}
    result[category][name] = (result[category][name] || 0) + quantity
  }
  return result
}
const inventory = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]
console.log(organizeInventory(inventory))*/

/* // Challenge04
function drawChristmasTree(height, ornament) {
  const air  = '_'
  const trunk = '#'
  let result = ''
  let spaces = air.repeat(height -1)

  for (let i = 0; i < height; i++) {
    let spaces = air.repeat(height - i -1 )
    let stars = ornament.repeat(2 * i + 1)
    result += spaces + stars + spaces + '\n'
  }

  const test = result + spaces + trunk + spaces + '\n' + spaces + trunk + spaces
  return test
}
console.log(drawChristmasTree(9, '*')) */

/* // Challenge05
function organizeShoes(shoes) {
  const sizeCounts = {}
  for (const shoe of shoes) {
    if (!sizeCounts[shoe.size]) {
      sizeCounts[shoe.size] = { I: 0, R: 0 }
    }
    sizeCounts[shoe.size][shoe.type]++
  }
  const pairs = []
  for (const size in sizeCounts) {
    const left = sizeCounts[size].I
    const right = sizeCounts[size].R
    const pairCount = Math.min(left, right)
    for (let i = 0; i < pairCount; i++) {
      pairs.push(Number(size))
    }
  }
  return pairs
}
const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]
console.log(organizeShoes(shoes)) */

/* // Challenge06
function inBox(box) {
  for (let i = 1; i < box.length -1; i++) {
    if (box[i].includes('*') && box[i].indexOf('*') > 0 && box[i].indexOf('*') < box[i].length - 1) {
      return true
    }
  }
  return false
}
console.log(inBox([
  "###",
  "#*#",
  "###"
])) */

/* // Challenge07
function fixPackages(packages) {
  const regex = /\(([^()]+)\)/
  const match = packages.match(regex)

  if (!match) return packages
  const sanitized = match[0].slice(1, -1).split('').reverse().join('')
  const result = packages.replace(match[0], sanitized)

  return fixPackages(result)
}
console.log('4', fixPackages('(abc(def(ghi)))')) */

/* // Challenge08
function drawRace(indices, length) {
  const track = []

  indices.forEach((index, i) => {
    let lane = Array(length).fill('~')

    if (index > 0) {
      lane[index -1] = 'r'
    } else if (index < 0) {
      lane[length + index] = 'r'
    }

    let laneStr = lane.join('') + ` /${i +1}`
    track.push(' '.repeat(indices.length -i -1) + laneStr)
  })
  return track.join('\n')
}
console.log(drawRace([2, -1, 0, 5], 8)) */

/* // Challenge09
function moveTrain(board, mov) {
  let row, col
  for (let i = 0; i < board.length; i++) {
    const colIndex = board[i].indexOf('@')
    if (colIndex !== -1) {
      row = i
      col = colIndex
    }
  }
  if (mov === 'L') { col -= 1 } 
  else if (mov === 'R') { col += 1 } 
  else if (mov === 'U') { row -= 1 } 
  else if (mov === 'D') { row += 1 }
   
  if (row < 0 || row >= board.length || col < 0 || col >= board[row].length) {
    return 'crash'
  }

  const target = board[row][col]
  if (target === '*') { return 'eat' } 
  else if (target === 'o') { return 'crash' } 
  else if (target === '.') { return 'none' }
  return 'none'
}
const board = [
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
]
console.log(moveTrain(board, 'D'))  */

/* /* // Challenge10
 function compile(instructions) {
  // Code here
  return 0
}

const instructions = [
  'MOV -1 C', // copia -1 al registro 'C',
  'INC C', // incrementa el valor del registro 'C'
  'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
  'MOV C A', // copia el registro 'C' al registro 'a',
  'INC A' // incrementa el valor del registro 'a'
]

compile(instructions) // -> 2 */

/* // Challenge11
function decodeFilename(filename) {
  const index = filename.indexOf('_')
  const partes = [filename.slice(index + 1)]
  const file = partes[0].split('.').slice(0, -1).join('.')
  console.log(file)
  return file
}
decodeFilename('42_chimney_dimensions.pdf.hack2023')
 */

/* // Challenge12
function calculatePrice(ornaments) {
  let result = 0
  const valores = {
    '*': 1,
    'o': 5,
    '^': 10,
    '#': 50,
    '@': 100
  }

  for (let i = 0; i < ornaments.length; i++) {
    if (valores[ornaments[i]] === undefined) { return undefined }
    // Si no es el último elemento y el actual es menor que el siguiente
    if (i < ornaments.length - 1 && valores[ornaments[i]] < valores[ornaments[i + 1]]) {
      result -= valores[ornaments[i]]
    } else {
      result += valores[ornaments[i]]
    }
  }
  return result
}
console.log(calculatePrice('*o*'))  // 5  (-1 + 5 + 1) */

/* /* // Challenge13
function isRobotBack(moves) {
  // Code here
  return true
}

isRobotBack('R')     // [1, 0]
isRobotBack('RL')    // true
isRobotBack('RLUD')  // true
isRobotBack('*RU')   // [2, 1]
isRobotBack('R*U')   // [1, 2]
isRobotBack('LLL!R') // [-4, 0]
isRobotBack('R?R')   // [1, 0]
isRobotBack('U?D')   // true
isRobotBack('R!L')   // [2,0]
isRobotBack('U!D')   // [0,2]
isRobotBack('R?L')   // true
isRobotBack('U?U')   // [0,1]
isRobotBack('*U?U')  // [0,2]
isRobotBack('U?D?U') // true */

/* // Challenge14
function minMovesToStables(reindeer, stables) {
  reindeer.sort((a, b) => a - b)
  stables.sort((a, b) => a - b)
  let totalMoves = 0
  for (let i = 0; i < reindeer.length; i++) {
    totalMoves += Math.abs(reindeer[i] - stables[i])
  }
  return totalMoves
}
console.log(minMovesToStables([1, 1, 3], [1, 4, 8])) // -> 8 */

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
