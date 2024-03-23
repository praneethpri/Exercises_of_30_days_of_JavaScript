## Day 12

#### Exercise : Level 1

1) Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
```javascript
const txt = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
let pattern = /\d+/g
let result = txt.match(pattern)
let resultNumber = [];
result.forEach((elem) => resultNumber.push(parseInt(elem)))
let resultCounted = resultNumber.reduce((acc, cur) => { return acc + cur }, 0)
console.log(resultCounted)
```

2) The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles. 
```javascript
const txt2 = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.'
let pattern2 = /-\d+|\d+/g
let result2 = txt2.match(pattern2)
let result2Number = [];
result2.forEach((elem) => result2Number.push(parseInt(elem)))
let minNumber = Math.min(...result2Number)
let maxNumber = Math.max(...result2Number)
let distance = maxNumber - minNumber
console.log(distance)
```

3) Write a pattern which identify if a string is a valid javascript variable
```javascript
function is_valid_variable(string) {
  let pattern = /^[a-z]+(_{1})\w+|^\D\w+$/g
  let result = pattern.test(string)
  
  console.log(result)
}
```
```javascript
is_valid_variable('first_name') 
is_valid_variable('first-name')
is_valid_variable('1first_name')
is_valid_variable('firstname')
```

#### Exercise : Level 2

1) Write a function called tenMostFrequentWords which get the ten most frequent word from a string? 
```javascript
function tenMostFrequentWords(string, num) {
    let pattern = /\w+/g
    let result = string.match(pattern);
    let simillarValues = result.filter((obj, index) => result.indexOf(obj) === index);
    let simillarValuesCount = [];
    simillarValues.forEach((elem) => {simillarValuesCount.push((result.filter((item) => elem === item)).length)});
    let returnObj = [];
    for (let i = 0; i < simillarValues.length; i++) {
      let obj = {word: simillarValues[i], count: simillarValuesCount[i]}
      returnObj.push(obj)
    }
    let returnObjSorted = returnObj.sort((a, b) => {return b.count - a.count})
  if (arguments.length === 1) {
    return returnObjSorted
  }
  else if (arguments.length === 2) {
    let returnObjSortedCount = [];
    for (let k = 0; k < num; k++) {
      returnObjSortedCount.push(returnObjSorted[k])
    }
    return returnObjSortedCount;
  }
}
```
```javascript
let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
console.log(tenMostFrequentWords(paragraph))
console.log(tenMostFrequentWords(paragraph, 3))
```


#### Exercise : Level 3

1) Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string. 
```javascript
function cleanText(string) {
  let pattern = /%|\$|@|&|#|;|\.|\?|!|,/g
  return string.replace(pattern, '');
}
```

```javascript
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
```
```javascript
function mostFrequentWords(string, num) {
  let pattern = /\w+/g
  let sentenceArray = string.match(pattern)
  let filteredWords = sentenceArray.filter((item, index) => sentenceArray.indexOf(item) === index);
  let filteredWordCount = [];
  filteredWords.forEach((elem) => filteredWordCount.push((sentenceArray.filter((item) => elem === item)).length))
  let returnObj = [];
  for (let i = 0; i < filteredWords.length; i++) {
    let obj = {word: filteredWords[i], count: filteredWordCount[i]}
    returnObj.push(obj)
  }
  let returnObjSorted = returnObj.sort((a, b) => {return b.count - a.count})
  if (arguments.length == 1) {
    return returnObjSorted
  }
  else {
    let returnObjSortedCount = [];
    for (let j = 0; j < num; j++) {
      returnObjSortedCount.push(returnObjSorted[j])
    }
    return returnObjSortedCount;
  }
}
```
```javascript
console.log(mostFrequentWords(cleanText(sentence), 5))
```


