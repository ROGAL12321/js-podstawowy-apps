const todoList = document.querySelector('#todoList');

let todos = JSON.parse(localStorage.getItem('todos'));

if(!todos) {
  todos = [];
}

const handleTodoListClick = (event) => {
  if(event.target.href) {
    // Resetuje domyslne przekierowanie przy linku
    event.preventDefault();

    // Przy edycji, potrzebuje do localStorage przekazac id elementu, ktory aktualnie edytuje
    localStorage.setItem('currentTodoId', event.target.dataset.editid);

    window.location.href = '/edit.html';
  }


  // Sprawdzenie, ze klikam w guzik do usuwania
  if(event.target.dataset.id) {
    // Usuwanie z tablicy obiektow, robimy zawsze za pomoca funkcji filter (praktyka uzywana w 100% przypadkow)
    const filteredTodos = todos.filter(todo => {
      return todo.id !== parseInt(event.target.dataset.id)
    })

    // Potrzebuje nadpisac tablice todos, poniewaz potrzebuje moc usunac wiele elementow po sobie
    todos = filteredTodos
    // Usuwanie z LS
    localStorage.setItem('todos', JSON.stringify(filteredTodos));
    // Usuwanie z HTML
    event.target.parentElement.remove()
  }
}

todos.forEach(todo => {
    todoList.innerHTML += `
      <li>
        <strong>${todo.author}</strong> napisal
        <p>${todo.message}</p>
        <a href="/edit.html" data-editid="${todo.id}">
          Edycja >
        </a>
        <button data-id="${todo.id}"> Usuń X </button>
      </li>
    `
})

todoList.addEventListener('click', handleTodoListClick)