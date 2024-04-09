const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// 1) Print out all the cat names in to catNames variable.
let catNames = async () => {
  try {
    const response = await fetch(catsAPI)
    const jsonString = await response.json()
    let arr = [];
    jsonString.forEach(element => {arr.push(element.name)});
    console.log(arr)
  }
  catch (error) {
    console.log(error)
  }
}
catNames()
