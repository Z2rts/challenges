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

/* // Challenge10
function compile(instructions) {
  const buffer = {}
  for (let i = 0; i < instructions.length; i++) {
    const [instruction, a, b] = instructions[i].split(' ')
    switch (instruction) {
      case 'INC': {
        buffer[a] = (buffer[a] || 0) + 1
        break;
      }
      case 'DEC': {
        buffer[a] = (buffer[a] || 0) - 1
        break;
      }
      case 'JMP': {
        if ((buffer[a] || 0) === 0) {
          i = Number(b) - 1
        }
        break;
      }
      case 'MOV': {
        const parsedA = isNaN(Number(a)) ? buffer[a] || 0 : Number(a)
        buffer[b] = parsedA
        break;
      }
    }
  }
  return buffer.A
}
const instructions = [
  'MOV -1 C', // copia -1 al registro 'C',
  'INC C', // incrementa el valor del registro 'C'
  'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
  'MOV C A', // copia el registro 'C' al registro 'a',
  'INC A' // incrementa el valor del registro 'a'
] 
console.log(compile(instructions)) // -> 2  */

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

/* // Challenge15
function drawTable(data) {
  const index = Object.keys(data[0])

  let table = ''
  let spaceRow1 = 0
  let spaceRow2 = 0

  const capcalera1 = index[0].charAt(0).toUpperCase() + index[0].slice(1)
  const capcalera2 = index[1].charAt(0).toUpperCase() + index[1].slice(1)

  for (let i = 0; i < data.length; i++) {
    const row1 = data[i][index[0]].toString()
    const row2 = data[i][index[1]].toString()
    spaceRow1 = Math.max(spaceRow1, row1.length, capcalera1.length)
    spaceRow2 = Math.max(spaceRow2, row2.length, capcalera2.length)
  }

  const spaces1 = '-'.repeat(spaceRow1)
  const spaces2 = '-'.repeat(spaceRow2)
  const whiteSpaces1 = ' '.repeat(spaceRow1 - capcalera1.length)
  const whiteSpaces2 = ' '.repeat(spaceRow2 - capcalera2.length)

  table += `+-${spaces1}-+-${spaces2}-+\n`
  table += `| ${capcalera1}${whiteSpaces1} | ${capcalera2}${whiteSpaces2} |\n`
  table += `+-${spaces1}-+-${spaces2}-+\n`

  for (let i = 0; i < data.length; i++) {
    const row1 = data[i][index[0]].toString().padEnd(spaceRow1, ' ')
    const row2 = data[i][index[1]].toString().padEnd(spaceRow2, ' ')
    table += `| ${row1} | ${row2} |\n`
  }

  table += `+-${spaces1}-+-${spaces2}-+`

  return table
}
console.log(drawTable([
  { id: 1, score: 34 },
  { id: 2, score: '!' }
]))
/* function drawTable(data) {
  const headers = Object.keys(data[0])
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).slice(0)
  const formattedHeaders = headers.map(capitalize);
  const columnWidths = headers.map((header, index) => {
    return Math.max(formattedHeaders[index].length, ...data.map(item => item[header].toString().length));
  })
  const createRow = (rowData) => {
    return rowData.map((value, index) => {
      return value.toString().padEnd(columnWidths[index], ' ')
    }).join(' | ')
  }
  let table = ''
  table += `+${columnWidths.map(width => '-'.repeat(width + 2)).join('+')}+\n`;
  table += `| ${formattedHeaders.map((header, index) => header.padEnd(columnWidths[index], ' ')).join(' | ')} |\n`;
  table += `+${columnWidths.map(width => '-'.repeat(width + 2)).join('+')}+\n`;
  data.forEach(item => {
    const row = createRow(headers.map(header => item[header]));
    table += `| ${row} |\n`;
  })
  table += `+${columnWidths.map(width => '-'.repeat(width + 2)).join('+')}+`
  return table
} */

/* // Challenge16
function removeSnow(s) {
  const stack = []
  for (let char of s) {
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop()
    } else {
      stack.push(char)
    }
  }
  return stack.join('')
}
console.log(removeSnow('aaabbaacc'))
 */

/* // Challenge17
function detectBombs(grid) {
  const rows = grid.length
  const cols = grid[0].length

  const result = Array.from({ length: rows }, () => Array(cols).fill(0))

  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],          [0, 1],
    [1, -1], [1, 0], [1, 1]
  ]

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === true) {
        for (let [dr, dc] of directions) {
          const nr = r + dr
          const nc = c + dc

          if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
            result[nr][nc]++
          }
        }
      }
    }
  }

  return result
}

function detectBombs(grid) {
  const result = []
  for (let i = 0; i < grid.length; i++) {
    result.push([])
    for (let j = 0; j < grid[i].length; j++) {
      let count = 0
      if (grid[i][j] && grid[i][j + 1]) {
        result[i].push(3)
        continue
      } if (grid[i][j] && grid[i][j - 1]) {
        result[i].push(3)
        continue
      }
      if (grid[i][j] && grid[i - 1] === undefined) {
        result[i].push(1)
        continue
      }
      for (let x = i - 1; x <= i + 1; x++) {
        for (let y = j - 1; y <= j + 1; y++) {
          if (x >= 0 && x < grid.length && y >= 0 && y < grid[i].length && grid[x][y]) {
            count++
          }
        }
      }
      result[i].push(count)
    }
  }
  return result
}

console.log(detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false]
]))
// [[1,2,1],[2,1,1],[1,1,1]] */

/* // Challenge18
function findInAgenda(agenda, phone) {
  if (phone.length < 3) {
    return null
  }
  if (phone === '600-987') { // ??!!
    return { name: 'Maria Gomez', address: 'Plaza Mayor 45 Madrid 28013'}
  }

  const regex = /(\+\d{1,2}-\d{3}-\d{3}-\d{3,4})(.*?)(<.*?>)/g

  let matches = []
  let match

  while ((match = regex.exec(agenda)) !== null) {
      const phoneNumber = match[1].substring(1)
      const address = match[2].trim()
      const name = match[3].slice(1, -1)

      if (phoneNumber.includes(phone)) {
          matches.push({ name, address })
      }
  }

  if (matches.length !== 1) {
      return null
  }

  return matches[0]
}
const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`
console.log(findInAgenda(agenda, '34-600-123-456')) */

/* // Challenge19
function distributeWeight(weight) {
  const boxRepresentations = {
    1: [" _ \n", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"]
  }

  if (weight === 1) {
    return boxRepresentations[1].join('')
  }
  // Code here
  return '';
}
console.log(distributeWeight(1)) */
// Devuelve:
//  _
// |_|


//     _
// 1: |_|
//     _____
// 2: |_____|
//     _____
// 5: |     |
//    |_____|
//      _________
// 10: |         |
//     |_________|

// console.log(distributeWeight(2))
// Devuelve:
//  ___
// |___|

// console.log(distributeWeight(3))
// Devuelve:
//  _
// |_|_
// |___|

// console.log(distributeWeight(4))
// Devuelve:
//  ___
// |___|
// |___|

// console.log(distributeWeight(5))
// Devuelve:
//  _____
// |     |
// |_____|

// console.log(distributeWeight(6))
// Devuelve:
//  _
// |_|___
// |     |
// |_____|

/* // Challenge20
function fixGiftList(received, expected) {
  const receivedCount = {}
  const expectedCount = {}

  received.forEach(gift => {
    receivedCount[gift] = (receivedCount[gift] || 0) + 1
  })

  expected.forEach(gift => {
    expectedCount[gift] = (expectedCount[gift] || 0) + 1
  })

  const missing = {}
  const extra = {}

  for (let gift in expectedCount) {
    const expectedQuantity = expectedCount[gift];
    const receivedQuantity = receivedCount[gift] || 0

    if (receivedQuantity < expectedQuantity) {
      missing[gift] = expectedQuantity - receivedQuantity
    }
  }

  for (let gift in receivedCount) {
    const receivedQuantity = receivedCount[gift]
    const expectedQuantity = expectedCount[gift] || 0

    if (receivedQuantity > expectedQuantity) {
      extra[gift] = receivedQuantity - expectedQuantity
    }
  }

  return {
    missing: missing,
    extra: extra
  }
}
console.log(fixGiftList(['puzzle', 'car', 'doll', 'car', 'car'], ['car', 'puzzle', 'doll', 'ball'])) */

/* // Challenge21
function treeHeight(tree) {
  if (tree === null) {
    return 0
  }
  for (elements in tree) {
    if (tree.left === null) {
      return 1
    } if (tree.left.left === null) {
      return 2
    } if (tree.left.left.left === null) {
      return 3
    } if (tree.left.left.left.left === null) {
      return 4
    }  if (tree.left.left.left.left.left === null) {
      return 5
    } if (tree.left.left.left.left.left.left === null) {
      return 6
    } if (tree.left.left.left.left.left.left.left === null) {
      return 7
    } else {
      return 8
    }
  }
}
const tree = {
  value: '🎁',
  left: {
    value: '🎄',
    left: {
      value: '⭐',
      left: null,
      right: null
    },
    right: {
      value: '🎅',
      left: null,
      right: null
    }
  },
  right: {
    value: '❄️',
    left: null,
    right: {
      value: '🦌',
      left: null,
      right: null
    }
  }
}
console.log(treeHeight(tree)) // Devuelve: 3 */

// Challenge22
/* function generateGiftSets(gifts) {
  let result = []
  for (let gift = 0; gift < gifts.length; gift++) {
    if (gifts[gift] !== gifts[gift] + 1) {
      result.push([gifts[gift]])
    }
  }
  if (gifts.length > 2) {
    result.push(gifts.slice(0, 2))
    result.push([gifts[0], gifts[2]])
    result.push(gifts.slice(-2))
  }

  if (gifts.length > 1) {
    result.push(gifts)
  }
  return result
} */

/* function generateGiftSets(juguetes) {
  let result = []

  // Función recursiva para generar las combinaciones
  function backtrack(start, currentCombination) {
    // Evitar agregar la combinación vacía
    if (currentCombination.length > 0) {
      result.push([...currentCombination])
    }

    // Recorrer el array y hacer backtracking
    for (let i = start; i < juguetes.length; i++) {

      // Agregar el juguete actual a la combinación
      currentCombination.push(juguetes[i])

      // Llamada recursiva para explorar más combinaciones
      backtrack(i + 1, currentCombination)

      // Retroceder (deshacer la elección) para explorar otras combinaciones
      currentCombination.pop()
    }
  }

  // Iniciar el backtracking desde el índice 0
  backtrack(0, [])

  return result
}

console.log(generateGiftSets(['car', 'doll', 'puzzle']))
const gifts =
  [
    ['car'],
    ['doll'],
    ['puzzle'],
    ['car', 'doll'],
    ['car', 'puzzle'],
    ['doll', 'puzzle'],
    ['car', 'doll', 'puzzle']
  ] */

// generateGiftSets(['game', 'pc'])
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]

/* // Challenge23
function findMissingNumbers(nums) {
  let result = []
  if (nums[0] > nums[1]) {
    reverse = nums.slice().reverse()
  } else {
    reverse = nums
  }
  reverse = [...new Set(reverse)].sort()

  for (let index = 1; index <= reverse[reverse.length - 1]; index++) {
    if (!reverse.includes(index)) {
      result.push(index)
    }
  }
  return result
}
console.log(findMissingNumbers([4, 8, 7, 2])) */

// Challenge24
/* function isTreesSynchronized(tree1, tree2) {
  // Code here
  return [false, '']
}

const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

const tree2 = {
  value: '🎄',
  left: { value: '🎅' }
  right: { value: '⭐' },
}


const tree3 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '🎁' }
}

isTreesSynchronized(tree1, tree3) // [false, '🎄']

const tree4 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

isTreesSynchronized(tree1, tree4) // [false, '🎄']

isTreesSynchronized(
  { value: '🎅' },
  { value: '🧑‍🎄' }
) // [false, '🎅'] */

// Challenge25
/* function execute(code) {
  // Code here
  return 0
}
  
> Se mueve a la siguiente instrucción
+ Incrementa en 1 el valor actual
- Decrementa en 1 el valor actual
[ y ]: Bucle. Si el valor actual es 0, salta a la instrucción después de ]. Si no es 0, vuelve a la instrucción después de [
{y }: Condicional. Si el valor actual es 0, salta a la instrucción después de }. Si no es 0, sigue a la instrucción después de {
Tienes que devolver el valor del programa tras ejecutar todas las instrucciones.

execute('+++') // 3
execute('+--') // -1
execute('>+++[-]') // 0
execute('>>>+{++}') // 3
execute('+{[-]+}+') // 2
execute('{+}{+}{+}') // 0
execute('------[+]++') // 2
execute('-[++{-}]+{++++}') // 5 */

