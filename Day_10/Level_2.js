const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// 1) Find A Union B
let AunionB = new Set(a)
b.forEach((num) => AunionB.add(num))

// 2) Find A intersection B
let A = new Set(a)
let B = new Set(b)
let c = a.filter((item) => B.has(item))
let AintersectionB = new Set(c)

// 3) Find a with b
let d = a.filter((item) => !B.has(item))
let AwithB = new Set(d)
console.log(AwithB)

