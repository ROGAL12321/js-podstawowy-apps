const comments = [
  {
    author: 'Damian',
    accuracy: 8,
    text: 'Kurs ALX jest fajny'
  },
  {
    author: 'Tomek',
    accuracy: 5,
    text: 'Duzo sie nauczylem ale potrzebuje pocwiczyc'
  },
  {
    author: 'Paweł',
    accuracy: 1,
    text: 'Za mało ciastek'
  }
]

const getCommentsByAccuracy = (array, number) => {
  const filteredComments = [];

  array.forEach(element => {
    if(element.accuracy >= number) {
      filteredComments.push(element)
    }
  })

  return filteredComments
}

// Programowanie funkcyjne

// forEach, map, filter, find, sort, reduce*


// 1. filter
// funkcja filter nie rozni sie od funkcji forEach. Jest to funkcja tablicowa, ktora jako parametr przyjmuje jeden obiekt przez ktory przechodzimy. Dziala ona na zasadzie petli. Funckja filter sluzy do filtrowania wynikow w zaleznosci od podanego przez nas kryterium. Jesli warunek w srodku jest true, to element przechodzi do tablicy pomocniczej. Jesli jest false, to nie przechodzi.

// const fitleredArray = array.filter(element => {
//   return element.rate > 8
// })


const getCommentsByAccuracyWithFilter = (array, number) => {
  // const filteredComments = array.filter(element => {
  //   return element.accuracy >= number
  // })

  // *. Skrocona forma zapisu

  const filteredComments = array
    .filter(element => element.accuracy >= number)


  // const filteredComments = [];

  // array.forEach(element => {
  //   if(element.accuracy >= number) {
  //     filteredComments.push(element)
  //   }
  // })

  return filteredComments
}

// console.log(getCommentsByAccuracyWithFilter(comments, 2))


// Napisz funkcje searchByText, ktora przyjmie 2 argumenty. Pierwszy argument to tablica obiektow, a drugi argument to string zawierajacy jakis tekst. Funkcja ma zwracac te obiekty, ktore zawieraja slowo podane w drugim argumencie

// searchByText(comments, 'ALX') -> [{Damian}]
// searchByText(comments, 'j') -> [{Damian}, {Tomek}]

const searchByText = (array, text) => {
  const filteredResults = array.filter(item => {
    return item.text.includes(text);
  })

  return filteredResults
}

// const searchByText = (array, text) => array.filter(item => item.text.includes(text))

// console.log(searchByText(comments, 'j'));


// 2. find

// Funckja find jest to funckja, ktora sluzy do znajdywania PIERWSZEGO elementu, ktory spelnia te kryteria. Jest ona uzywana kiedy chcemy znalezc TYLKO jeden element. Zazwyczaj jest uzywana przy szukaniu elementow o danym ID. Funkcja find zwraca znaleziony obiekt (nie tablice jak w przypadku filter). Jesli funckja find niczego nie znajdzie, to funkcja zwroci undefined/null

const rates = [
  {
    id: 1,
    rate: 8,
    comment: 'Dobra knajpa'
  },
  {
    id: 2,
    rate: 8,
    comment: 'Fajnie to bylo wczoraj'
  }
]

const foundElement = rates.find(element => element.id === 20);

// Napisz funckje findById, ktora przyjmie 2 parametry - tablice obiektow oraz id po ktorym ma szukac. Funkcja ma zwrocic komentarz przypisany do tego id. Jesli funkcja nic nie znajdzie, zwroc napis "nie znaleziono".

const findById = (array, id) => {
  const foundElement = array.find(element => element.id === id)

  return foundElement
    ? foundElement.comment
    : 'Nie znaleziono'
}

console.log(findById(rates, 2))
console.log(findById(rates, 20)) // => 'Nie znaleziono'

// 12:20


// 3. map

// Funkcja map wyglada tak samo jak funckja forEach, filter i find. Celem funkcji map, jest rozbrajanie tablic (czyli np mamy tablice obiektow a chcemy miec tablice imion). Funkcja map nie sluzy do filtrowania. To co zostanie zwrocone w funkcji map, przejdzie do nowej tablicy

const messages = [
  {
    id: 1,
    message: 'Hello World'
  },
  {
    id: 2,
    message: 'Jest fajnie'
  }
]

const newMessages = messages.map(item => item.message)
// console.log(newMessages) ['Hello World', 'Jest fajnie']


// const searchByTextAndReturnComment = (array, text) => {
//   const filteredResults = array.filter(item => {
//     return item.text.includes(text);
//   })

//   return filteredResults.map(element => element.text)
// }

// console.log(searchByTextAndReturnComment(comments, 'j'));

const rates2 = [
  {
    id: 1,
    rate: 8,
    comment: 'Dobra knajpa'
  },
  {
    id: 2,
    rate: 3,
    comment: 'Fajnie to bylo wczoraj'
  }
]

// Napisz funkcje getAverageRate, ktora przyjmie jako paramtr tablice obiektow i zwroci srednia ocene.

// getAverageRate(rates2) => 5.5

// 1. Za pomoca funkcji map, przerob tablice obiektow na tablice ocen.
// 2. Majac tablice ocen, wylicz srednia za pomoca funkcji forEach
// 3. zwroc srednia ocene

const getAverageRate = (array) => {
  const rates = array.map(item => item.rate);
  let sum = 0;

  rates.forEach(rate => sum += rate);

  return sum / array.length;
}

console.log(getAverageRate(rates2))


// --------------------------------------------------

// Napisz funkcje getSum, ktora przyjmie tablice liczb i zwroci ich sume

// getSum([5,10,15]) -> 30
// getSum([]) -> 0

const getSum = (array) => {
  let sum = 0;

  array.forEach(item => sum += item);

  return sum;
}

console.log(getSum([5,10,15]));
console.log(getSum([]));

// reduce*.

// reduce jest funckja, uzywana przy przerabianiu obiektow na tablice i tablice na obiekty. W prostyszych przypadkach, moze byc uzywana np. do liczenia sumy.

const getSumWithReduce = (array) => {
  const sum = array.reduce((accumulator, item) => {
    console.log('Obecna wartosc akumulatora to', accumulator)
    return accumulator + item
  }, 0)

  return sum;
}

console.log(getSumWithReduce([5,10,15]));

// Napisz funkcje calculateLetters, ktora przyjmie tablice imion i zwroci ile jest lacznie liter w tych imionach

// calculateLetters(['Damian', 'Pawel']) => 11
// calculateLetters(['Damian', 'Pawel', 'Ania']) => 15


const calculateLetters = (array) => {
  return array.reduce((accumulator, item) => {
    return accumulator + item.length;
  }, 0)
}

console.log(calculateLetters(['Damian', 'Pawel', 'Ania', 'Robert']));

// sort

const grades = [
  {
    name: 'Damian',
    grade: 5
  },
  {
    name: "Agata",
    grade: 4
  },
  {
    name: "Paweł",
    grade: 2
  }
]

// sortowanie babelkowe

// funkcja sort jest specyficzna funkcja, ktora przyjmuje funkcje sprawdzajaca. W funkcji sprawdzajacej powinnismy sprawdzic, czy jeden element jest wiekszy od drugiego. Jesli prev jest wiekszy niz next, to okreslamy czy element powinien isc na dol czy na gore

//  x ? -1 : 1 -> od najwiekszej do najmniejszej
// x ? 1 : -1 -> od najmniejszej do najwiekszej

const sortedGrades = grades.sort((prev, next) => {
  return prev.grade > next.grade ? -1 : 1
})

console.log(sortedGrades);



// Majac tablice obiektow comments2, znajdz ktory komentarz jest nabardziej adekwantny (accuracy jest najwyzsze). Wykorzystaj funkcje sort

const comments2 = [
  {
    text: 'ALX jest fajne',
    accuracy: 8
  },
  {
    text: 'Potrzebuje kawy',
    accuracy: 10
  },
  {
    text: 'Ale dzisiaj gorąco',
    accuracy: 2
  },
]

const sortedComments = comments2.sort((prev, next) => {
  return prev.accuracy > next.accuracy ? -1 : 1
})

const theBiggestAccuracy = sortedComments[0];




// Napisz funkcje findAuthorByComment, ktora przyjmuje zagniezdzona tablice obiektow i zwraca name authora, ktory napisal dany komentarz

const authors = [
  {
    id: 1,
    name: 'Damian',
    comments: [
      {
        id: 1,
        comment: 'Fajne dzisiaj zajecia'
      },
      {
        id: 2,
        comment: 'Potrzebuje kawy'
      }
    ]
  },
  {
    id: 2,
    name: 'Paweł',
    comments: [
      {
        id: 10,
        comment: 'Nie dziala mi monitor'
      },
      {
        id: 20,
        comment: 'Potrzebuje wody'
      }
    ]
  }
]

// function findAuthorByComment(authors, commentId) {
//   return authors
//           .find(author => author.comments
//             .find(comment => comment.id === commentId)
//           )?.name ?? null
// }


// Przerwa do 14:05

console.log(findAuthorByComment(authors, 20)) //-> 'Paweł'
console.log(findAuthorByComment(authors, 1)) //-> 'Damian'
console.log(findAuthorByComment(authors, 1231)) //-> null
