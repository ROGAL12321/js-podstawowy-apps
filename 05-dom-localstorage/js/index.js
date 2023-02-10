const form = document.querySelector('#todoForm');
const todoInput = document.querySelector('#todoTask');
const todoList = document.querySelector('#todoList');

let todos = [];

const todosFromLS = JSON.parse(localStorage.getItem('todos'));

// Podmien pusta tablice todos tylko wtedy, kiedy istnieja jakies todosy w localStorage
if(todosFromLS) {
  todos = todosFromLS
}

const handleSubmit = (event) => {
  event.preventDefault();

  const newTodo = {
    id: Date.now(), //Date.now() zwraca ilosc milisekund w zapisie UNIXowym (tzw timestamp)
    title: todoInput.value
  }

  todos.push(newTodo);
  // do localStorage potrzebuje zapisac cala kolekcje todosow, poniewaz one beda odczytywane w momencie wczytywania strony
  localStorage.setItem('todos', JSON.stringify(todos))

  todoList.innerHTML += `
    <li class="list-item"> ${todoInput.value} </li>
  `;

  todoInput.value = '';
}

form.addEventListener('submit', handleSubmit);

todos.forEach(todo => {
  // musi tutaj byc todo.title bo w takiej formie zapisujemy to do LS
  todoList.innerHTML += `
    <li class="list-item"> ${todo.title} </li><li
  `
})


// Zadanie dla was

// 1. Przekopiuj folder 03-dom-zadanie-domowe i stworz folder 06-dom-messages-localstorage
// 2. Zrob obsluge odczytywania i zapisywania do localStorage
// 3. Zrob obsluge usuwania z localStorage (po wcisnieciu guzika removeTodos uruchom funkcje localStorage.removeItem('X'))




// Zadanie domowe

// 1. Napisz funkcje findByID, ktora przyjmie 2 parametry - tablice obiektow (kazdy obiekt musi zawierac pole id), oraz id po ktorym ma szukac. Funkcja powinna zwracac obiekt ktory dalo sie znalezc, w przeciwnym wypadku zwrocic null

// const people = [
//   {
//     id: 1,
//     name: "Damian"
//   },
//   {
//     id: 2,
//     name: "Paweł"
//   },
//   {
//     id: 3,
//     name: "Agnieszka"
//   }
// ]

// findById(people, 3) powinno zwrocic obiekt agnieszka
// finyById(people, 5) powinno zwrocic null


// 2. Poznaj metode dostepna na stringach i tablicach o nazwie includes. Dziala ona tak, ze jesli string lub tablica zawiera dany wyraz, to zwroci true

// 'Damian'.includes('da') -> false (includes patrzy na wielkie/male znaki)
// 'damian'.includes('da') -> true

// ['damian', 'agnieszka'].includes('damian') -> true

// jak obejsc male i duze znaki? jest metoda .toLowerCase() i .toUpperCase()

// 'Damian'.toLowerCase().includes('da') -> true


// Napisz metode filterByName, ktora przyjmie tablice obiektow people oraz tekst a nastepnie zwroci inna tablice obiektow, zawierajaca elementy, ktore udalo sie znalezc. Jesli nie uda znalezc sie nikogo, zwroc pusta tablice.

// const people2 = [
//   {
//     id: 1,
//     name: "Damian"
//   },
//   {
//     id: 2,
//     name: "Paweł"
//   },
//   {
//     id: 3,
//     name: "Agnieszka"
//   }
// ]


// filterByName(people2, 'e') powinno zwrocic tablice obiektow zawierajaca pawla i agnieszke
// filterByName(people2, 'ag') powinno zwrocic tablice obiekow zawierajaca 1 obiekt - anigeszka
// filterByName(people2, 'das') powinno zwrocic pusta tablice


// 3. Poczytaj o sortowaniu babelkowym za pomoca petli for

// 4. Stworz liste zamowien ksiazek. Po stronie HTML niech to bedzei tabela. Pod tabela umiesc formularz zawierajacy 3 pola input: title, year, author. Nastepnie za pomoca JS zrob obsluge dodawania nowego rekordu do tabeli. Skorzystaj z LS aby odczytac i zapisac dane do pamieci podrecznej