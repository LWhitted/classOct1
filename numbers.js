const arrayOfNums = [0, 4, 7, 18, 21, 19, 142, 3];
let largestNumber = arrayOfNums[0];
//above let is making a variable that give first number in array

//what is hapening in for loop. you are starting at index 0.everytime it increases
//by 1 then it compares to statement hey is 0 greater than 0. then it asks hey is
//0 greater than 0 no. and it keeps going until it does reach the largest number.

function findLargestNumber() {
    for(let i=0; i < arrayOfNums.length; i++){
        console.log(`Our largest number found so far is: ${largestNumber}`)

        if(largestNumber > arrayOfNums[i]){
            console.log(`We have found a larger number. ${arrayOfNums[i]} is larger than ${largestNumber}`);
            largestNumber = arrayOfNums[i];
        }
    }
    return largestNumber;
}

//this is how you find an even number in a loop if(arrayOfNums[i] % 2 === 0) 
//in this function you first are creating an empty array you can push the results into later
function findEvenNumbers() {
    let evenArray = [];
    for (let i=0; i < arrayOfNums.length; i++){
        if(arrayOfNums[i] % 2 === 0) {
            evenArray.push(arrayOfNums[i]);

        }
    }
    return evenArray;
}

//this is how you do the same as the above, but make it produce the odd numbers
//to find odd numbers you would do if(arrayOfNums[i] % 2 === 1)
function findOddNumbers() {
    let oddArray = [];
    for (let i=0; i < arrayOfNums.length; i++){
        if(arrayOfNums[i] % 2 === 1) {
            oddArray.push(arrayOfNums[i]);

        }
    }
    return oddArray;
}
console.log(findOddNumbers());