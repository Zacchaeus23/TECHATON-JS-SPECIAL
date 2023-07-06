// let name1 = 'gift';
// name1 = 'Joy'

const sentence = 'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.';

const info =' Name, phone number, email address, company address, orders and much more.'

const mood = ' Delightful!'

// STRING METHOD

//1 .charAt() Character at a particular index

console.log(sentence.charAt(90));

//2 .concat() Joins two or more variables

console.log(info.concat(sentence));

//3 .replace() replaces the first word or character found 

console.log(info.replace('Name', 'Full Name'));
console.log(sentence.replace('is', 'was'));

//4 .repeat() returns a new string in the number of times repeated
console.log(`I am very ${mood.repeat(3)}`);

//5 .slice() extracts a section of a string and returns it as a new string
console.log(sentence.slice(0, 120));
console.log(sentence.slice(120));


// TASK 2: 
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
shopping[0] = 'Cookies';

//Accessing a multidimensional array
const arr = [0 , 80, 'Love', ['Joy', 'Amen', 14, 32], ['Orange', 'Apples', 'Mangoes']]
console.log(arr[3][1]);

// 1. .indexOf() to find the index of an array
console.log(shopping.indexOf('hummus'));
// It will return -1 because the index isn't in the array
console.log(arr.indexOf('Joy'));
//returns the index of the array at index 3
console.log(arr[3].indexOf('Joy'));

//2. .push() to add item to the end of your array 
shopping.push('burger');
console.log(shopping);

const cities = ["Manchester", "Liverpool"];
cities.push("Bristol");
console.log(cities); 

//3. .unshift() to add item to the start of the array
cities.unshift('Ibadan')
console.log(cities);

//4 .pop() Used to remove an item at the end of the array 
const removedCity = cities.pop();
console.log(removedCity);

//5 .shift() used to remove item at the beginning of the array
const removedShoppedItem = shopping.shift();
console.log(removedShoppedItem);
console.log(shopping);

//6 .splice() This is done when you know the index you want to start from
const carBrand = ["Audi", "BMW", "Mustang", "Porsche", "Ferrari"];
const index = carBrand.indexOf("BMW");

if(index !== -1) {
    carBrand.splice(index, 2); // the first indicates where it should start , the second indicates how many items to be removed
}

console.log(carBrand);