//Function #1: Array Slice

const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
console.log(foods);
let modifiedFood = [];
modifiedFood = foods.slice(1, 4);
console.log(modifiedFood);

// Function #2: Array Splice

foods.splice(2, 0, "noodles", "icecream");
console.log(foods);

// Function #3: Filter
function isEven() {
  const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
  numberArray.filter(function (element, index, array) {
    if (element % 2 == 0) {
      console.log(element);
    }
  });
}
isEven();

// Function #4: Reject
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
function isPrime(numberArray) {
  let prime = numberArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });

  console.log(prime);
}

isPrime(numberArray);

//Function #5: Lambda
isEven = (numberArray) => {
  numberArray.filter(function (element) {
    return element % 2 === 0;
  });
  console.log(element);
};

//Function #6: Map
function findSquareOfNumbers(element, index, array) {
  const myArray = [11, 34, 20, 5, 53, 16];
  myArray.map(function (element, index, array) {
    console.log(element * element);
  });
}
findSquareOfNumbers();

//Function #7: Reduce

function multiply(element, index, array) {
  const myArray = [2, 3, 5, 10];
  let multiply = myArray.reduce(function (initial, element) {
    return initial * element;
  });
  console.log(multiply);
}
multiply();
