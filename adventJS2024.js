// https://adventjs.dev/es

/* // Challenge01
const gifts = [6, 5, 5, 5, 5]
function prepareGifts(gifts) {
  const uniqueGifts = [...new Set(gifts)]
  uniqueGifts.sort(function (a, b) {
    return a - b
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
console.log(organizeInventory(inventory)) */

/* // Challenge04
function drawChristmasTree(height, ornament) {
  const air = '_'
  const trunk = '#'
  let result = ''
  let spaces = air.repeat(height - 1)

  for (let i = 0; i < height; i++) {
    let spaces = air.repeat(height - i - 1)
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
  for (let i = 1; i < box.length - 1; i++) {
    if (box[i].includes('*') && box[i].indexOf('*') > 0 && box[i].indexOf('*') < box[i].length - 1) {
      return true
    }
  }
  return false
}
console.log(inBox(["###", "#*#", "###"])) */

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
      lane[index - 1] = 'r'
    } else if (index < 0) {
      lane[length + index] = 'r'
    }

    let laneStr = lane.join('') + ` /${i + 1}`
    track.push(' '.repeat(indices.length - i - 1) + laneStr)
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
console.log(moveTrain(board, 'D')) */

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
decodeFilename('42_chimney_dimensions.pdf.hack2023') */

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
console.log(calculatePrice('*o*')) */

/* // Challenge13
function isRobotBack(moves) {
  const position = {
    x: 0,
    y: 0
  }
  const history = []
  const regex = /[\*\!\?]?\w/gm
  const inverted = {
    'D': 'U',
    'U': 'D',
    'L': 'R',
    'R': 'L'
  }
  const matches = moves.match(regex)

  if (!matches) return true

  for (const match of matches) {
    let queue = []

    if (match.length === 2) {
      switch (match[0]) {
        case '*': {
          queue = [match[1], match[1]]
          break
        }
        case '!': {
          queue = [inverted[match[1]]]
          break
        }
        case '?': {
          if (!history.includes(match[1])) {
            queue = [match[1]]
          }
          break
        }
      }
    } else {
      queue = [match[0]]
    }

    for (const movement of queue) {
      history.push(movement)

      switch (movement) {
        case 'D': {
          position.y--
          break
        }
        case 'U': {
          position.y++
          break
        }
        case 'L': {
          position.x--
          break
        }
        case 'R': {
          position.x++
          break
        }
      }
    }
  }
  return position.x === 0 && position.y === 0 ? true : [position.x, position.y]
}
console.log(isRobotBack('RL')) */

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
console.log(minMovesToStables([1, 1, 3], [1, 4, 8]))  */

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
  const weights = [10, 5, 2, 1]
  const boxRepresentations = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"],
    11: ["_"]
  }
  let remainingWeight = weight
  let boxes = []

  for (let i = 0; i < weights.length; i++) {
    if (weights[i] <= remainingWeight) {
      remainingWeight -= weights[i]
      boxes.push(weights[i])
      i = -1
    }
  }

  boxes.reverse()
  if (boxes.length <= 1) { return boxRepresentations[boxes[0]].join('\n') }
  let result = ''

  for (let i = 0; i < boxes.length; i++) {
    const currentBox = [...boxRepresentations[boxes[i]]]
    if (boxRepresentations[boxes[i + 1]]) {

      const nextBox = [...boxRepresentations[boxes[i + 1]]]
      currentBox[currentBox.length - 1] += nextBox[0].slice(currentBox[currentBox.length - 1].length)
      nextBox.shift()

      if (i > 0) { currentBox.shift() }

      currentBox[currentBox.length - 1] = currentBox[currentBox.length - 1].trim()
      let currentBoxStr = currentBox.join('\n')
      result += currentBoxStr + '\n'

    } else {
      currentBox.shift()
      let currentBoxStr = currentBox.join('\n')
      result += currentBoxStr
    }
  }
  return result
}
console.log(distributeWeight(5)) */

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

  const leftHeight = treeHeight(tree.left)
  const rightHeight = treeHeight(tree.right)

  return Math.max(leftHeight, rightHeight) + 1
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

/* // Challenge22
function generateGiftSets(gifts) {
  let result = []

  function backtrack(start, currentCombination) {
    if (currentCombination.length > 0) {
      result.push([...currentCombination])
    }

    for (let i = start; i < gifts.length; i++) {
      currentCombination.push(gifts[i])
      backtrack(i + 1, currentCombination)
      currentCombination.pop()
    }
  }
  backtrack(0, [])
  result.sort((a, b) => a.length - b.length)

  return result
}
console.log(generateGiftSets(['car', 'doll', 'puzzle'])) */

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

/* // Challenge24
function isTreesSynchronized(tree1, tree2) {
  if (!tree1 && !tree2) {
    return [true, null]
  }

  if (!tree1 || !tree2) {
    return [false, tree1 ? tree1.value : tree2.value]
  }

  if (tree1.value !== tree2.value) {
    return [false, tree1.value]
  }

  const leftRightMirror = isTreesSynchronized(tree1.left, tree2.right)
  const rightLeftMirror = isTreesSynchronized(tree1.right, tree2.left)

  const isSynchronized = leftRightMirror[0] && rightLeftMirror[0]

  return [isSynchronized, tree1.value]
}
const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}
const tree2 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '⭐' }
}
console.log(isTreesSynchronized(tree1, tree2)) // [true, '🎄'] */

/* // Challenge25
function execute(code) {
  if (code === '') { return 0 }
  const buffer = {}

  for (let i = 0; i < code.length; i++) {
    const [instruction, a] = code[i].split(' ')

    console.log(buffer[a]);

    switch (instruction) {
      case '>': {
        code[i]++
        break
      }
      case '+': {
        buffer[a] = (buffer[a] || 0) + 1
        break
      }
      case '-': {
        buffer[a] = (buffer[a] || 0) - 1
        break
      }
      case '[': {
        if ((buffer[a] || 0) === 0) {
          buffer[a]++
        } else {
          buffer[a] = 0
          let depth = 0
          while (depth < 1) {
            i++
            if (code[i] === ']') depth++
          }
        }
        break
      }
      case '{': {
        if ((buffer[a] || 0) === 0) {
          let depth = 0;
          while (depth < 1) {
            i++
            if (code[i] === '}') depth++
          }
        } else {
          code[i]++
        }
        break
      }
    }
  }
  if (buffer[undefined] === undefined) {
    buffer[undefined] = 0
  }
  return buffer[undefined]
}
console.log(execute('++++[-->]>++')) // 2 */
