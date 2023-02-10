console.log('Hello World!');

const products = [
  {
    id: 1,
    name: 'Bread',
    price: 9.99,
    category: 'Bakery'
  },
  {
    id: 2,
    name: 'Banana',
    price: 3.49,
    category: 'Fruits and Vegetables'
  },
  {
    id: 3,
    name: 'Cherry',
    price: 15.66,
    category: 'Fruits and Vegetables'
  },
  {
    id: 4,
    name: 'Apple Cake',
    price: 12.99,
    category: 'Bakery'
  }
]


// 1. Napisz funkcje getSum(), ktora przyjmie jako argument tablice produktow i zwroci suma produktow. Uzyj funkcji return

// getSum(products) -> 42.13


const getSum = (collection) => {
  let sum = 0;

  collection.forEach(item => {
    sum += item.price;
  })

  return sum;
}

console.log(getSum(products));


// 2. Napisz funkcje getTheMostExpensiveProduct, ktora przyjmie jako argument tablice produktow i zwroci najdrozszy produkt


const getTheMostExpensiveProduct = (collection) => {
  let theMostExpensiveProduct = collection[0];

  collection.forEach(item => {
    if(item.price > theMostExpensiveProduct.price) {
      theMostExpensiveProduct = item;
    }
  })

  return theMostExpensiveProduct;
}

console.log(getTheMostExpensiveProduct(products))

// getTheMostExpensiveProduct(products) -> Obiekt Cherry

// 3. Napisz funkcje getBakeryProducts, ktora przyjmie jako argument tablice produktow i zwroci tablice obiektow, zawierajaca produkty ktorych kategoria to Bakery.

// getBakeryProducts(products) -> Tablica obiektow zawierajaca Bread i Apple Cake

const getBakeryProducts = (collection) => {
  const bakeryProducts = [];

  collection.forEach(item => {
    if(item.category === 'Bakery') {
      bakeryProducts.push(item);
    }
  })

  return bakeryProducts;
}

console.log(getBakeryProducts(products))


// 4. Napisz funkcje findProductsWithPrice, ktora przyjmie jako parametr tablice obiektow i cene, powyzej ktorej ma szukac. Ma zwrocic tablice obiektow, zawierajaca produkty, ktorych cena jest rowna lub powyzej zadeklarowanej w argumencie. Jesli drugi parametr nie jest cyfra, zwroc informacje 'Podana cena nie jest cyfra'

// findProductsWithPrice(products, 16) -> []
// findProductsWithPrice(products, 15) -> [Obiekt Cherry]
// findProductsWithPrice(products, 1) -> wszystkie
// findProductsWithPrice(products, 'damian') -> 'Podana cena nie jest cyfra'


const findProductsWithPrice = (collection, price) => {
  if(typeof price === 'string') {
    return 'Podana cena nie jest cyfra'
  }

  const foundProducts = [];

  collection.forEach(item => {
    if(item.price >= price) {
      foundProducts.push(item);
    }
  })

  return foundProducts;
}

console.log(findProductsWithPrice(products, 'damian'));

// 5. Napisz funcje searchProducts, ktora przyjmie dwa argumenty - liste produktow i stringa. Wyszukaj produkty, ktorych nazwa posiada w sobie string, podany w drugim argumencie

// searchProducts(products, 'che') -> [Cherry]
// searchProducts(products, 'e') -> [Bread, Cherry, Apple Cake]
// searchProducts(products, 'dsaiojodasda') -> []


const searchProducts = (collection, searchPhrase) => {
  const found = [];

  collection.forEach(item => {
    if(item.name.toLowerCase().includes(searchPhrase)) {
      found.push(item);
    }
  })

  return found;
}

console.log(searchProducts(products, 'dsaihdshahudias'));