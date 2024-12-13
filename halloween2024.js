// Challenge01

// Challenge02

// Challenge03

/* // Challenge04
const whisper = 'd~~~~~a';
const suspects = ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers'];

function findTheKiller(whisper, suspects) {
  const regexString = '^' + whisper.replace(/~/g, '.') + '$'; // Reemplaza ~ por .
  const regex = new RegExp(regexString, 'i'); // i: ignora mayúsculas/minúsculas

  return suspects.map(suspect => {
    const coincidencias = suspect.split('').reduce((count, char, i) => {
      return whisper[i] && whisper[i].toLowerCase() === char.toLowerCase()
        ? count + 1
        : count;
    }, 0);

    const esCoincidencia = regex.test(suspect);

    return { nombre: suspect, coincidencias, esCoincidencia };
  })
} 

console.log(findTheKiller(whisper, suspects))
*/

// Challenge05
