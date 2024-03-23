// 1) Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string. 
function cleanText(string) {
  let pattern = /%|\$|@|&|#|;|\.|\?|!|,/g
  return string.replace(pattern, '');
}

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

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

console.log(mostFrequentWords(cleanText(sentence), 5))
