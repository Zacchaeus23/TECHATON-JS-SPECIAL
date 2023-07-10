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


