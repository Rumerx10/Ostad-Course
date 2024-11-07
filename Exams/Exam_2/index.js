// Question 1
function reverseString(str){
  new_string = '';
  let arr = Array.from(str);
  for(let i=arr.length-1; i>=0; i--){
    new_string = new_string+arr[i];
  }
  return new_string;
}
console.log(reverseString("hello"));




// Question 2
function sumArray(arr){
  return arr.reduce((sum,num)=>sum+num,0)
}
console.log(sumArray([1,2,3,4]));




// Question 3
function removeDuplicates(arr){
  // return [...new Set(arr)];
  let new_arr = [];
  arr.sort((a,b)=>a-b);
  for(let i=0; i<arr.length-1; i++){
    if(arr[i]===arr[i+1]) continue;
    else new_arr.push(arr[i]);
  }
  new_arr.push(arr[arr.length-1]);
  return new_arr;
}
console.log(removeDuplicates([5,5,5,6,7]));




// Question 4
function celsiusToFahrenheit(celsius){
  return (celsius*9/5)+32;
}
console.log(celsiusToFahrenheit(25));

