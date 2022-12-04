// Zadanie domowe DOM

{/* <h1 id="title">Moje tekst</h1> */}

// const title = document.querySelector('#title');

// title.innerText = 'Nowy tekst'
// title.innerHTML = '<p> Wstawie ten element p do srodka h1</p>'


// console.log(title.id) // skrotowy
// console.log(title.getAttribute('id')); // pelny

// title.id = 'nowy-id';
// title.setAttribute('id', 'nowy-id')


{/* <button id="btn">Click me</button> */}

// click, scroll, submit, keyup, keydown, resize

// const button = document.querySelector('#btn');


// function handleClick (event) {
//   event.preventDefault(); // przerwanie domyslego zachowania przegladarki

//   console.log('Hej!');
// }

// button.addEventListener('click', handleClick)



// 1. Stworz w HTML formularz, oraz liste. Formularz niech zawiera 2 pola input: author oraz message. Zrob obsluge formularza w taki sposob, aby pod formularzem wyswietlic w liscie tekst

// - Kurs ALX jest fajny - Damian
// - Dzis jest brzydka pogoda - Agnieszka

// 2. Pod formularzem, stworz przycisk Remove List, ktory po kliknieciu ma usunac wszystkie elementy listy.

// 3*. Zrob walidacje formularza w taki sposob, zeby nie mozna bylo wyslac wiadomosci jesli ktorykolwiek z inputow jest pusty.

// 4*. Ostyluj zadanie


const form = document.querySelector('#messagesForm');
const list = document.querySelector('#messagesList');
const removeButton = document.querySelector('#removeButton');

const authorInput = document.querySelector('#authorInput');
const messageInput = document.querySelector('#messageInput');

let messages = [];

const messagesFromLS = JSON.parse(localStorage.getItem('messages'))

if(messagesFromLS) {
  messages = messagesFromLS;
}

const handleSubmit = (event) => {
  event.preventDefault();

  if(authorInput.value.length === 0 || messageInput.value.length === 0) {
    return alert('Wypelnij pola formularza');
  }

  const newMessage = {
    id: Date.now(),
    message: messageInput.value,
    author: authorInput.value
  }

  messages.push(newMessage)
  localStorage.setItem('messages', JSON.stringify(messages));

  list.innerHTML += `
    <li class="messages-item"> ${messageInput.value} - <strong>${authorInput.value} </strong></li>
  `

  authorInput.value = '';
  messageInput.value = '';
}

const removeMessages = () => {
  list.innerHTML = '';
}

form.addEventListener('submit', handleSubmit);
removeButton.addEventListener('click', removeMessages)

messages.forEach(message => {
  list.innerHTML += `
    <li class="messages-item"> ${message.message} - <strong>${message.author} </strong></li>
  `;
})