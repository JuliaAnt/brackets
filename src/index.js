module.exports = function check(str, bracketsConfig) {
  // your solution
  const obj = {};
  for (let a = 0; a < bracketsConfig.length; a++) {
    let subArr = bracketsConfig[a];
    for (let b = 0; b < subArr.length; b++) {
      obj[subArr[0]] = subArr[1];
    }
  }

  let arr = str.split("");
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let token = arr[i];

    if (obj[token] === token) {
      if (!sameToken(token, newArr)) {
        return false;
      }
    } else {
      if (obj[token]) {
        newArr.push(token);
      } else {
        const last = newArr[newArr.length - 1];
        if (obj[last] === token) {
          newArr.pop();
        } else {
          return false;
        }
      }
    }
  }

  if (newArr.length === 0) {
    return true;
  } else {
    return false;
  }
};

function sameToken(token, newArr) {
  let index = newArr.indexOf(token);
  if (index > -1) {
    if (index !== newArr.length - 1) {
      return false;
    }
    newArr.pop();
  } else {
    newArr.push(token);
  }
  return true;
}
