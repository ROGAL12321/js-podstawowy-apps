// Alert to jest komenda ktora uruchamia okno dialogowe z tekstem zawartym w nawiasach
// alert('Hello Damian');

// Wyswietlanie rzeczy w konsoli
console.log('Hello Damian');

// Javascript dziala do 1 bledu
// saoijjdosajodiasojdidsa

console.log('Hello Paweł');

// 1. Okna dialogowe

// alert('Hello')

// const to jest przypisane to zmiennej

// const nazwaZmiennej = wartosc

// konwencja nazywania zmiennych: camelCase
// do klas CSS uzywamy konwencji kebab-case

// camelCase: mojeImieToDaamian
// kebab-case: moje-imie-to-damian

// const myName = prompt('Jak masz na imie?');

// console.log(myName);

// Tworzenie zdań ze zmiennych

// 1. sposob - za pomoca znaka +
// console.log('Hello ' + myName);

// 2. za pomoca tzw template string (ES6)
// console.log(`Hello ${myName}`);

// Warunki

// Jednym z typow zmiennych w JS jest tzw boolean (prawda/falsz)

// Znaki: >, >=, <, <=, ==, ===

// console.log(10 > 10); // false
// console.log(10 == 10); // true
// console.log('Damian' == 'Pawel'); // false
// console.log('Damian' == 'Damian'); //true

// Instrukcje warunkowe

// const age = prompt('Ile masz lat?');

// if(age >= 18) {
//   console.log('Mozesz wejsc');
// } else {
//   console.log('Jestes za mlody');
// }

// Rozszerzone instrukcje warunkowe

// else if dziala tak, ze jesli nie wejdzie do pierwszego warunku, to szuka czy moze spelnic drugi warunek
// if(age >= 25) {
//   console.log('Mozesz wejsc do sali VIP')
// } else if (age >= 18) {
//   console.log('Mozesz wejsc');
// } else {
//   console.log('Jestes za mlody');
// }

// 1. Napisz program, ktory pobiera dwie liczby (uzyj dwa razy funkcji prompt). Nastepnie napisz w konsoli, ktora liczba jest wieksza (jesli pierwsza liczba jest wieksza, napisz "Liczba pierwsza X jest wieksza od drugiej Y"). W przeciwnym wypadku, napisz inna wiadomosc :).

// UWAGA: Nie dawaj liczb wiekszych niz 10


// nazma zmiennej nie moze sie powtarzac
// const numberOne = prompt('Podaj pierwsza liczbe');
// const numberTwo = prompt('Podaj druga liczbe');

// Wyswietlanie rzeczy w konsoli
// console.log(numberOne);
// console.log(numberTwo);

// console.log(numberOne, numberTwo)
// console.log('Pierwsza liczba to', numberOne)
// console.log('Druga liczba to', numberTwo)

// if(numberOne > numberTwo) {
//   console.log(`Liczba pierwsza ${numberOne} jest wieksza niz liczba druga ${numberTwo}`)
// } else {
//   console.log(`Liczba druga ${numberTwo} jest wieksza niz liczba pierwsza ${numberOne}`)
// }



// 2*. Napisz program, ktory imituje gre papier, kamien, nozyce. Popros najpierw o wybor pierwszego uzytkownika, potem popros o wybor drugiego uzytkownika, a nastepnie napisz program, ktory decyduje kto wygral.

// const choise1 = prompt('X')
// const choise2 = prompt('Y')

if(choise1 === 'Kamien' && choise2 === 'Nozyce' || choise1 === '') {
 console.log('wygral gracz 1')
}




// Zajęcia 06.11

// 1. Zmienne

// Zmienna zawsze trzyma wartosc

// 2 sposoby zapisu zmiennych
// const name = 'Damian';
// let surname = 'Rogulski'

// Roznica pomiedzy const i let jest taka, ze const nie mozna nadpisac, a let mozna.

// UWAGA: const nie mozna nadpisac
// name = 'Paweł';

// const bedziemy uzywac w 80-90% przypadkow

// Do nadpisywania nie powtarzamy slowa let
// surname = 'Włodarczyk';

// console.log(name, surname)



// Rodzaje zmiennych

// Stringi
const string = 'Damian';

// Number

// const number = 10; // Int - liczby calkowite
const number = 10.30; // Float - liczby zmiennoprzecinkowe

// operatory
// +, -, *, /, %
// modulo (%) to jest reszta z dzielenia
// 10 % 7 = 3

// const myResult = 10 * 7;

// Uwaga: przy odejmowania floatow mozemy napotkac sie na problem z dziwnym wynikiem, wynika to z architektury JS przyjetej lata temu.
// console.log(0.3 - 0.2);

// console.log(myResult);



// Konwersja typow zmiennych

const result2 = 25
// const result3 = "30";

// Funkcja wbudowana parseInt/parseFloat powoduje zmiane stringa na number
// const result3 = parseInt("30");
const result3 = parseFloat("30.25");

// JS dziala tak ze string + number = string

console.log(result2 + result3);

// zamiana number na string

const result4 = 25;
console.log(String(result4));


// Typ boolean (prawda, falsz)
// dobra praktyka: zmienne boolean powinny posiadac przedrostek is/has/should/was

// const isAdult = true;
// const isDog = false;

// Operatory porownywania
// Glownie porownuje sie ze soba stringi, natomiast sprawdzanie czy cos jest wieksze/mniejsze jest przypisane do numberow

// >, >=, ==, ===, <, <=

const age = 15;

const isAdult = age >= 18;

// Operatory logiczne
// && operator i
// || operator lub

const agePerson1 = 20;
const agePerson2 = 15;

// w operatorze && wszystie warunki musza byc spelnione
const canTheyGoIntoClub =
  agePerson1 >= 18 && agePerson2 >= 18;

// w operatorze || tylko jeden warunek musi byc spelniony

const canTheyBuyAlkohol =
  agePerson1 >= 18 || agePerson2 >= 18;

console.log('Czy moga wejsc do klubu', canTheyGoIntoClub)
console.log('Czy moga kupic alko', canTheyBuyAlkohol)

// instrukcje warunkowe

// if
const name3 = 'Paweł';

// Jesli warunek nie jest spelniony, to kod wewnatrz if sie nie wykona.

// == sprawdza tylko wartosc '12' == 12 -> true
// === sprawdza wartosc i typ '12' === 12 -> false

if(name3 === 'Damian') {
  console.log('Czesc! Witaj na imprezie');
}

// if/else
// const age5 = 15;

// if(age5 >= 18) {
//   console.log('Witaj na imprezie!')
// } else {
//   console.log('Jesteś za młody');
// }


// if/elseif/else

const age6 = 20;

// if(age6 >= 30) {
//   console.log('Mozesz zamowic cygaro')
// } else if(age6 > 18) {
//   console.log('Mozesz wejsc na sale');
// } else {
//   console.log('Jestes za mlody');
// }


// switch

const name7 = 'Marcin';
// przy instrukcji switch, musimy pamietac o slowie break w kazdym case
switch(name7) {
  case 'Damian': { //sprawdzenie czy name7 === 'Damian'
    console.log('Cześć Damian!')
    break;
  }
  case 'Paweł': { //sprawdzenie czy name7 === 'Paweł'
    console.log('Cześć Paweł!')
    break;
  }
  default: { //Zadna z powyzszych
    console.log('Nie jestes zaproszony na impreze');
  }
}




// 2*. Napisz program, ktory imituje gre papier, kamien, nozyce. Popros najpierw o wybor pierwszego uzytkownika, potem popros o wybor drugiego uzytkownika, a nastepnie napisz program, ktory decyduje kto wygral.

// const player1Choise = prompt('Papier, kamień czy nozyce?')
// const player2Choise = prompt('Papier, kamień czy nozyce?')

// console.log(player1Choise);
// console.log(player2Choise);

// if (
//   player1Choise === 'kamień' && player2Choise === 'nozyce' || player1Choise === 'nozyce' && player2Choise === 'papier' ||
//   player1Choise === 'papier' && player2Choise === 'kamień'
// ) {
//   console.log('wygrywa gracz 1!')
// } else if(
//   player1Choise === 'kamień' && player2Choise === 'kamień' ||
//   player1Choise === 'nozyce' && player2Choise === 'nozyce' ||
//   player1Choise === 'papier' && player2Choise === 'papier'
// ) {
//   console.log('Remis!')
// } else {
//   console.log('Wygrywa gracz drugi!');
// }

// 1. Pobierz od uzytkownika 2 liczby a nastepnie wyswietl w konsoli wynik dodawania

// 2. Pobierz od uzytkownika jego wiek, a nastepnie napisz warunek, w ktorym jesli ma powyzej 18 lat, to moze kupic alkohol w sklepie. W przeciwnym wypadku napisz ze nie moze kupic alkoholu.

// 3. Napisz program, ktory pobierze od uzytkownika wartosc 1, 2 lub 3. Jesli uzytkownik wpisze 1, to napisz mu komunikat 'Wygrales'. Jesli wpisze komunikat 2, wyswietl 'Wygrales nagrode pocieszenia. Jesli wpisal 3, wyswietl "Przegrales". Uzyj instrukcji switch

// 4*. Przeksztalsc zadanie pierwsze tak, zeby uzytkownik oprocz 2 liczb, podal jeszcze operacje jaka ma zostac wykonana (+, -, *, /), a nastepnie dokonaj operacji



// Typy zlozone i specjalne

// typ specjalny undefined oznacza, ze nie istnieje taka zmienna, ktorej szukamy lub nie zostala przypisana;

let sum;
console.log(sum); //undefined

// typ specjalny null oznacza, ze zmienna istnieje, ale jest pusta

// null jest uzywany w komunikacji FE i BE i oznacza ze nie ma danej rzeczy
// null jest tez uzywany przy interakcji HTML <-> CSS i oznacza ze nie ma takiego elementu HTML

let element = null;
console.log(element);

// Typy specjalne dzialaja jak warunek logiczny false

// null dziala jak false
if(null) {
  console.log('Czy dzialam?')
}
// undefined dziala jak false
if(undefined) {
  console.log('czy dzialam?')
}


// Typy zlozone

// typy zlozone to takie typy, ktore moga trzymac wiecej niz 1 wartosc

// Array (tablica)

const array = [1, 2, 3, 5, 10, 15, 20, 'Damian', true, ['Paweł'], 100];
console.log(array);

// TABLICE NUMERUJEMY OD 0 (TZW INDEKS)
console.log(array[0]) // pierwszy element - 1
console.log(array[5]); // szosty element - 15
console.log(array[7]); // osmy element - Damian
console.log(array[9][0]); // wyswietlenie imienia pawel

// Metoda length: Wywolanie ile elementow ma tablica
console.log(array.length) // tablica ma 11 elementow w srodku

// CHEATSHEET
// Zeby dostac sie do ost el tablicy, musimy wziac cala jej dlugosc i odjac 1, bo indeks tablicy liczy sie od 0
console.log(array[array.length - 1])

// Metoda push: Dodawanie elementow do tablicy
// dodawanie do tablicy, zawsze dodaje element na koncu

const array2 = ['Damian', 'Paweł'];
console.log(array2);
console.log(array2[2]); // Zwroci undefined, bo nie ma elementu o indeksie 2

array2.push('Michał');

console.log(array2);
console.log(array2[2]); // To juz zwroci poprawnie imie Michał, bo zostalo dodane

// Metoda pop: Usuwanie ostatniego elementu
array2.pop();
console.log(array2);
console.log(array2[2]); // Zwroci undefined


// Zadania

// 1. Stworz tablice numbers, ktora zawiera 3 rozne numery. Nastepnie za pomoca indeksow, oblicz sume elementow tablicy
// [10, 20, 30] -> 60

const numbers = [10, 20, 30];

console.log(numbers[0] + numbers[1] + numbers[2]);

// 2. Do tablicy numbers, dodaj nastepny numer. Nastepnie za pomoca indeksow, oblicz sume elementow tablicy

// numbers.push(60); === [numbers, ...60]

console.log(numbers[0] + numbers[1] + numbers[2] + numbers[3])

// 3. Policz sume pierwszego i ostatniego elementu tablicy

console.log(numbers[0] + numbers[numbers.length - 1]);

// 4. Pobierz od uzytkownika liczbe, a nastepnie dodaj ja do tablicy numbers. Nastepnie wyswietl w konsoli wynik mnozenia wszystkich elementow tablicy.

// const userNumber = prompt("Podaj liczbe, ktora dodam do tablicy");
// const parsedUserNumber = parseInt(userNumber);

// Jesli nie ma elementu
// NaN = Not a Number
// 10 * undefined = ?? (NaN)

// numbers.push(parsedUserNumber)
// console.log(numbers[0] * numbers[1] * numbers[2] * numbers[3] * numbers[4]);

// const w przypadku typow zlozonych


// const myNumber2 = 5;
// myNumber2 = 10; // wyskoczy blad

// JavaScript nie sprawdza zawartosci typow zlozonych
const myArray3 = ['Damian']

// myArray3 = ['Paweł']; //wyskoczy blad

myArray3.push('Paweł');
console.log(myArray3)


// Object (obiekt)

const shoeNumber = 43;
const shoeBrand = 'Nike';
const shoeIsUsed = true;

// Obiekt sluzy do przechowywania wielu cech danej rzeczy
const shoe = {
  number: 43, // pole obiektu lub klucz obiektu
  brand: 'Nike',
  isUsed: true
}

// Odczytywanie z obiektu
console.log(shoe);

// Metoda 1 - Uzywane prawie zawsze
console.log(shoe.brand);
console.log(shoe.isUsed);

// Metoda 2
console.log(shoe['brand']);
console.log(shoe['isUsed']);
// Glownie w ten sposob uzywana jest ta metoda (b. rzadko)
const whatShouldBeDisplayed = 'brand';
console.log(shoe[whatShouldBeDisplayed]);

// Zapisywanie do obiektu

// Musze uzyc nieistniejacego klucza, inaczej mi go nadpisze
shoe.color = 'red';

console.log(shoe);

// Cwiczenie z obiektu

const student = {
  name: 'Damian',
  shoeNumber: 43,
  grades: [2, 4, 5, 6],
  attendExercices: true
}

// 1. Napisz instrukcje, ktora sprawdza czy damian uczeszcza na WF. Jesli tak to wypisz w konsoli wiadomosc "Jestes wysportowany".

if(student.attendExercices) {
  console.log('Jestes wysportowany!')
}

// 2. Napisz instrukcje warunkowa, ktora sprawdzi czy but Damiana jest duzy (czyli rozmiar jest wieksz niz 42).

// 3. Oblicz w konsoli srednia ocen Damiana (srednia to suma elementow / ilosc elementow). Powinno wyjsc 4.25

// 4. Dopisz do obiektu, tablice o nazwie friends i dodaj tam kilka osob. Nastepnie za pomoca metody .length wyswietl w konsoli ilu przyjaciol ma Damian :)



// Struktury danych

// * Array of objects (tablica obiektów)

// * Nie jest to typ danych, ale jest najczestszym uzywanym sposobem na zapisywanie rzeczy w JS



// Petle

// Przechodzenie przez elementy recznie
console.log('1')
console.log('2')
console.log('3')
console.log('4')
console.log('5')
console.log('6')
console.log('7')
console.log('8')

// Petla oznacza ze jakas czynnosc wykonuje sie X razy.

// for (poczatkowa liczba; do ilu liczymy; w ktora strony liczymy;)
// i++ idziemy w gore (kazde wywowalnie to jest licznik + 1)
// i-- idziemy w dol (kazde wywolanie to licznik -1)

// Ta petla wywola sie 8 razy

// for(let i = 0; i < 8; i++) {
//   console.log('Cześć!');
// }

// Petle najczesciej wykonuje sie na tablicach

const names2 = ['Damian','Paweł', 'Michał'];

// Tablice maja swoje 2 petle, ktore mozemy stosowac :)

// Petla ktora przechodzi przez elementy tablicy

// slowo po let okresla nam pod jaka zmienna przetrzymujemy aktualny element w petli
for(let name of names2) {
  console.log(`Cześć ${name}`);
}

// Petle mozemy uzyc do np sumowania.

const grades2 = [5, 3, 2, 7];

let sum4 = 0;

for(let number of grades2) {
  console.log(number); // Najpierw 5, potem 3, potem 2, a potem 7
  sum4 = sum4 + number; // Wzor na liczenie sumy
}

console.log(sum4);


const peopleHeights = [170, 185, 165];

// Za pomoca petli oblicz srednia wzrostu dla peopleHeights

let sum5 = 0;

for(let height of peopleHeights) {
  sum5 = sum5 + height;
  // sum += height // to jest skrot, ktory dopisuje wartosc do poprzedniej wartosci zmiennej
}

console.log(`Srednia wzrostu to ${sum5 / peopleHeights.length}`);

console.log('------------------------------')

// 1. Za pomoca petli for (nie forof) wyswietl 10 razy swoje imie w konsoli

for(let i = 0; i < 10; i++) {
  console.log('Damian');
}

// 2. Stworz tablice zawierajaca imiona swoich znajomych. Nastepnie za pomoca petli forof, przywitaj sie z nimi uzywajac konstrukcji czesc + imie

const friendNames = ['Damian', 'Paweł', 'Marcin'];

for (let friend of friendNames) {
  console.log(`Czesc ${friend}`)
}

// 3. Stworz tablice zawierająca ceny 5 dowolnych produktów. Następnie za pomocą petli forof oblicz sumę produktów

const basketPrices = [4.99, 2.48, 7.00, 0.99, 3.25];

let basketSum = 0;

for (let price of basketPrices) {
  // basketSum = basketSum + price;
  basketSum += price
}

console.log(basketSum)

// 4. Pograj w gre od google https://g.co/kgs/gp3sQQ

// 5*. Zmodyfikuj zadanie 3 w taki sposób, zeby obliczyc ceny produktow, ktorych cena jest powyzej 5zl.

let basketSum2 = 0;

for (let price of basketPrices) {
  // basketSum = basketSum + price;
  if(price > 5) {
    basketSum2 += price
  }
}

console.log(basketSum2)


// 1. Stworz tablice zawierajaca liste ulubionych samochodow. Nastepnie za pomoca petli wyswietl w konsoli zawartosc tablicy.

const carBrands = ['Mercedes', 'BMW', 'Audi'];

for(let car of carBrands) {
  console.log(car);
}

// 2. Majac tablice wzrostow uczniow w klasie, oblicz srednia wzrostu

const pplHeights = [180, 160, 155];

let heightsSum = 0;

for(let height of pplHeights) {
  heightsSum += height;
}

console.log(`Srednia to ${heightsSum / pplHeights.length}`)


// Obiekty i tablice obiektow

const myShoe = {
  size: 43,
  brand: 'Nike',
  type: 'Sneakers'
}

// Odczyt
console.log(myShoe.size)
// console.log(myShoe['size'])

// Zapis
// Musimy uzyc nieistniejacego klucza zeby go dopisac
myShoe.color = 'black';

// Popularna Struktura Danych - tablica obiektow

// Wazne: klucze powinny nazywac sie tak samo
const myShoes = [
  {
    size: 43,
    brand: 'Nike',
    type: 'Sneakers'
  },
  {
    size: 41,
    brand: 'Adidas',
    type: 'Winter Shoes'
  },
  {
    size: 45,
    brand: 'CCC',
    type: 'Casual'
  }
];

// 1. Wyswietl w konsoli dostepne marki butow

for (let shoe of myShoes) {
  // console.log(shoe); // shoe jest caly obiekt
  console.log(shoe.brand);
}

// 2. Za pomoca temlate stringa wyswietl napis zawierajacy informacje w obiekcie

for (let shoe of myShoes) {
  console.log(`
    Moj but jest typu ${shoe.type}, pochodzi z ${shoe.brand} i ma rozmiar ${shoe.size}
  `)
}

// 3. Stworz tablice obiektow, zawierajaca 3 roznych ludzi. Kazdy czlowiek powinien miec 2 wlasciwosci: name oraz age. A nastepnie za pomoca petli wykonaj 3 cwiczenia:

// - Wyswietl w konsoli zdanie Moj kolega to X i ma lat Y.
// - Wyswietl w konsoli srednia wieku Twoich znajomych
// - Do kazdego obiektu dodaj wlasciwosc sex. Sa dwie dostepne wartosci: male/female. A nastepnie zmodyfikuj podpunkt 1 w taki sposob, ze jesli jest to kobieta, to wyswietl zdanie Moja kolezanka to X i ma lat Y

const myPeople = [
  {
    name: 'Damian',
    age: 50,
    sex: 'male',
  },
  {
    name: 'Agnieszka',
    age: 20,
    sex: 'female'
  },
  {
    name: 'Paweł',
    age: 35,
    sex: 'male'
  }
]

// Zad 1
for(let person of myPeople) {
  console.log(`Moj kolega to ${person.name} i ma lat ${person.age}`)
}

// Zad 2
let myPeopleAgeSum = 0;

for(let person of myPeople) {
  myPeopleAgeSum += person.age;
}


console.log(`Srednia wieku moich znajomych to ${myPeopleAgeSum / myPeople.length}`)

// Zad 3
for(let person of myPeople) {
  if(person.sex === 'male') {
    console.log(`Moj kolega to ${person.name} i ma lat ${person.age}`)
  } else {
    console.log(`Moja kolezanka to ${person.name} i ma lat ${person.age}`)
  }
}

// *. Skrotowiec if/else czy ternary operator (?)

// boolean ? 'co jesli true' : 'co jesli false'

for(let person of myPeople) {
  console.log(`
    ${person.sex === 'male' ? 'Moj kolega' : 'Moja kolezanka'} to ${person.name} i ma lat ${person.age}
  `)
}


// Funkcje
// Funkcja jest to stworzenie ciagu czynnosci, ktore maja sie wykonac, a nastepnie zapakowanie tego w calosc

const names50 = ['Damian', 'Pawel'];

// Funkcje wbudowane

names50.push('Agnieszka'); // dodanie do tablicy
names50.pop() // usuwa ostatni element z tablicy

// Wlasne funkcje

// Tworzenie wlasnej funkcji

// 1 Sposob. za pomoca slowa kluczowego function
// function sayHello() {
//   console.log('Hey Damian');
// }

// () => - to jest tzw funkcja strzalkowa i sluzy ona do tego zeby nie pisac slowa function()

// *. funkcja strzalkowa jest lepsza od zapisu function(), poniewaz ona nie tworzy swojego zakresu this. Jezeli chcesz wiedziec wiecej, poczytaj o slowie kluczowym this.

// const sayHello = () => {
//   console.log('Hey Damian')
// }

// // Wywolanie wlasnej funkcji
// sayHello();

// ------------------ Uzywanie zmiennych w funkcjach ---------

// zmienne globalne - sa one dostepne w kazdej czesci naszego kodu (w ifach, petlach, funkcjach)
const numberA = 4;
const numberB = 5;

const calculate = () => {
  // Jest to tzw zmienna lokalna.
  // Zmienna lokalna jest widoczna tylko w klamrze, w ktorej jest zdefiniowana
  // const numberC = 10; // numberC nie jest widoczne poza funkcja calculate()

  // if(10 > 5) {
  //   const numberD = 50; // numberD nie jest widoczne poza ifem
  // }

  // console.log(numberD);

  console.log(
    `Suma liczb ${numberA} i ${numberB} to ${numberA + numberB}`
  );
}

calculate();

// console.log(numberC); // to nie zadziala bo numberC jest zdefiniowana jako zmienna lokalna w funkcji calculate()



// -------------- Parametryzcja funkcji ----------------

// const calculateWithParameters = (number1, number2) => {
//   // console.log('number1', number1);
//   // console.log('number2', number2);

//   console.log(
//     `Suma liczb ${number1} i ${number2} to ${number1 + number2}`
//   );
// }

// calculateWithParameters(5, 1);
// calculateWithParameters(7, 3);


// 1. Stworz funkcje, ktora pobierze od uzytkownika 2 liczby, a nastepnie wyswietli wynik dodawania

// const sumNumbersFromUser = () => {
//   // Zmienne lokalne sa usuwanie jak funkcja skonczy dzialanie, dzieki temu nie musze powtarzac sie przy nazywaniu zmiennych
//   const userNumber1 = parseInt(prompt('Podaj pierwsza liczbe'));
//   const userNumber2 = parseInt(prompt('Podaj druga liczbe'));

//   console.log(`
//     Suma ${userNumber1} i ${userNumber2} to ${userNumber1 + userNumber2}
//   `)
// }

// sumNumbersFromUser()
// sumNumbersFromUser()
// sumNumbersFromUser()


// 1. Napisz funkcje o nazwie hello, ktora przyjmuje imie jako parametr i zwroci napis Hello + imie

// const hello = (name) => {
//   console.log(`Hello ${name}`);
// }

// hello('Damian');


// 2. Napisz funkcje o nazwie whichGreater, ktora poprosi uzytkownika o dwie liczby, a nastepie wyswietli w konsoli informacje, ktora liczba jest wieksza

// const whichGreater = () => {
//   const number1 = parseInt(prompt('Podaj pierwsza liczbe'));
//   const number2 = parseInt(prompt('Podaj druga liczbe'));

//   if(number1 > number2) {
//     console.log(`Liczba ${number1} jest wieksza od ${number2}`)
//   } else if(number2 > number1) {
//     console.log(`Liczba ${number2} jest wieksza od ${number1}`)
//   } else {
//     console.log(`Liczby sa takie same`);
//   }
// }

// whichGreater();


// Funkcje mozna pisac rowniez bardziej zaawansowane


const shoes = [
  { brand: 'Nike', size: 43 },
  { brand: 'Reebok', size: 41 },
  { brand: 'Adidas', size: 45 }
]

// Funkcje bardzo czesto operuja na tablicy obiektow

// 1. Napisz funkcje, ktora sprawdzi, czy na stanie mamy but marki reebok i rozmiarze 42

// Dobra praktyka jest to, zeby funkcje operujace na danych, otrzymywaly tablice obiektow jako parametr

// findShoe jest przykladem algorytmu na szukanie

const findShoe = (listOfShoes, brand, size) => {
  // listOfSchoes jest to tablica obiektow, ktora zostala przekazana w wywolaniu funkcji
  // Na poczatku zakladam, ze takiego buta nie ma
  let found = false;

  // Nastepnie sprawdzam kazdy obiekt z tablicy obiektow i szukam butow spelniajacych kryteria, zdefiniowane w parametrze funkcji
  for(let shoe of listOfShoes) {
    if(shoe.brand === brand && shoe.size === size) {
      found = true;
    }
  }
  // Jesli znaleziono, to zwracam taka informacje.
  // W przeciwnym wypadku, opisuje to inaczej
  if(found) {
    console.log(`Jest taki but`)
  } else {
    console.log(`Nie ma buta marki ${brand} o rozmiarze ${size}`)
  }
}

findShoe(shoes, 'Reebok', 41);
findShoe(shoes, 'Nike', 45);


// 1. Stworz tablice obiektow o nazwie myPeople2. Kazdy obiekt niech zawiera 2 pola - name i age. Nastepnie stworz funkcje o nazwie checkAge, ktora przyjmie 2 parametry - tablice obiektow oraz liczbe. Nastepnie sprawdz, kto z tablicy obiektow ma wiecej lat niz zdefiniowane w drugim argumencie funkcji

const myPeople2 = [
  { name: 'Damian', age: 50 },
  { name: 'Agnieszka', age: 10},
  { name: 'Paweł', age: 20 }
];

const checkAge = (people, age) => {
  let peopleAboveCertainAge = [];

  for (let person of people) {
    if(person.age > age) {
      // Jesli ktos ma wiecej niz zdefiniowana liczba lat w zmiennej age, to wrzuc ta osobe do nowej tablicy
      peopleAboveCertainAge.push(person.name)
    }
  }

  if(peopleAboveCertainAge.length === 0) {
    console.log(`Nikt nie ma wiecej niz ${age} lat`)
  }

  // Metoda wbudowana join

  // ['Damian', 'Pawel'].join(' i ') -> Damian i Paweł
  // ['Damian', 'Pawel'].join(' ') -> Damian Paweł
  // ['Damian', 'Pawel', 'Marcin'].join(', ') -> Damian, Paweł, Marcin

  if(peopleAboveCertainAge.length > 0) {
    console.log(`${peopleAboveCertainAge.join(' i ')} ma wiecej niz ${age} lat`)
  }
}

checkAge(myPeople2, 30)

// checkAge(myPeople2, 30) -> 'Damian ma wiecej niz 30 lat'
// checkAge(myPeople2, 60) -> 'Nikt nie ma wiecej niz 60 lat'
// checkAge(myPeople2, 10) -> 'Damian i Pawel ma wiecej niz 10 lat'
