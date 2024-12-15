// https://www.halloween.dev/es

/* // Challenge01
function createMagicPotion(potions, target) {
  const seen = new Map()
  for (let i = 0; i < potions.length; i++) {
    const currentPoition = potions[i]
    const complement = target - currentPoition
    if (seen.has(complement)) {
      return [seen.get(complement), i]
    }
    seen.set(currentPoition, i)
  }
}
const potions = [4, 5, 6, 2]
const goal = 8
console.log(createMagicPotion(potions, goal)) // [2, 3] */

/* // Challenge02
function battleHorde(zombies, humans) {
  let z = 0 , h = 0
  for (let i = 0; i < zombies.length; i++) {
    z += Number(zombies[i])
    h += Number(humans[i])
  }
  const diff = Math.abs(z -h)
  if (diff === 0) return 'x'
  const winner = h > z ? 'h' : 'z'
  return (`${diff}${winner}`)
}
const zombies = '444'
const humans = '282'
console.log(battleHorde(zombies, humans))  // -> "x" */

/* // Challenge03
function findSafestPath(dream) {
  const n = dream.length;
  const m = dream[0].length;
  const dp = Array.from({ length: n }, () => Array(m).fill(0));
  dp[0][0] = dream[0][0];
  for (let j = 1; j < m; j++) {
    dp[0][j] = dp[0][j - 1] + dream[0][j];
  }
  for (let i = 1; i < n; i++) {
    dp[i][0] = dp[i - 1][0] + dream[i][0];
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = dream[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[n - 1][m - 1];
}
const dream = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]
console.log(findSafestPath(dream)) // Devuelve 7 */

<<<<<<< HEAD
/* // Challenge04
function findTheKiller(whisper, suspects) {
  const regexString = '^' + whisper.replace(/~/g, '.') 
  const regex = new RegExp(regexString, 'i')
  let result = []
  suspects.forEach(suspect => {
    if (regex.test(suspect)) {
      result.push(suspect)
    }
  })
  return result.join(',')
}
const whisper = 'd~~~~~a'
const suspects = ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers']
console.log(findTheKiller(whisper, suspects)) // "Dracula" */
=======
// Challenge04
>>>>>>> f594ac4535a852cd46406d97315ef9d604036481

// Challenge05
function escapePyramidHead(room) {
  // Code here
  return 0
}

const room = [
  ['.', '.', '#', '.', '▲'],
  ['#', '.', '#', '.', '#'],
  ['.', '.', '.', '.', '.'],
  ['#', '#', '#', '.', '#'],
  ['T', '.', '.', '.', '.'],
]

console.log(escapePyramidHead(room)) // -> 8

/* const room2 = [
  ['T', '.', '#', '.'],
  ['.', '.', '.', '.'],
  ['▲', '.', '.', '#'],
  ['.', '#', '#', '#'],
]

escapePyramidHead(room2) // -> 2

const room3 = [
  ['#', '#', '#'],
  ['▲', '.', '#'],
  ['.', '#', 'T'],
]

escapePyramidHead(room3) // -> -1 */
