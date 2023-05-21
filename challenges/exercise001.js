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

  const vatAmount = (originalPrice * vatRate) / 100;
  const totalPrice = originalPrice + vatAmount;
  return Math.round(totalPrice * 100) / 100;
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
  let count = 0;

  for (let i = 0; i < users.length; i++) {
    if (users[i].type === "Linux") {
      count++;
    }
  }

  return count;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");

  const sum = scores.reduce((total, score) => total + score, 0);
  const mean = sum / scores.length;
  return Math.round(mean * 100) / 100;
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");

  if (n % 3 === 0 && n % 5 === 0) {
    return "fizzbuzz";
  } else if (n % 5 === 0) {
    return "buzz";
  } else if (n % 3 === 0) {
    return "fizz";
  } else {
    return n;
  }
}
