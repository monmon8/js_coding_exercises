// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  const firstInitial = firstName.charAt(0).toUpperCase();
  const secondInitial = lastName.charAt(0).toUpperCase();
  return firstInitial + "." + secondInitial;
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  let a = originalPrice + (originalPrice * vatRate.toFixed(2)) / 100;
  return a;
  console.log(a);
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  return originalPrice - (originalPrice * (reduction / 100)).toFixed(2);
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!

  let newStr = str.replace(/[^\w\s\']|_/g, "");

  let newStrLenght = newStr.length;

  if (newStrLenght % 2 == 0) {
    return newStr.slice(-2);
  } else {
    return newStr.slice(-1);
  }
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");

  return word.split("").reverse().join("");
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");

  let reverseArray = [];
  for (let i = 0; i < words.length; i++) {
    reverseArray.push(words[i].split("").reverse().join(""));
  }
  return reverseArray;
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
  let sum = 0;
  for (const key in users) {
    if (users.hasOwnProperty("linux")) {
      sum++;
    }
    return sum;
    console.log(sum);
  }
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}
