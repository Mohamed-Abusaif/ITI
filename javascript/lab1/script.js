console.log("Hello World!");

//Check Palindrome:
function isPalindrome(str) {
  if (str === undefined || str === null) {
    return false;
  }
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}
// var s = "HeheH";
// console.log(isPalindrome(s));

console.log("-----------------------------");

//Get Discounted Price:
function discountedPrice(price, discount) {
  if (
    price === undefined ||
    price === null ||
    discount === undefined ||
    discount === null
  ) {
    return "Invalid input";
  }
  if (price < 0 || discount < 0) {
    return "Invalid input";
  }
  return price - (price * discount) / 100;
}

// var price = 100;
// var discount = 10;
// console.log(discountedPrice(price, discount));

console.log("-----------------------------");

//Array of Movies:
var myMovies = [
  "The Dark Knight",
  "Pulp Fiction",
  "Fight Club",
  "Inception",
  "The Matrix",
];
//a
var myMoviesCopy = myMovies;
//b
myMoviesCopy[2] = "The Godfather";
//c
console.log(myMovies[myMovies.length - 1]);
console.log(myMovies.slice(-1));
console.log(myMovies.slice(4));
//d
myMovies.unshift("The Shawshank Redemption");

console.log("-----------------------------");

// Function that accept a sentence and return the longest word
function longestWord(sentence) {
  if (sentence === undefined || sentence === null) {
    return "Invalid input";
  }
  var words = sentence.split(" ");
  var longestWord = "";
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

var sentence = "The quick brown fox jumped over the lazy dog";
console.log(longestWord(sentence));

console.log("-----------------------------");

function userGrades() {
  var userName = prompt("Enter your name: ");
  if (userName === undefined || userName === null) {
    return "Invalid input";
  }
  var userGrades = prompt("Enter your grades in the format: 90,50,30,10");
  if (userGrades === undefined || userGrades === null) {
    return "Invalid input";
  }
  var grades = userGrades.split(",");
  console.log("Welcome " + userName);
  console.log("Grades: ");
  console.table(grades);
  var sum = 0;
  for (var i = 0; i < grades.length; i++) {
    sum += parseInt(grades[i]);
  }
  var avg = sum / grades.length;
  console.log("Average: " + avg);
}

console.log("-----------------------------");

var orders = [
  {
    orderId: "ORD001",
    customer: "John Doe",
    items: "item1:2,item2:1,item3:5",
    orderDate: "2023-12-01",
    deliveryDate: "2023-12-05",
    deliveryAddress: "123, Main Street, Springfield, USA",
  },
  {
    orderId: "ORD002",
    customer: "Jane Smith",
    items: "itemA:3,itemB:4",
    orderDate: "2023-11-15",
    deliveryDate: "2023-11-20",
    deliveryAddress: "Flat 4B, Elmwood Apartments, New York, USA",
  },
  {
    orderId: "ORD003",
    customer: "Alice Johnson",
    items: "itemX:1",
    orderDate: "2023-10-10",
    deliveryDate: "2023-10-15",
    deliveryAddress: "456, Pine Lane, Denver, USA",
  },
];

var formattedOrders = orders.map(function (order) {
  var totalItems = 0;
  var items = order.items.split(",");
  items.forEach(function (item) {
    totalItems += parseInt(item.split(":")[1]);
  });
  var deliveryDuration =
    new Date(order.deliveryDate) - new Date(order.orderDate);
  deliveryDuration = deliveryDuration / (1000 * 60 * 60 * 24);
  var deliveryAddress = order.deliveryAddress.split(",");
  var deliveryCountry = deliveryAddress[deliveryAddress.length - 1].trim();
  var deliveryCity = deliveryAddress[deliveryAddress.length - 2].trim();
  var deliveryStreet = deliveryAddress[deliveryAddress.length - 3].trim();
  var buildingNumber = deliveryAddress[0].trim();
  return {
    orderId: order.orderId,
    customer: order.customer,
    totalItems: totalItems,
    orderDate: order.orderDate,
    deliveryDate: order.deliveryDate,
    deliveryDuration: deliveryDuration,
    deliveryCountry: deliveryCountry,
    deliveryCity: deliveryCity,
    deliveryStreet: deliveryStreet,
    buildingNumber: buildingNumber,
  };
});

console.log(formattedOrders);
