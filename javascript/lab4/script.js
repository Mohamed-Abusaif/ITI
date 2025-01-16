//task 1:
Array.prototype.average = function () {
  var sum = 0;
  var length = this.length;
  this.forEach(function (el) {
    sum += el;
  });
  console.log(sum);
  console.log(length);
  return sum / length;
};

var arr = [1, 2, 3, 4];
console.log(arr.average());

//task 2:
//a
Object.prototype.toString = function () {
  console.log("This is an object");
};
var obja = {};
String(obja);

//b
var obj = {
  __proto__: Object,
  message: "This is a message",
};
obj.toString = function () {
  console.log(this.message);
};
String(obj);

//task 3:
var count = 0;
function Vehicle(type, speed) {
  this.type = type;
  this.speed = speed;
  count++;
  if (count > 7) {
    throw err;
  }
  // Vehicle.count = Vehicle.count + 1;
  // console.log("hello");
  // Vehicle.numCheck();
}
Vehicle.count = 0;
Vehicle.prototype.start = function () {
  console.log("Engine Started");
};
Vehicle.prototype.stop = function () {
  console.log("Engine Stopped");
};
Vehicle.prototype.numCheck = function () {
  if (Vehicle.count < 6) {
    console.log("v created");
  } else {
    throw err;
  }
};
// Vehicle.prototype.getCount = function () {
//   return Vehicle.count;
// };
function Car(type, speed) {
  Vehicle.call(this, type, speed);
}
Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.constructor = Car;
Car.prototype.drive = function () {
  console.log("I'm driving the car now!");
};

try {
  var v1 = new Vehicle("Hello", 500);
  var v2 = new Vehicle("Hello", 500);
  var v3 = new Vehicle("Hello", 500);
  var c1 = new Car("BMW", 600);
  var c2 = new Car("Kia", 400);

  console.log(c1);
  console.log(c2);

  checkCar1(c1);
  checkCar2(v1);
  console.log("Numver of Vehicles is: " + count);
  // console.log(Vehicle.getCount());
} catch (err) {
  console.log("Vehicle limit reached!");
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
  if(objPrototype.drive){//objectPrototype === Car.prototype
    console.log("Object is a Car!");
  }
  else{
    console.log("Object is not a Car!")
  }
}
