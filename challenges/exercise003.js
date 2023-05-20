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
    count += person.subjects.length;
  }
  return count;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  for (const item of menu) {
    if (item.ingredients.includes(ingredient)) {
      return true;
    }
  }
  return false;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  const numbers = [];

  for (const num of arr1) {
    const numbers = new Set();

    for (const num of arr1) {
      if (arr2.includes(num)) {
        numbers.add(num);
      }
    }

    return Array.from(numbers).sort();
  }
}
