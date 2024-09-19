// Question 1
function calculateDifference(num1, num2){
  return console.log(`Difference is : ${Math.abs(num1-num2)}`);
}
calculateDifference(5,3);



// Question 2
function isOdd(num){
  return console.log(num%2 !== 0);
}
isOdd(2);



// Question 3
let array3 = [10,4,5,6,7,1,3,9];
function findMin(array){
  return console.log(array.sort((a,b)=>a-b)[0]);;
}
findMin(array3);



// Question 4
let array4 = [10,4,5,6,7,1,3,9];
function filterEvenNumbers(array){
  return console.log(array.filter(item=> item%2==0));
}
filterEvenNumbers(array4);



// Question 5
let array5 = [10,4,5,6,7,1,3,9];
function sortArrayDescending(array){
  return array.sort((a,b)=>b-a);
}
console.log(sortArrayDescending(array5));


// Question 6
function lowercaseFirstLetter(str){
  return console.log(str.slice(0,1).toLowerCase()+str.slice(1));
}
lowercaseFirstLetter("RUME");



// Question 7
function countVowels(str){
  let count=0;
  Array.from(str.toLowerCase()).filter((char)=> "aeiou".includes(char)? count++:'');
  return count;
}
console.log(countVowels("RUme"));



// Question 8
let array8 = [10,4,5,6,7,1,3,9];
function findAverage(array){
  let sum = array.reduce((sum,element)=>sum+element,0);  
  return sum/array.length;
}
console.log(findAverage(array8));
