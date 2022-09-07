
////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////


// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.
function sumOfNumbers(NumberOne, NumberTwo) {
  const x = 6
  const numberset1 = NumberOne + x
  const numberset2 = NumberTwo + x
  let sum = numberset1 + numberset2
  console.log(sum)
  return sum
}
sumOfNumbers(5, 5)

// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.
const arrowSum = (NumberOne, NumberTwo) => {
  const x = 6
  const numberset1 = NumberOne + x
  const numberset2 = NumberTwo + x
  let sum = numberset1 + numberset2
  console.log(sum)
  return sum
}
arrowSum(10, 10)
// 3. Write a function that returns another function. (use arrow functions please)
const ArrowAndSum = (Number1, Number2) => {
  let sum = Number1 + Number2
  console.log(sum)
  return sum
}
ArrowAndSum(arrowSum(5, 5), sumOfNumbers(10, 10))


// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.


const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log(getFunction()(2))
//* becuase insideFuncion() is within the getfunction now if you ran inside function it wouldnt work

// 5. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.

const couldThrowError = () => {

  if (Math.ceil(Math.random() * 2) > 2) {

    throw new Error("Error was thrown");

  }
  return 'success'
}
console.log(couldThrowError())
const mightBeGood = () => {
  if (couldThrowError() === 'success') {
    return 'Still good'
  } else { return 'sorry, there was an error' }

}
console.log(mightBeGood())




////////////////////////////////////////////////////////////
//// Handling data:
////////////////////////////////////////////////////////////


const userData = [
  {
    id: '111',
    name: 'Peter',
    favorites: {
      food: ['burgers', 'pizza'],
      activites: ['basketball', "baseball"]
    },
  },
  {
    id: '222',
    name: 'John',
    favorites: {
      food: ['burgers', 'tacos'],
      activites: ['football', "golf"]
    },
  },
  {
    id: '333',
    name: 'Mary',
    favorites: {
      food: ['pizza', 'tacos', 'fried chicken'],
      activites: ['volleyball', "softball"]
    },
  }
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]
const reformData = userData.map(({ id, favorites }) => ({ [id]: favorites.food.length }))
console.log(reformData)



// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']
const reduceData = userData.reduce(
  (previousValue, curentValue) => [...previousValue, curentValue.name], []
)
console.log(reduceData)


// 7. Show an an example of a switch statement being used
const inStock = (food) => {
  switch (food) {
    case 'apple':
    case 'pear':
    case 'eggs':
    case 'bread':
    case 'cherrys':
      console.log('we have the food')
      break;

    default:
      console.log('we do not have your item in stock')
      break;
  }

}
inStock()


////////////////////////////////////////////////////////////
//// OBJECT AND ARRAY DESTRUCTURING
////////////////////////////////////////////////////////////



// 8. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }
const userPersonalData = {
  name: 'peter',
  age: '56',
  birthday: 'jan 1st',
};
const userGameData = {
  score: 4546,
  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
};
const updatedUser = {
  name: userPersonalData.name,
  age: userPersonalData.age,
  birthday: userPersonalData.birthday,
  score: userGameData.score,
  accomplishments: userGameData.accomplishments

}
console.log(updatedUser)





// 9. Make a copy of your new user object but override the birthday to december 31st
const newBirthday = (NewDate) => {
  delete updatedUser.birthday
  console.log(updatedUser)
  updatedUser.birthday = NewDate
  console.log(updatedUser.birthday)

}
newBirthday('july 30')


// 10. Use the spread operator to make a copy of the accomplishments array and store it in a new variable

const accomplishmentList = [...updatedUser.accomplishments]
console.log(accomplishmentList)



//  11.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food

var user = {
  name: 'pete',
  age: '32',
  favoriteThings: {
    food: ['pizza', 'tacos', 'burgers', 'italian'],
    movies: [],
  },
};
const food = [...user.favoriteThings.food]
console.log(food)


// 12. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //
console.log(food[0], food[1])

// 13. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food. 
//    the food variable should have all the array items starting from the third one.
const data = ['peter', '34', 'apple', 'oranges', 'pizza', 'tacos'];
const Organizer = (name, age, ...foodgroup) => {
  newuserdata = {
    name: name,
    age: age,
    food: foodgroup
  }

  console.log(newuserdata)

}
Organizer(...data)

// 14. use object destructuring to grab the following from the userInfo object: 

const userInfo = {
  name: 'Peter',
  favorites: {
    needs: {
      food: ['burger', 'pizza', 'tacos', 'fried chicken', 'sushi'],
    },
    wants: {
      things: ['cars', 'jewelry'],
    },
  },
};


// - The user's name and in a constant named userName.
console.log(userInfo.name)
// - The user's favorite food array and name it favoriteFood.
const favoriteFood = userInfo.favorites.needs.food
console.log(favoriteFood)
// - The users first favorite thing (cars) and name it favoriteThing
const favoriteThing = userInfo.favorites.wants.things[0]
console.log(favoriteThing)
const otherFavoriteThing = userInfo.favorites.wants.things[1]
console.log(otherFavoriteThing)



var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
    try {
      // fetchingData from imaginary database
      if ((Math.ceil(Math.random() * 2)) < 2) {
        throw new Error('Error!')
      }
      resolve({ name: 'john', age: 42 })
    } catch (error) {
      reject(error);
    }
  }, 5000);
});


module.exports = fetchData;


// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
    try {
      // fetchingData from imaginary database
      if ((Math.ceil(Math.random() * 2)) < 2) {
        throw new Error('Error!')
      }
      resolve(user = { name: 'john', age: 42 })
    } catch (error) {
      reject(error);
    }
  }, 5000);
});



// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
fetchData().then(
  (user) => {
    console.log(user.name)
  },
  (error) => {
    console.error(error)
  }
)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
async function findUser() {
  try {
    const user = await fetchData()
    console.log(user)
  } catch (error) {
    console.log(error, 'there is no user')
  }

}
findUser()
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////