// 1) Using console.log() print out the following statement:
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")

// 2) Using console.log() print out the following quote by Mother Teresa: 
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

// 3) Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
if (typeof '10' === typeof 10) {
  console.log(true)
}
else {
  if (typeof parseInt('10') === typeof 10) {
    console.log(true)
  }
}

// 4) Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10. 
if (parseFloat('9.8') === 10) {
  console.log(true)
}
else {
  if (Math.round(parseFloat('9.8')) === 10) {
    console.log(true)
  }
}

// 5) Check if 'on' is found in both python and jargon
let python = 'python'
let jargon = 'jargon'
if (python.includes('on') && jargon.includes('on')) {
  console.log(true)
}

// 6) I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence = 'I hope this course is not full of jargon.'
console.log(sentence.includes('jargon'))

// 7) Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random() * 101))

// 8) Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random() * 51) + 50)

// 9) Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * 256))

// 10) Access the 'JavaScript' string characters using a random number.
let string = 'JavaScript'
console.log(string[Math.floor(Math.random() * string.length)])

// 11) Use console.log() and escape characters to print the following pattern.
console.log('1 \t1 \t1 \t1 \t1 \n2 \t1 \t2 \t4 \t8 \n3 \t1 \t3 \t9 \t27 \n4 \t1 \t4 \t16 \t24 \n5 \t1 \t5 \t25 \t125')

// 12) Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let phrase = 'You cannot end a sentence with because because because is a conjunction'
let word = 'because'
let firstIndex = phrase.indexOf(word)
console.log(phrase.substr(firstIndex, (word.length + 1) * 3))
