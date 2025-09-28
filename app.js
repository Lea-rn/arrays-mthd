///////// slice /////// 
///// khdhit copie ; d'ont change the  original  array .... 
////// mate7ssebech el end number ..

// let arr = ["a","b","c","d","e","f"]

// console.log(arr)

// console.log(arr.slice(2,4))
// console.log(arr)


/////// splice ////// 
///// tfasakh partie ; change the original array

// let arr = ["a","b","c","d","e","f"]

// console.log("before" , arr)

// arr.splice(3,3)

// console.log("after" , arr)



////// spread operator (...)::: 

// let arr = ["a","b","c","d","e","f"]


// const x = [
//     {name : "flen" , country : "tunisia"} , 
//         {name : "paul" , country : "denmark"} , 
// ]


// console.log(...x)


///// reverse //// 


// let arr = ["a","b","c","d","e","f"]

// console.log(arr)

// arr.reverse()

// console.log(arr)

////// concat ::: 

// let arr = ["a","b","c","d","e","f"]
// let x = ["j" , "k" , "l" , "m"]

// console.log(arr)
// console.log(x)

// let z = arr.concat(x.reverse())
// console.log(z)

/////// at :: 


// let arr = ["a","b","c","d","e","f"]

// console.log(arr[2])

// console.log(arr.at(2))



///////// for //////////////// 

// let numbers = [1,2,3,4,5,6,7,8,9,10] ; 

// for (let i = 0 ; i < numbers.length ; i++){
//    console.log(numbers[i])
// }



// for (let i = numbers.length-1 ; i >= 0 ; i-- ){
//     console.log(numbers[i])
// }

////// automatic for :: 
// let numbers = [1,2,3,4,5,6,7,8,9,10] ; 
// for (const ele of numbers) {
//     console.log(ele)
// }


// const movements = [200,450,-400,1000,-800,100] ; 

// for (const mov of movements) {
//     if (mov > 0) {
//         console.log(`you deposit : ${mov}`)
//     } 
//     else {
//         console.log(`you withdraw : ${Math.abs(mov)}`)  
//     }
// }



////// forEach (higher order function) ///////////////

const movements = [200,450,-400,1000,-800,100] ; 

///// syntaxe :: array.forEach(function (){
// } )   ; 

// movements.forEach(function(ele , i ){
// if (ele > 0){
//     console.log(`movement ${i+1} : you deposit ${ele}`)
// } else {
//     console.log(`movement ${i+1} : you withdraw ${Math.abs(ele)}`)
// }
// })


///////////// break with forEach and for /////////////////////////////////////
// const names = ["jhon" , "peter" , "mark"] ;

// for (const x of names) {
//     if (x === "peter") break  ; 

//     console.log(x)
// }

// names.forEach((name , index)=> {
//     if (name === "peter") break ; 
//      console.log(name)
// })


///////// sort ::: 

// let numbers = [10,2,5,100,6,9,30] ; 
// console.log(numbers)  

// const result = numbers.sort((a,b)=> a - b )
// console.log(result)


// const names = ["dddd" , "cccc" , "aaaa" , "aAaa"] ;

// const result = names.sort((a,b)=> a.localeCompare(b))
// console.log(result)









///////////////////////////////////////////////////

// ////// function expression  ::

// const x = function (){
//     console.log("hello")
// }

// ///// function declaration :: 

// function y (){

// }

// ////// arrow function :: 

// const z = ()=> {}


// x()  ////// invocation ; call the function ; run the function 


////// challange :: 
////////////////////////////////////////////////// problem solving /////////////////////////////////// 



// Easy Problems::////////////////////////////////////////////
// Append an Element:
// const arr = [1,2,3,4,5]
// Given an array of numbers, add a new number to the end of the array .
////////////////////
/// answer ::
//  const arr = [1,2,3,4,5]
//  arr.push(6)
//  console.log(arr)




////// put your answer here ...........

// Remove the Last Element:
// Remove the last element from an array .




////// put your answer here ...........
// arr.pop()
//  console.log(arr)


//////////////

// Insert at the Beginning:
// Add an element at the start of an array .
////////////////////
// const arr = [1,2,3,4,5]

////// put your answer here ...........
// const arr = [1,2,3,4,5]

// arr.unshift(0)
// console.log(arr)


// Remove the First Element:
// Remove the first element from an array .
/////////////////
// 
////// put your answer here ...........

// arr.shift()
// console.log(arr)





// Check if Element Exists:
// Write a function that checks if a given element exists .
// const arr = [1,2,3,4,5]

  //// boolean ==> true or false


////// put your answer here ...........

// const arr = [1,2,3,4,5]

// function check (ele , array){
// let message = array.includes(ele) ?  "element exist" : "element does not exist"
// console.log(message)
// }



// check(20 , [5,30,20,80])







// Combine two arrays into one .

///////////////////

// const arr = [1,2,3,4,5]
// const arr2 = [6,7,8,9,10]

// ////// put your answer here ...........

// const arr3 = arr.concat(arr2)

// console.log(arr)
// console.log(arr2)

// console.log(arr3)





// Reverse an Array:
// Reverse the elements in an array .
// const arr2 = [6,7,8,9,10]

////// put your answer here ...........

// const arr2 = [6,7,8,9,10]
// console.log(arr2)
// console.log(arr2.reverse())











//////////////////

// Slice a Subarray:
// Extract a subarray from a given array. Return elements between index 2 and 5.
// const arr2 = [6,7,8,9,10,20,30,50,60]

////// put your answer here ..........
////////////////////

// const arr2 = [6,7,8,9,10,20,30,50,60]

// console.log(arr2)
// console.log(arr2.slice(2,6))






// Splice :
//  remove 3 elements from an array starting from index 2.
// const arr2 = [6,7,8,9,10,20,30,50,60]

////// put your answer here ...........
///////////////////////////

// const arr2 = [6,7,8,9,10,20,30,50,60]
// console.log(arr2)

// arr2.splice(2,3)
// console.log(arr2)





// Intermediate Problems:::://///////////////////////////////////////////////

// Sum of Array Elements:
// Write a function that uses forEach to calculate the sum of all elements in an array.

////// put your answer here ...........
///////////////////////
// const arrOfNumbers= [1,2,3,4,5,6] ; 

// const sumNumOfArray = function (arr){

// const arrOfNumbers= [1,2,3,4,5,6]

// const sumNumOfArray = function (arr){
//   let sum = 0 ; /// 1  // 3  // 6
//     arr.forEach((ele)=> sum = sum + ele)   ///// 0 = 0 + 1 ; 1 = 1 + 2 ; 3 = 3 + 3
//     return sum 
// }

// console.log(sumNumOfArray(arrOfNumbers))
  










// Remove Element by Index:
// Given an array, remove the element at a specific index using splice.
////// put your answer here ...........
// const arrOfNumbers= [1,2,3,4,5,6]
// console.log(arrOfNumbers)
// let indexToRemove = 3 ; 

// arrOfNumbers.splice(indexToRemove , 1 )

// console.log(arrOfNumbers)






///////////////////////

// Replace Elements :
// Replace the second and third elements of an array with two new values using splice.
////// put your answer here ...........
/////////////////////

// const names = ["jhon" , "peter" , "mark"] 

// names.splice(1,2 , 10 , 50)
// console.log(names)











// Extract Last 3 Elements:
// Use slice to get the last 3 elements from an array.
////// put your answer here ...........

//  const arrOfNumbers= [1,2,3,4,5,6]
//  console.log(arrOfNumbers.slice(-3))

////////////////////








// Concatenate and Sort:
// Concatenate two arrays, then sort the result in ascending order.
////// put your answer here ...........
////////////////////
// const arr1 = [5,3,2,1,4] 
// const arr2 = [9,8,6,10,7]
// console.log(arr1)
// console.log(arr2)
// const arr3 = arr1.concat(arr2)
// arr3.sort((a,b)=> a- b)

// console.log(arr3)













// Find Maximum Number:
// Use forEach to find the largest number in an array.
////// put your answer here ...........

////////////////
const arr2 = [0,8,6,10,7 ,11 ,13]

///// first method :: 

function max (arr){
let maxNumber = arr[0] ;    //// 13
  arr.forEach((num)=> {
    if (num > maxNumber) {
        maxNumber = num
    }
  })
  return maxNumber
}

console.log(arr2)
console.log(max(arr2))















// Count Occurrences of a Value:
// Write a function that counts how many times a specific value appears in an array using forEach.


////// put your answer here ...........

// const numbers = [1,10,2,10,5,6,10,100,6]







// Filter Negative Numbers:
// Use forEach  to remove all negative numbers from an array.

////// put your answer here ...........
// const numbers = [-1,-2,-3,10,-100,6,9,70]  ;


////////////////////






// Flatten an Array of Arrays:
// Use concat and forEach to flatten an array of arrays (e.g., [[1, 2], [3, 4]] into [1, 2, 3, 4]).
////////////////////////////////
// const arr = [[1,2,3],[10,20,30],[50,60,100]]
// console.log(arr) /////====> [1,2,3,10,20,30,50,60,100]

////// put your answer here ...........





// Advanced Problems:://////////////////////////////////////////////////////////////////////////////

// Remove Duplicates from an Array:
// Use forEach and includes to remove duplicates from an array.
////// put your answer here ...........
// const numbers = [2,10,5,7,10,8,50,10,50,8,200] ;






//////////////////////////////////

// Create a New Array Without Specific Elements:
// Write a function that removes all occurrences of a specific value from an array using forEach and splice.
////// put your answer here ...........






// Sort an Array in Descending Order:
// Create a function that sorts an array in descending order using reverse and the sort method.
////// put your answer here ...........




//////////////////////////////////////

