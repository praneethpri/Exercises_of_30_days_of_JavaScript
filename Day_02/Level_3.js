// 1) 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let string =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let regex = /love/gi;
console.log(string.match(regex).length);

// 2) Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let phrase =
  "You cannot end a sentence with because because because is a conjunction";
let pattern = /because/g;
console.log(phrase.match(pattern).length);

// 3) Clean the following text and find the most frequent word (hint, use replace and regular expressions).
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

// 4) Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let text =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let reg = /\d+/g;
let sumArray = text.match(reg);
let sum = sumArray.reduce((acc, cur) => {
  return acc + parseInt(cur);
}, 0);
console.log(sum);
