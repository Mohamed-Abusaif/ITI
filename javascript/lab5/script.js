const getData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (response.status !== 200) {
      throw new Error("Network response was not ok");
    }
    const userData = await response.json();
    return userData; // Properly return the data
  } catch (error) {
    console.error("Error:", error);
  }
};
const tableHeaders = [
  "ID",
  "Name",
  "Username",
  "Email",
  "Address",
  "Phone",
  "Website",
  "Company",
];
const tableHeader = document.getElementById("tableHeader");
console.log(tableHeader);

//display the table headers
for (let i = 0; i < tableHeaders.length; i++) {
  let el = document.createElement("th");
  el.innerHTML = tableHeaders[i];
  tableHeader.append(el);
}

const displayData = async () => {
  const dataToDisplay = await getData();
  console.log(dataToDisplay.length);
  let tableBody = document.getElementById("table-body");
  for (let i = 0; i < dataToDisplay.length; i++) {
    const { street, suite, city, geo, zipcode } = dataToDisplay[i].address;
    const { lat, lng } = geo;
    const fullAddress = `${street} - ${suite} - ${city} - ${zipcode} - ${lat} - ${lng}`;
    var tr = document.createElement("tr");
    tr.innerHTML = `
      <th scope="row">${dataToDisplay[i].id}</th>
      <td>${dataToDisplay[i].name}</td>
      <td>${dataToDisplay[i].username}</td>
      <td>${dataToDisplay[i].email}</td>
      <td>${fullAddress}</td>
      <td>${dataToDisplay[i].phone}</td>
      <td>${dataToDisplay[i].website}</td>
      <td>${Object.values(dataToDisplay[i].company).join(", ")}</td>
    `;
    tableBody.append(tr);
  }
};
displayData();

// <td>${Object.values(dataToDisplay[i].address)
//   .join(", ")
//   .concat(lat)
//   .concat(lng)}</td>

// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//           "lat": "-37.3159",
//           "lng": "81.1496"
//       }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//   }
// }
console.log(
  "--------------------------------------------------------------------"
);
let count = 0;
class Vehicle {
  constructor(type, speed) {
    this.type = type;
    this.speed = speed;
    count++;
    if (count > 7) {
      throw new Error("Cannot create more than 7 vehicles");
    }
    Vehicle.count++;
  }
  start() {
    console.log("Engine Started");
  }
  stop() {
    console.log("Engine Stopped");
  }
  numCheck() {
    if (Vehicle.count < 6) {
      console.log("v created");
    } else {
      throw new Error("Vehicle limit exceeded");
    }
  }
}
Vehicle.count = 0;
class Car extends Vehicle {
  constructor(type, speed) {
    super(type, speed);
  }
  drive() {
    console.log("I'm driving the car now!");
  }
}

try {
  const car1 = new Car("Sedan", 120);
  car1.start();
  car1.drive();
  car1.stop();
} catch (err) {
  console.error(err.message);
}

function checkCar1(obj) {
  if (obj instanceof Car) {
    console.log("Type of the Object is Car!");
  } else {
    console.log("Type of the object is not a Car!");
  }
}
function checkCar2(obj) {
  var objPrototype = Object.getPrototypeOf(obj);
  // console.log(objPrototype);
  if (objPrototype.drive) {
    console.log("Object is a Car!");
  } else {
    console.log("Object is not a Car!");
  }
}
