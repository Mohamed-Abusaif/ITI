// var user = {
//     firstName: 'somaya',
//     lastName: 'ahmed',
//     // getFullName: function(){
//     //     return `${this.firstName} ${this.lastName}`
//     // },
// get fullName(){
//     return `${this.firstName} ${this.lastName}`        
// },
// set fullName(value){
//     var name = value.split(' ')
//     this.firstName = name[0]
//     this.lastName = name[1]
// }
// }

// var userName = user.fullName;
// console.log(userName);

// user.fullName = 'mohamed ali'
// console.log(user.fullName);
// // console.log(user.fullName);

// user.fullName = 'aya mohamed';
// console.log(user.fullName);
// console.log(user.firstName);

function newFun(arg1, arg2) {
    console.log(arg1);
    // console.log(this.firstName);
}

// newFun.call
// newFun.apply
// newFun.bind

// newFun.call(user, 'hello', '')

// newFun.apply(user, ['hello', ''])


// var copyFunc = newFun.bind(user, 'NEW ARG')

// copyFunc()

// newFun()


// var user = {
//     firstName: 'somaya',
//     lastName: 'ahmed',
//     getFullName: function () {
//         return `${this.firstName} ${this.lastName}`
//     },
//     getAProp: function(){
//         return this.isAdmin
//     }
// }

// var admin = {
//     isAdmin: true,
//     deleteUser: function () {
//         console.log('user deleted!');
//     },
//     // __proto__: user
//     //+user
// }
// // admin.__proto__ = user; == Object.setPrototypeOf(admin, user)
// Object.setPrototypeOf(admin, user)
// console.log(admin);
// // console.log(admin);

// var guest = {
//     phoneNumber: '0112839303'
// }
// guest.__proto__ = user

// user.firstName = 'Mohamed'
// // console.log(guest);
// console.log(admin.getAProp());

// // admin -> user -> Object.protoype -> null


var user = {
    firstName: 'new',
    lastName: 'user',
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value) {
        var name = value.split(' ')
        this.firstName = name[0]
        this.lastName = name[1]
    }
}


var admin = {
    __proto__: user,
    isAdmin: true,
    deleteUser: function () {
        console.log('admin deleted User');
    },
}


var superAdmin = {
    __proto__: admin,
    isSuperAdmin: true,
    deleteAdmin: function () {
        console.log('admin deleted!');
    },
    deleteUser: function () {
        console.log('Super admin deleted User');
    },
}


// console.log(superAdmin.firstName); // new
// console.log(user.isAdmin); // undefined


// superAdmin -> admin -> user -> Object.prototype -> null

// superAdmin.__proto__ = {} or null;
// Object.setPrototypeOf(admin, 'aaa')
// console.log(superAdmin.deleteUser());

// admin.__proto__ = superAdmin


var obj = { a: 1, b: 2 }

// for (var key in superAdmin) {
//     console.log(key);
//     // if(superAdmin.hasOwnProperty(key)) console.log(`has own property: ${key}`);
//     // else console.log(`inherited property: ${key}`);
// }
// not enumerable 
// by default enumerable
// console.log(superAdmin);

// console.log(Object.values(superAdmin));


// var animal = {
//     jumps: null
// }

// var rabbit = {
//     __proto__: animal,
//     jumps: true
// }

// console.log(rabbit.jumps); // true

// delete rabbit.jumps

// console.log(rabbit.jumps); // null

// delete animal.jumps

// console.log(rabbit.jumps); // undefined

// console.log(superAdmin);



// console.time('superAdmin')

// console.timeEnd('superAdmin')


// console.time('user')

// console.timeEnd('user')


// var animal = {
//     eat: function () {
//         this.isFull = true;
//     }
// }

// var rabbit = {
//     __proto__: animal,
// }


// rabbit.eat()
// console.log(animal.isFull); // undefined 
// console.log(rabbit.isFull); // true

/* FUNCTION CONSTRUCTORS */

var boxProperties = {
    getValue() {
        return this.value
    }
}

// var boxes = [
//     { value: 1, __proto__: boxProperties },
//     { value: 2, __proto__: boxProperties },
//     { value: 3, __proto__: boxProperties },
//     { value: 4, __proto__: boxProperties },
//     { value: 5, __proto__: boxProperties },
// ]

function Box(value) {
    this.value = value;
    // this.getValue = function () {
    //     return this.value
    // }
}
Box.prototype.getValue = function () {
    return this.value
}

var box1 = new Box(1)
var box2 = new Box(2)
var box3 = new Box(3)
var box4 = new Box(4)

Box.prototype.getValue = function () {
    return ' NO VALUE HERE !'
}

console.log(box2.getValue());
// console.log(box2.getValue());
// var boxes = [
//     new Box(1), 
//     new Box(2),
//     new Box(3)
// ]

Array.prototype.log = function () {
    console.log('this is an array!');
}


Object.defineProperty(admin, 'newProp', {
    value: 'this is a new prop',
    writable: false,
    enumerable: false
})

user.prop = 'value'