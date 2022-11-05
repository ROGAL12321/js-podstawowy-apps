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

// 2*. Napisz program, ktory imituje gre papier, kamien, nozyce. Popros najpierw o wybor pierwszego uzytkownika, potem popros o wybor drugiego uzytkownika, a nastepnie napisz program, ktory decyduje kto wygral.