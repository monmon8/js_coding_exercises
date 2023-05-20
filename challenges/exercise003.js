export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  const [firstWord, ...remainingWords] = words;

  const capitalizedWords = remainingWords.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  return firstWord + capitalizedWords.join("");
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let count = 0;
  for (const person of people) {
    console.log(person.subjects);
    count += person.subjects.length;
  }
  return count;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  //   for (const item of menu) {
  //     if (item.ingredients.includes(ingredient)) {
  //       return true;
  //     }
  //   }
  //   return false;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}
