// 1) Iterate 0 to 10 using for loop, do the same using while and do while loop
//   - For loop
//for (let i = 1; i < 11; i++) {
//  console.log(i)
//}

//   - While Loop
//let j = 1
//while (j < 11) {
//  console.log(j)
//  j++
//}

//   - Do While Loop
//let k = 1;
//do {
//  console.log(k)
//  k++
//} while (k < 11)

// 2) Iterate 10 to 0 using for loop, do the same using while and do while Loop
//   - For Loop
//for (let l = 10; l > 0; l--) {
//  console.log(l)
//}

//   - While Loop
//let m = 10;
//while (m > 0) {
//  console.log(m)
//  m--
//}

//   - Do While Loop
//let p = 10;
//do {
//  console.log(p)
//  p--
//} while (p > 0)

// 3) Iterate 0 to n using for loop
//let n = 5;
//for (let o = 0; o <= n; n++) {
//  console.log(o)
//}

// 4) Write a loop that makes the following pattern using console.log():
//for (let s = 0; s < 8; s++) {
//  let returnArr = [];
//  for (let q = 0; q < s; q++) {
//    returnArr.push('#')
//  }
//  let returnString = returnArr.join('')
//  console.log(returnString)
//}

// 5) Use loop to print the following pattern:
// for (let r = 0; r < 11; r++) {
//   let num = 0;
//   for (let t = 0; t < r; t++) {
//     num++
//   }
//   console.log(`${num}\tx\t${num}\t=\t${num * num}`)
// }

// 6) Using loop print the following pattern
//console.log(`i\ti^2\ti^3`)
//for (let u = 0; u < 11; u++) {
//  let num = 0;
//  for (let v = 0; v < u; v++) {
//    num++
//  }
//  console.log(`${num}\t${num ** 2}\t${num ** 3}`)
//}

// 7) Use for loop to iterate from 0 to 100 and print only even numbers
//for (let w = 0; w < 101; w++) {
//  if (w % 2 === 0) {
//    console.log(w)
//  }
//}

// 8) Use for loop to iterate from 0 to 100 and print only odd numbers
//for (let x = 0; x < 101; x++) {
//  if (x % 2 === 1) {
//    console.log(x)
//  }
//}

// 9) Use for loop to iterate from 0 to 100 and print only prime numbers
let number = 100;
for (let y = 0; y < number; y++) {
  for (let z = 0; z < Math.sqrt(number); z++) {
    if (number % z === 0) {
      console.log(false)
    }
    else {
      console.log(true)
    }
  }
}

// 10) Use for loop to iterate from 0 to 100 and print the sum of all numbers. 
let sum = 0
for (let a = 0; a < 101; a++) {
  let i = a

}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`)
