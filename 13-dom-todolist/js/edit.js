const todoForm = document.querySelector('#todoForm');
const authorInput = document.querySelector('#authorInput')
const messageInput = document.querySelector('#messageInput')

let currentTodos = JSON.parse(localStorage.getItem('todos'));
const currentTodoId = localStorage.getItem('currentTodoId');

if(!currentTodos) {
  currentTodos = []
}

// Majac tablice todos oraz id elementu ktory edytujemy, za pomoca funkcji find, znajdz element z tablicy obiektow, ktory aktualnie edytujemy. Jesli go znajdziesz, to wstaw wartosc author i message do inputow

const editedTodo = currentTodos.find(todo => todo.id === parseInt(currentTodoId));

if(editedTodo) {
  authorInput.value = editedTodo.author;
  messageInput.value = editedTodo.message;
}


const handleSubmit = (event) => {
  event.preventDefault();

  if(!authorInput.value || messageInput.value.length < 2) {
    return alert('Blad walidacji!');
  }

  // findIndex - jest to funkcja do wyszukiwania indeksu elementu w tablicy obiektow

  // Edycja, jest to znalezienie indeksu elementu, ktory edytujemy i edycja pol tego elementu. Nastepnie potrzebujemy zapisac cala tablice obiektow z powrotem do LS.
  const editedTodoIndex = currentTodos
    .findIndex(todo => todo.id === parseInt(currentTodoId));

  currentTodos[editedTodoIndex].message = messageInput.value;
  currentTodos[editedTodoIndex].author = authorInput.value;

  localStorage.setItem('todos', JSON.stringify(currentTodos));

  // Ta linijka odpowiada za przekierowanie
  window.location.href = 'index.html';
}

todoForm.addEventListener('submit', handleSubmit)
