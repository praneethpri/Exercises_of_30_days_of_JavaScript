## Day 02

#### Exercise : Level 1

1) Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
![1.png](https://github.com/praneethpri/Exercises_of_30_days_of_JavaScript/blob/main/Day_02/assets/01.png)

2) Print the string on the browser console using console.log()
![2.png](https://github.com/praneethpri/Exercises_of_30_days_of_JavaScript/blob/main/Day_02/assets/02.png)

3) Print the length of the string on the browser console using console.log()
![3.png](https://github.com/praneethpri/Exercises_of_30_days_of_JavaScript/blob/main/Day_02/assets/03.png)

4) Change all the string characters to capital letters using toUpperCase() method
![4.png](https://github.com/praneethpri/Exercises_of_30_days_of_JavaScript/blob/main/Day_02/assets/04.png)

5) Change all the string characters to lowercase letters using toLowerCase() method 
![5.png](https://github.com/praneethpri/Exercises_of_30_days_of_JavaScript/blob/main/Day_02/assets/05.png)

6) Cut (slice) out the first word of the string using substr() or substring() method
![6.png](https://github.com/praneethpri/Exercises_of_30_days_of_JavaScript/blob/main/Day_02/assets/06.png)

7) Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
![7.png](https://github.com/praneethpri/Exercises_of_30_days_of_JavaScript/blob/main/Day_02/assets/07.png)

8) Check if the string contains a word Script using includes() method
![8.png](https://github.com/praneethpri/Exercises_of_30_days_of_JavaScript/blob/main/Day_02/assets/08.png)

9) Split the string into an array using split() method
![9.png](https://github.com/praneethpri/Exercises_of_30_days_of_JavaScript/blob/main/Day_02/assets/09.png)

10) Split the string 30 Days Of JavaScript at the space using split() method
![10.png](https://github.com/praneethpri/Exercises_of_30_days_of_JavaScript/blob/main/Day_02/assets/10.png)

11) 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array. 
![11.png](https://github.com/praneethpri/Exercises_of_30_days_of_JavaScript/blob/main/Day_02/assets/11.png)


12) Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
![12.png](https://github.com/praneethpri/Exercises_of_30_days_of_JavaScript/blob/main/Day_02/assets/12.png)


13) What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
![13.png](https://github.com/praneethpri/Exercises_of_30_days_of_JavaScript/blob/main/Day_02/assets/13.png)


14) What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
![14.png](https://github.com/praneethpri/Exercises_of_30_days_of_JavaScript/blob/main/Day_02/assets/14.png)

15) Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
![15.png](https://github.com/praneethpri/Exercises_of_30_days_of_JavaScript/blob/main/Day_02/assets/15.png)


16) Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
![16.png](https://github.com/praneethpri/Exercises_of_30_days_of_JavaScript/blob/main/Day_02/assets/16.png)


17) Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
![17.png](https://github.com/praneethpri/Exercises_of_30_days_of_JavaScript/blob/main/Day_02/assets/17.png)

18) Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
![18.png](https://github.com/praneethpri/Exercises_of_30_days_of_JavaScript/blob/main/Day_02/assets/18.png)

19) Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
![19.png](https://github.com/praneethpri/Exercises_of_30_days_of_JavaScript/blob/main/Day_02/assets/19.png)


20) Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
![20.png](https://github.com/praneethpri/Exercises_of_30_days_of_JavaScript/blob/main/Day_02/assets/20.png)

21) Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
![21.png](https://github.com/praneethpri/Exercises_of_30_days_of_JavaScript/blob/main/Day_02/assets/21.png)

22) Use endsWith() method with the string 30 Days Of JavaScript and make the result true
![22.png](https://github.com/praneethpri/Exercises_of_30_days_of_JavaScript/blob/main/Day_02/assets/22.png)

23) Use match() method to find all the a’s in 30 Days Of JavaScript
![23.png](https://github.com/praneethpri/Exercises_of_30_days_of_JavaScript/blob/main/Day_02/assets/23.png)

24) Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
![24.png](https://github.com/praneethpri/Exercises_of_30_days_of_JavaScript/blob/main/Day_02/assets/24.png)

25) Use repeat() method to print 30 Days Of JavaScript 2 times
![25.png](https://github.com/praneethpri/Exercises_of_30_days_of_JavaScript/blob/main/Day_02/assets/25.png)


#### Exercise : Level 2

1) Using console.log() print out the following statement:
```javascript
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.",
);
```

2) Using console.log() print out the following quote by Mother Teresa:
```javascript
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.",
);
```

3) Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
```javascript
if (typeof "10" === typeof 10) {
  console.log(true);
} else {
  if (typeof parseInt("10") === typeof 10) {
    console.log(true);
  }
}
```

4) Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
```javascript
if (parseFloat("9.8") === 10) {
  console.log(true);
} else {
  if (Math.round(parseFloat("9.8")) === 10) {
    console.log(true);
  }
}
```

5) Check if 'on' is found in both python and jargon
```javascript
let python = "python";
let jargon = "jargon";
if (python.includes("on") && jargon.includes("on")) {
  console.log(true);
}
```

6) I hope this course is not full of jargon. Check if jargon is in the sentence.
```javascript
let sentence = "I hope this course is not full of jargon.";
console.log(sentence.includes("jargon"));
```

7) Generate a random number between 0 and 100 inclusively.
```javascript
console.log(Math.floor(Math.random() * 101));
```

8) Generate a random number between 50 and 100 inclusively.
```javascript
console.log(Math.floor(Math.random() * 51) + 50);
```

9) Generate a random number between 0 and 255 inclusively.
```javascript
console.log(Math.floor(Math.random() * 256));
```

10) Access the 'JavaScript' string characters using a random number.
```javascript
let string = "JavaScript";
console.log(string[Math.floor(Math.random() * string.length)]);
```

11) Use console.log() and escape characters to print the following pattern.
```javascript
console.log(
  "1 \t1 \t1 \t1 \t1 \n2 \t1 \t2 \t4 \t8 \n3 \t1 \t3 \t9 \t27 \n4 \t1 \t4 \t16 \t24 \n5 \t1 \t5 \t25 \t125",
);
```

12) Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
```javascript
let phrase =
  "You cannot end a sentence with because because because is a conjunction";
let word = "because";
let firstIndex = phrase.indexOf(word);
console.log(phrase.substr(firstIndex, (word.length + 1) * 3));
```

#### Exercise : Level 3

1) 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
```javascript
let string =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let regex = /love/gi;
console.log(string.match(regex).length);
```

2) Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
```javascript
let phrase =
  "You cannot end a sentence with because because because is a conjunction";
let pattern = /because/g;
console.log(phrase.match(pattern).length);
```

3) Clean the following text and find the most frequent word (hint, use replace and regular expressions).
```javascript
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let symbolsPattern = /%|\$|@|#|\.|,|&|\?|!|;/g;
let newSentence = sentence.replace(symbolsPattern, "");
let newSentenceArray = newSentence.split(/\s/g);
let newSentenceArraySet = new Set(newSentenceArray);
let count = [];
for (let i of newSentenceArraySet) {
  let arr = [];
  for (let j of newSentenceArray) {
    if (i === j) {
      arr.push(j);
    }
  }
  count.push(arr.length);
}
let maxValue = Math.max(...count);
let indexes = count.indexOf(maxValue);
let newSentenceArraySetArray = [];
for (let k of newSentenceArraySet) {
  newSentenceArraySetArray.push(k);
}
console.log(newSentenceArraySetArray[indexes]);
```

4) Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
```javascript
let text =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let reg = /\d+/g;
let sumArray = text.match(reg);
let sum = sumArray.reduce((acc, cur) => {
  return acc + parseInt(cur);
}, 0);
console.log(sum);
```
