// 1) Write a function called tenMostFrequentWords which get the ten most frequent word from a string? 
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

let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
console.log(tenMostFrequentWords(paragraph))
console.log(tenMostFrequentWords(paragraph, 3))
