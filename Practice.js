
// display hello world using button

    function handleHello() {
      document.write('Hello world');
    }


// increment decrement method

function handleClick(click) {
  const handleClick=document.getElementById("handleClick")
  const sumvalue=parseInt(handleClick.innerText)+click
  console.log(sumvalue);
  handleClick.innerText=sumvalue
}
    

    const arr = [10, 9, 4, 1, 3, 200];
    for (let i = 0; i < arr - 1; i++) {
      for (let j = 0; j < arr[i]; j++) {
        if (arr[j] > arr[j + 1]) {
          // swap arr[j] and arr[j+1]
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          console.log(arr);
        }
      }
      console.log(arr);

    }

// Array ascending descending

    const arra = [15, 30, 2, 4, 5];
    arra.sort((a,b)=>b-a);
    console.log(arra);

    // StringReverse method

function stringReverse(str) {
  const spliString=str.split(/[,]+/)
  let finalResult=''
  let cache= ''
  for (let i = 0; i < spliString.length; i++) {
for (let j = 0; j < spliString[i].length; j++) {
cache=spliString[i][j]+cache
}    
finalResult=finalResult+''+cache
cache=''
return finalResult
  }
}
console.log(stringReverse('lets code'));


// create a function findSum(arr=[,n=number]) that takes an
// integer array arr and returns an array of the two integer Element
// that add up to integer n
// arr=[0,1,2,3,4,5,6]
resultArr=6
function findSum(arr,resultArr){
  let expectedRes=[]
  for(let i=0;i<arr.length;i++){
for(let j=i;j<arr.length;j++){
  if((arr[i]+arr[i+j])===resultArr){
    expectedRes.push([arr[i],arr[i+j]])
  }

}

  }
return expectedRes

}

console.log(findSum([0,1,2,3,4,5,6],6))

// Lock example
let Final=[]

function lock(){
for(var Fnum=0;Fnum<10;Fnum++){
  // console.log(Fnum)
  for(var Mnum=0;Mnum<10;Mnum++){
    // console.log(Mnum)
    for(var Lnum=0;Lnum<10;Lnum++){
      // console.log(Lnum)
      if ((Fnum==9)&(Mnum==9)&(Lnum==9)) {
        console.log((Fnum+''+Mnum+''+Lnum))
      }
    }

  }
}
}

console.log(Final)
lock();



// }

// range 1-7
// all are different 
// sum=12
// policedep even num

function numbers() {
  for(let fnum=0;fnum<=7;fnum++){
for(let mnum=0;mnum<=7;mnum++){
for(let pnum=0;pnum<=7;pnum++){
if ((fnum!=mnum && fnum!=pnum && mnum!=pnum)&&(fnum+mnum+pnum  == 12)&&(pnum%2==0)) {
  console.log(fnum,mnum,pnum);
}
}
}
}}
numbers();

// }
// console.log(lockValue)

// map function 

let array=[1,2,3,4,5]
let arr2=array.map((value)=>{
  return value+1  
}
)
console.log(arr2);



// Filtering out values
let num=[1,2,3,1,4,1]
let fin=[1,2,3,1,4,1].filter((value,index)=>{return value===1}

)
console.log(fin);
// palindrome

function paLindrome() {
  var ans=isPalindrome('malayalam')
}
// console.log(ans);

function palinDrome(exa){
let ex=exa.length
for(i=0;i<ex/2;i++){
if(exa[i]!==exa[ex-1-i])
return 'its a palindrom'
}
}
// const val=palinDrome(exa)
// console.log(val);

// Assesment 1 print Even number
for (let j =1; j<=20 ; j++) {
if (j%2==0) {
  console.log(j);  
}  
}
//  Assesment 2. Print the sum of all numbers in an array. Eg: [2, 4,5] . Your output should be 11 ( 2+4+5) 

let sumof=[2,3,4,5]
function sumOfAll(arr) {
  
  let sum=0
  for (let a of arr) 
sum +=a;

  return sum

  
};
console.log(sumOfAll(sumof));

// Assessment 3  Sort an array from lowest to highest. Eg : [9, 5,8,2,6] your output should be [ 2,5,6,8,9]

let lowest=[3,4,6,2,8]
lowest.sort(function(a,b){
  return a-b;
}
);
console.log(lowest);

//  another method
// lowest.sort()
//  console.log(lowest)

// Assessment 4 remove the spaces found in a string. Eg : " Hello wo rld! ". Your output should be " Helloworld!"

let string=( " Helloworld!")
let out=string.trim()
console.log(out);

// Assesment 5 Return true if a number is divisible by 10. Else return false. 

const booleon=(num)=>{
  return num%10===0?true:false;
}
console.log(booleon(8));

// Assesment 6  Remove negative numbers from an array eg: [-3, 2,3,6,-8, -1, 0] your output should be [2, 3,6,0]


let neg=[-1,-4,2,4,6]

neg=neg.filter(function(x){
  return x>-1
}
)
console.log(neg);

// Assesment 7 6. Return the number of vowels in a string
 



  