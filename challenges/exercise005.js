export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  const index = nums.indexOf(n);
  if (index !== -1 && index !== nums.length - 1) {
    return nums[index + 1];
  }
  return null;
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  const count = {
    1: 0,
    0: 0,
  };
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    count[char]++;
  }
  return count;
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  let reversed = 0;
  while (n !== 0) {
    reversed = reversed * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return reversed;
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  let totalSum = 0;
  for (let i = 0; i < arrs.length; i++) {
    const subArray = arrs[i];
    for (let j = 0; j < subArray.length; j++) {
      totalSum += subArray[j];
    }
  }
  return totalSum;
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) {
    return arr;
  }

  const first = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = first;

  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  for (const key in haystack) {
    if (
      typeof haystack[key] === "string" &&
      haystack[key].toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return true;
    }
  }
  return false;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  let words = str
    .replace(/[^\w\s]/g, "")
    .toLowerCase()
    .split(" ");

  const wordCount = {};
  for (const word of words) {
    if (wordCount[word]) {
      wordCount[word] += 1;
    } else {
      wordCount[word] = 1;
    }
  }

  return wordCount;
};
