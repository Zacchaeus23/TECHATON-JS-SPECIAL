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
    carBrand.splice(index, 1); // the first indicates where it should start , the second indicates how many items to be removed
}

console.log(carBrand);

//7 .copyWithin() It works to copy a data of an array to another
console.log(carBrand.copyWithin(0, 2, 3));

// Copy to index 1 all elements from index 3 to the end
console.log(carBrand.copyWithin(0, 2, ));
// Expected output: Array ["d", "d", "e", "d", "e"]

//8 .every() runs to see if every value passes the test function
 
 const numberDivisibleByTwo = (x) => x / 2;
 

 const num = [10, 20, 30, 40, 50, 6, 72, 84, 96, 120];

 console.log(num.every(numberDivisibleByTwo));

 //9 .fill() Changes the value of an array till the index you want to stop
 const foods = ["bread", "milk", "rice", "fish", "noodles"];
 console.log(foods.fill('Chicken', 3 , 5));
 console.log(foods.fill('turkey', 2));
 console.log(foods.fill('Goat'));

 //10 .filter() filters the element that meets the specific requirements that need filtering
 const food = ["pounded yam", "cheese", "rice", "fish", "noodles"];
 const filterFood = food.filter(food => food.length > 4)
 console.log(filterFood);

 //11 .find() finds the first element in the array that satisfy the function of what you are looing for
 let findFood = food.find((x) => x === 'cheese');
 console.log(findFood);

 //12 .findIndex() finds the index you are looking for
 findFood = food.findIndex((x) => x ==='rice' )
 console.log(findFood);


 let placeholders = ["Firstname" , "Lastname" , "Email" , "Password", "submit"];
 let nums = [1, 24, 34, 26, 44];
 
 let object = {}


 for(i = 0; i < placeholders.length && i < num.length; i++){
    //  console.log(num[i] + 1);
    const assignArray = () => {
        return object = placeholders[i] +" " + nums[i];
    }
    console.log(assignArray());
    


};
 


