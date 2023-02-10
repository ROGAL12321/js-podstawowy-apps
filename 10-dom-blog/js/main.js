import { blogposts } from "./blogposts";
import { blogList, searchForm, searchInput, filters } from './elements'

blogposts.forEach(post => {
  blogList.innerHTML += `
    <li class="blogpost">
      <img src="${post.poster}" alt="Blog post">
      <div class="blogpost-content">
        <h4> #${post.category} </h4>
        <h2>${post.title}</h2>
        <p>${post.teaser}</p>
        <a href="${post.link}">See more</a>
      </div>
    </li>
  `
})

const handleSearch = (event) => {
  event.preventDefault();

  const filteredResults = [];

  blogposts.forEach(post => {
    if(post.title.toLowerCase().includes(searchInput.value)) {
      filteredResults.push(post);
    }
  })

  blogList.innerHTML = '';

  filteredResults.forEach(post => {
    blogList.innerHTML += `
      <li class="blogpost">
        <img src="${post.poster}" alt="Blog post">
        <div class="blogpost-content">
          <h4> #${post.category} </h4>
          <h2>${post.title}</h2>
          <p>${post.teaser}</p>
          <a href="${post.link}">See more</a>
        </div>
      </li>
    `
  })

}

const handleFilterClick = (event) => {
  if(event.target.type === 'checkbox') {
    // console.log(event.target.id); // to jest kategoria

    // console.log(event.target.checked)
    // checked jest to pole true/false, dostepne w checkboxie, ktore mowi nam czy checkbox jest zaznaczony czy tez nie

    let filteredBlogPosts = [];

    // my powinnismy odfiltrowywać tylko wtedy, kiedy checkbox jest zaznaczony
    if(event.target.checked) {

      // @TODO: Naprawić klikanie w wiele kategorii
      blogposts.forEach(post => {
        if(post.category === event.target.id) {
          filteredBlogPosts.push(post);
        }
      })
    } else {
      filteredBlogPosts = blogposts
    }

    blogList.innerHTML = '';

    filteredBlogPosts.forEach(post => {
      blogList.innerHTML += `
        <li class="blogpost">
          <img src="${post.poster}" alt="Blog post">
          <div class="blogpost-content">
            <h4> #${post.category} </h4>
            <h2>${post.title}</h2>
            <p>${post.teaser}</p>
            <a href="${post.link}">See more</a>
          </div>
        </li>
      `
    })
  }
}


searchForm.addEventListener('submit', handleSearch)

const getUniqueCategories = (collection) => {
  const uniqueCategories = [];

  collection.forEach(item => {
    if(!uniqueCategories.includes(item.category)) {
      uniqueCategories.push(item.category);
    }
  })

  return uniqueCategories;
}

const uniqueCategories = getUniqueCategories(blogposts)

uniqueCategories.forEach(category => {
  filters.innerHTML += `
    <label>
      <input type="checkbox" id="${category}"/>
      ${category}
    </label>
  `
})

filters.addEventListener('click', handleFilterClick)
