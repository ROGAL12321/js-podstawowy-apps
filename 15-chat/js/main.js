import { ref, push, remove, set, onValue } from "firebase/database";
import { database } from "./firebase";

const messageForm = document.querySelector('#messageForm');
const messageAuthor = document.querySelector('#messageAuthor');
const messageText = document.querySelector('#messageText');
const messagesList = document.querySelector('#messagesList');
const sortByLikesCheckbox = document.querySelector('#sortByLikesCheckbox');
const searchForm = document.querySelector('#searchForm');
const searchInput = document.querySelector('#searchInput');

const AUTHOR_ID = 1;

// Odczytywanie z firebase
const messageRef = ref(database, 'messages');

let allMessages = [];

const renderList = (messages) => {
  messagesList.innerHTML = '';

  messages.forEach(message => {
    messagesList.innerHTML += `
      <li class="message">
        <strong>${message.author}</strong> wrote:
        <p> ${message.message} </p>
        ${message.authorId === AUTHOR_ID
          ? `<button class="delete-button" data-id="${message.id}">Usuń</button>`
          : ''
        }
        <button class="like-it-button" data-messageid="${message.id}"> Like it! &hearts; </button>
        <span> ${message.likes} ${message.likes === 1 ? 'like' : 'likes'}</span>
        <a href="#" class="show-comments"> Zobacz komentarze (${!message.comments ? 0 : Object.values(message.comments).length}) </a>

        <div class="hidden">
          <ul class="comments">
            ${
              !message.comments ? '' : Object.values(message.comments)
                .map(comment => {
                  return `<li> <strong>${comment.author}</strong> wrote: ${comment.message}</li>`
                }).join('')
            }
          </ul>
          <form class="comment-form">
            <label> Author <input type="text" class="comment-author"/></label>
            <label> Komentarz <input type="text" class="comment-comment"/></label>

            <button class="send-comment-button" data-postid="${message.id}" type="submit"> Wyslij </button>
          </form>
        </div>

      </li>
    `
  })

}

const handleSubmit = (event) => {
  event.preventDefault();

  if(!messageAuthor.value || messageText.value.length < 3) {
    return alert('Formularz wypelniony blędnie!');
  }

  const newMessage = {
    createdAt: Date.now(),
    author: messageAuthor.value,
    message: messageText.value,
    authorId: AUTHOR_ID,
    likes: 0,
  }

  push(messageRef, newMessage)

  // messages.push(newMessage)

  // Spread operator ES6
  // Mozemy uzyc spread operator zeby np. dodac element do listy na poczatek
  // messages = [newMessage, ...messages];

  // renderList();

  messageAuthor.value = '';
  messageText.value = '';
}

const handleLikeClick = (idToLike) => {
  const messageToChange = allMessages.find(message => message.id === idToLike);

  messageToChange.likes++;

  set(ref(database, `messages/${idToLike}`), messageToChange)
}

const handleComment = (postid, author, message) => {
  const messageToChange = allMessages.find(message => message.id === postid);

  const newComment = {
    author: author,
    message: message
  }

  // concat jest to metoda dodawania do tablicy, tak samo jak push, ale zwraca ona cala tablice zamiast indeksu nowego elementu

  messageToChange.comments = !messageToChange.comments
    ? [newComment]
    : Object.values(messageToChange.comments).concat(newComment)

  set(ref(database, `messages/${postid}`), messageToChange)
}

const handleListClick = (event) => {
  if(event.target.dataset.id) {
    // messages = messages.filter(message => {
    //   return message.id !== parseInt(event.target.dataset.id)
    // })

    remove(ref(database, `messages/${event.target.dataset.id}`));
  }

  if(event.target.classList.contains('like-it-button')) {
    handleLikeClick(event.target.dataset.messageid);
  }

  if(event.target.classList.contains('show-comments')) {
    const numberOfComments = event.target.innerText.slice(-2, -1)

    event.target.innerText = event.target.innerText.includes('Zobacz')
      ? `Ukryj komentarze (${numberOfComments})`
      : `Zobacz komentarze (${numberOfComments})`

    event.target.nextElementSibling.classList.toggle('hidden');
  }

  // Zdarzenie klikniecia w button submit
  if(event.target.classList.contains('send-comment-button')) {
    event.preventDefault();

    // Sposob jak robic wyszukiwanie wzgledem obecnego elementu
    const authorInput = event.target.parentElement.querySelector('.comment-author')
    const messageInput = event.target.parentElement.querySelector('.comment-comment')

    handleComment(event.target.dataset.postid, authorInput.value, messageInput.value);
  }
}

// Asynchronicznosc JS
const handleData = (data) => {
  // toJSON() jest to metoda firebase, ktora sluzy do zamiany przychodzacych danych na format javascriptowy;
  const messagesFromFB = data.toJSON();

  // Object.values tworzy tablice z wartosci kluczy obiektu
  // console.log(Object.values(messages));

  const messagesWithIdsFromFB = !messagesFromFB ? [] : Object.keys(messagesFromFB).map(key => {
    return {
      ...messagesFromFB[key],
      id: key,
    }
  })

  // potrzebuje to przesortowac, poniewaz elementy dodane pozniej maja wieksze createdAt
  const messages = sortByLikesCheckbox.checked
    ? messagesWithIdsFromFB.sort((prev, next) => prev.likes > next.likes ? -1 : 1)
    : messagesWithIdsFromFB.sort((prev, next) => prev.createdAt > next.createdAt ? -1 : 1);

  allMessages = messages
  renderList(messages);
}

const handleSortByLikes = (event) => {
  const messages = event.target.checked
    ? allMessages.sort((prev, next) => prev.likes > next.likes ? -1 : 1)
    : allMessages = messages.sort((prev, next) => prev.createdAt > next.createdAt ? -1 : 1);

  renderList(messages);
}

const handleSearch = (event) => {
  event.preventDefault();

  const filteredMessages = allMessages.filter(message => {
    return message.author.toLowerCase().includes(searchInput.value.toLowerCase())
      || message.message.toLowerCase().includes(searchInput.value.toLowerCase())
  })

  renderList(filteredMessages);
}

messagesList.addEventListener('click', handleListClick);
messageForm.addEventListener('submit', handleSubmit);
sortByLikesCheckbox.addEventListener('click', handleSortByLikes)
searchForm.addEventListener('submit', handleSearch)

// Websockets
onValue(messageRef, handleData);
