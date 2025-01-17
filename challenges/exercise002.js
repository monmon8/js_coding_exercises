export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");

  return sandwich.fillings;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");

  if (person.city == "Manchester") {
    return true;
  } else {
    return false;
  }
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

  if (people <= 40) {
    return 1;
  } else if (people <= 80 && people > 40) {
    return 2;
  } else if (people <= 120 && people > 80) {
    return 3;
  } else {
    return Math.ceil(people / 40);
  }
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");

  let arrSheep = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "sheep") {
      arrSheep.push(arr[i]);
    }
  }
  return arrSheep.length;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  const { postCode } = person.address;
  return postCode.startsWith("M") && person.address.city === "Manchester";
}
