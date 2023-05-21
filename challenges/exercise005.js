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
  // Your code here!
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};
