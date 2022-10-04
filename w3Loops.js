//Write a JavaScript program that accept two integers and display the larger.

const prob1 = [2, 10, 20, 17, 5, 8, 1];
let largestNum = 0
for(n=0; prob1.length > n; n++) {
    if (prob1[n] > largestNum) {
        largestNum = prob1[n]
    }
}

console.log(largestNum);

//Write a JavaScript conditional statement to find the sign of product of three numbers. 
//Display an alert box with the specified sign.

let x= 3
let y = -10
let m = -4

if ( x > 0 && y >0 && m >0) {
    console.log("+");
} else if (x < 0 && y < 0 && m > 0 || m< 0 && x < 0 && y> 0|| m < 0 && y < 0 && x > 0 ) {
    console.log("+");
} else {console.log("-")
}
