## Day 11

#### Exercise : Level 1

```javascript
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTML', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTML', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTML', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTML', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTML', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTML', 'CSS', 'JS'],
  age:20
}
]
```
1) Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp. 

```javascript
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)
```

2) Destructure and assign the elements of countries array to fin, est, sw, den, nor

```javascript
let [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor)
```

3) Destructure the rectangle object by its properties or keys. 

```javascript
let {width, area, height, perimeter} = rectangle;
console.log(width, area, height, perimeter)
```

module.exports = users;
