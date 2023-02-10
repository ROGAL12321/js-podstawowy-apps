// Struktura danych - zagniezdzona tablica obiektow

const products = [
  {
    id: 1,
    name: 'Bread',
    price: 9.99,
    category: 'Bakery',
    rates: [
      {
        comment: 'Mega dobry chleb',
        rate: 9
      },
      {
        comment: 'Ala chała',
        rate: 4
      }
    ]
  },
  {
    id: 2,
    name: 'Banana',
    price: 3.49,
    category: 'Fruits and Vegetables',
    rates: [
      {
        comment: 'Ale czarny banan',
        rate: 6
      },
      {
        comment: 'Mega mialem ochote na banana',
        rate: 9
      }
    ]
  },
  {
    id: 3,
    name: 'Cherry',
    price: 15.66,
    category: 'Fruits and Vegetables',
    rates: [
      {
        comment: 'Ale drogie',
        rate: 5
      },
      {
        comment: 'Mega swieze',
        rate: 10
      }
    ]
  },
  {
    id: 4,
    name: 'Apple Cake',
    price: 12.99,
    category: 'Bakery',
    rates: [
      {
        comment: 'Dobry jabłecznik',
        rate: 6
      },
      {
        comment: 'Nie cierpie jablecznika',
        rate: 2
      }
    ]
  }
]

const searchComments = (collection, searchPhrase) => {
  const foundComments = [];

  collection.forEach(item => {
    item.rates.forEach(rate => {
      if(rate.comment.toLowerCase().includes(searchPhrase)) {
        foundComments.push(rate.comment);
      }
    })
  })

  return foundComments;
}

console.log(searchComments(products, 'dobry'));

// 1. Napisz funkcje getProductsWithRate, ktora zwroci produkty, ktorych srednia ocena jest wieksza niz podana w argumencie.

// getProductsWithRate(products, 5) -> 3 obiekty, oprocz Apple Cake
// getProductsWithRate(products, 7) -> tylko te produkty, ktorych ocena jest powyzej 7




const getProductsWithRate = (collection, rate) => {
  const foundProducts = [];

  collection.forEach(item => {
    let productRateSum = 0;

    item.rates.forEach(productRate => {
      productRateSum += productRate.rate
    })

    const averageProductRate = productRateSum / item.rates.length;

    if(averageProductRate >= rate) {
      foundProducts.push(item);
    }
  })

  return foundProducts
}

console.log(getProductsWithRate(products, 7));
