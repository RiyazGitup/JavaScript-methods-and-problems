let age = 27;
let salary = 600000;
let intial = 'm';
let greeting = "Good morning'Admin'";
let isCheck = true;
let isApproved = false;
console.log(isApproved);

let roletype = 'admin';
let role = document.getElementById('role');
console.log(role)
// role.innerText=roletype;
//role.innerHTML='<mark>'+roletype+'</mark>';
//role.style.color='blue';
//role.style.backgroundColor='red';

// role.className='role-type';

let role1 = 'Page';
let newrole = document.getElementById('newrole');
console.log(newrole)
// newrole.innerText=role1;
//rolenew.style.color='blue';
// newrole.className='new-role';

// object type
let address = {
    city: 'chennnai',
    country: 'IN',
    pincode: 600020,
    contact: {
        email: 'abc@gmail',
        ph: 7010603024
    }
}
console.log(address['city']);

let fruits = ['apple', 'orange'];
console.log(fruits[1]);
let persons = [{ fname: 'riyaz', lname: 'sandy' },
{ fname: 'roshan', lname: 'vel' }
]
console.log(persons[1].fname)

let sample = [0, 'park', false, 'Riyaz', { id: 1, new: 2 },
    ['98', '56']
]
console.log(sample[4][1]);

let person = {
    fname: 'mark',
    lname: 'antony',
    age: 27

}
//Object.keys(objectName)
let k = Object.keys(person)
console.log(k);
let details = document.querySelector('#details');
for (let ele of k) {
    console.log(ele, person[ele])
    let list = document.createElement('li');

    list.innerText = ele + " - " + person[ele];
    // details.appendChild(list);
    console.log(list);

}
//object.values(objectName)
for (let ele of Object.values(person)) {
    console.log(ele, person[ele]);
}
//object.entries(objectName)
for (let [k, v] of Object.entries(person)) {
    console.log(v);
}




let fruits1 = ['apple', 'orange', 'banana'];
for (let i in fruits1) {
    console.log(fruits1[i]);
}
for (let i = 0; i < fruits1.length; i++) {
    console.log(i);
}
// //looping

let r = 0;
while (r < 5) {

    console.log(r);
    r++;

}
let persons1 = [{ id: 1, fname: 'abs', lname: 'roshan' },
{ id: 2, fname: 'ags', lname: 'ram' }]
//while
let i = 1;
while (i < persons1.length) {
    console.log(persons1[i]);
    i++;
}
// let g=3
// while(g<5){
//   console.log('Boomer');
// }


// Do while
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 2);

// //if
let agess = 67;
if (agess <= 18) {
    console.log('child');

}
// else if
else if (agess >= 19 && agess < 65) {
    console.log('senior');
}
else {
    console.log('supersenior')
}


let rank = 10
if (rank <= 3) {

    console.log('Toppers');
}
else if (rank > 3 && rank <= 6) {
    console.log('Average cat');


}
else {
    console.log('poor');
}

// ternary operator
let ages = 25
let statu = ages < 18 ? 'child' : ages >= 18 && ages < 65 ? 'senior' : ages > 65 ? 'supersenior' : 'not valid';
console.log(statu);

let eligibleAging = 69;
let passengers = eligibleAging < 18 ? 'Children' : eligibleAging > 18 && eligibleAging < 45 ? 'Adults' : eligibleAging >= 45 && eligibleAging < 65 ? 'Super Senior' : 'Not  eligable';
console.log(passengers);


// switch case

let grade;
switch (grade) {
    case 'a':
        console.log('Excellent pass');
        break
    case 'b':
        console.log('Good pass');
        break
    case 'e':
        console.log('just pass');
        break
    default:
        console.log('notdefined');
}

// Switch Case

let month = 2;

switch (month) {
    case 0:
        console.log('january');
        break;
    case 1:
        console.log('february');
        break;
    case 2:
        console.log('march');
        break;
    case 3:
        console.log('april');
        break;
    default:
        console.log('undefined value')
}

//methods
//numbers

let a = '5', b = 5;
console.log(a == b);
let c = String(a);
console.log(c, typeof c);
console.log(b === String(a));


//string methods
//method1

let greetings = 'Hello world';
console.log(greetings.search('L'));

//method 2
let fname = 'ram', lname = 'kumar';
console.log(fname + lname);

//method 3

let address1 = '          k k nagar    ';
let d = address1.trim();
console.log(d);

//method 4

let msg = 'Good Morning Good afternoon';
// let m1=msg.replace('Good','happy');
let m1 = msg.replaceAll('Good', 'happy');

console.log(m1);


let prayer = 'jai lord jai lord';
let change = prayer.replace('jai', 'oh')
console.log(change);
//method 5 (string to array)

let Bike = 'Duke,R15,Ninja';
let moto = Bike.split(',');
console.log(moto);


//Arrays methods
//push-to add last index

let person1 = ['ram', 'raja', 'vanitha'];
person1.push('ravi');
//pop-to delete last index
console.log(person1);

person1.pop('ravi');
console.log(person1);
//unshift-to add starting index

person1.unshift('raju');
console.log(person1);

//shift-to delete starting index

person1.shift();
console.log(person1);

//splice-particular index add,Remove,add&rwemove

//add

person1.splice(2, 0, 'vanith');
console.log(person1);

//delete

person1.splice(2, 1, 'vinith');
console.log(person1);

//add&delete

person1.splice(2, 1, 'roja', 'annu');
console.log(person1);

//slice
let p1 = person1.slice(1, 3)
console.log(p1);

//joins

let p2 = person1.join(' ')
console.log(p2);
let f = person1.indexOf(item => { return item == 'vanitha' });
console.log(f);


// }
// console.log(result)

// Event Handling

// let handleclick=()=>{
//   alert('hai')
// }
// }
function handleclick() {
    console.log('');
}
function keypress() {
    console.log('keypress');

}
function mousehover() {
    console.log('');
}
function inputex() {
    console.log('');

}
function submitBtn() {

    console.log('submitBtn');
}
// For each method

let Bikes = ['R15', 'Duke', 'Ninja']
Bikes.forEach(function (bike) {
    console.log(bike);

})
// Bikes.forEach(function(New){
// console.log(New);
// Type of method

var x = 0;
console.log(typeof (x));
var x = 'Riyaz'
console.log(typeof (x));
var x = true;
console.log(typeof (x));

// odd&Even using Loop

for( let i=0;i<=100;i++){
    if(i%2!==0){
        console.log(i);
    }
}

// object method

const obj = {
  name: "santhosh",
  location: "adyar"
}

console.log(obj);

// string.length
const str = "Hello, world!";
const strLength = str.length;
console.log(strLength);  // Output:13

// string.slice()
const str1 = "Hello, world!";
const slicedStr = str1.slice(0,5);
console.log(slicedStr); // Output: "Hello"

// String substring()
const str2 = "Hello, world!";
const subStr = str2.substring(0,5);
console.log(subStr); // Output: "world"

// String substr()
const str3 = "Hello, world!";
const subStr1 = str3.substr(7, 12);
console.log(subStr1); // Output: "world"

// String toUpperCase()
const str4 = "Hello, world!";
const upperCaseStr = str4.toUpperCase();
console.log(upperCaseStr); // Output: "HELLO, WORLD!"

// String toLowerCase()
const str5 = "Hello, world!";
const lowerCaseStr = str4.toLowerCase();
console.log(lowerCaseStr); // Output: "hello, world!"

// String concat()
const str6 = "Hello";
const str7 = "world";
const str8 = str6.concat(" ",str7);
console.log(str8); // Output: "Hello world"

// String trim()
var str9 = "   Hello, World!   ";
var trimmedStr = str9.trim();
console.log(trimmedStr);; // Output: "Hello, World!"

// String trimStart()
let str10 = "   Hello, World    !";
let trimmedStr1 = str10.trimStart();
console.log(trimmedStr1); // Output: "Hello, World!   "

// String trimEnd()
let str11 = "    Hello, World      ";
let trimmedStr2 = str11.trimStart();
console.log(trimmedStr2); // Output: "   Hello, World"

// String padStart()
let str12 = "hello";
let paddedStr = str12.padStart(10, "-");
console.log(paddedStr); // Output: "-----hello"

// String padEnd()
let str13 = "hello";
let paddedStr1 = str13.padEnd(10, "-");
console.log(paddedStr1); // Output: "hello-----"

// String charAt()
let str14 = "hello";
let char = str14.charAt(3);
console.log(char); // Output: "e" doubt

// String charCodeAt()
let str15 = "hello";
let charCode = str15.charCodeAt(1);
console.log(charCode); // Output: 101

// String split()
let str16 = "HelloWorld!";
let arr1 = str16.split('');
console.log(arr1); // Output: ["Hello", "World", "!"]

// Startswith()
const str17 = 'Hello, world!';
console.log(str17.startsWith('Hello')); // true
console.log(str17.startsWith('hello')); // false
console.log(str17.startsWith('world',  7)); // true

// Endswith
const str18 = 'Hello, world!';
console.log(str18.endsWith('world!')); // true
console.log(str18.endsWith('World!')); // false
console.log(str18.endsWith('Hello', 5)); // true

// <!-- Number methods -->

// isNAN()

let x0 = 5;
let y0 = "hello";

console.log(isNaN(x0)); // Output: false
console.log(isNaN(y0)); // Output: true doubt

// isFinite() 
let x1 = 5;
let y1 = "hello";
let z = Infinity;

console.log(isFinite(x1)); // Output: true
console.log(isFinite(y1)); // Output: false
console.log(isFinite(z)); // Output: false

// isInteger() 
let x3 = 5;
let y3 = 5.5;
let z3 = "5";

console.log(Number.isInteger(x3)); // Output: true
console.log(Number.isInteger(y3)); // Output: false
console.log(Number.isInteger(z3)); // Output: false

// parseInt()
let x4 = "10";
let y4 = "5.5";
let z4= "hello";

console.log(parseInt(x4)); // Output: 10
console.log(parseInt(y4)); // Output: 5
console.log(parseInt(z4)); // Output: NaN doubt

// toString() 
let x5 = 10;
let y5 = true;

console.log(x5.toString()); // Output: "10"
console.log(y5.toString()); // Output: "true"

// valueOf() 
let x6 = new Date();
let y6 = "hello";

console.log(x6.valueOf()); // Output: <number>
console.log(y6.valueOf()); // Output: "hello" doubt

// toFixed() 
let x7 = 10.12345;
let y7 = 5;

console.log(x7.toFixed(2)); // Output: "10.12"
console.log(y7.toFixed(3)); // Output: "5.000"

// Number()
let x8 = "10";
let y8 = "10.12345";
let z8 = "hello";

console.log(Number(x8)); // Output: 10
console.log(Number(y8)); // Output: 10.12345
console.log(Number(z8)); // Output: NaN
