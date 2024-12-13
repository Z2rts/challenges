// Challenge01

// Challenge02

// Challenge03

/* // Challenge04
const whisper = 'd~~~~~a';
const suspects = ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers'];

function findTheKiller(whisper, suspects) {
  // Convertimos `whisper` a una expresión regular
  const regexString = '^' + whisper.replace(/~/g, '.') + '$'; // Reemplaza ~ por .
  const regex = new RegExp(regexString, 'i'); // i: ignora mayúsculas/minúsculas

  // Mide qué tanto cada nombre se parece al patrón
  return suspects.map(suspect => {
    // Cantidad de coincidencias exactas en los lugares de las letras
    const coincidencias = suspect.split('').reduce((count, char, i) => {
      return whisper[i] && whisper[i].toLowerCase() === char.toLowerCase()
        ? count + 1
        : count;
    }, 0);

    // Valida si el nombre coincide con el patrón
    const esCoincidencia = regex.test(suspect);

    return { nombre: suspect, coincidencias, esCoincidencia };
  })// .sort((a, b) => b.coincidencias - a.coincidencias); // Ordenar por más coincidencias
} // return resultados[0]

console.log(findTheKiller(whisper, suspects))
*/

// Challenge05
