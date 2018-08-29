/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
const newID = 1000000000 + oldID

let ageIsValid
if (Number.isInteger()) {
  ageIsValid = true
}
else {
  ageIsValid = false
}

let randomNumber = Math.floor(Math.random() * 20) + 1

let randomInteger = Math.round(randomNumber)

let randomUserID = Math.round(1000000000 + randomNumber)
