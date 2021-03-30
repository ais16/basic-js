const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) {
    return false;
  }

  const arr = [];
  for (const item of members) {
    if(typeof(item) === 'string') {
      if(item[0] === ' ') {
        let i = 1;
        while (item[i] === ' ') {
          i +=1;
        }
        const letter = item[i].toUpperCase();
        arr.push(letter);
      }
      const letter = item[0].toUpperCase();
      arr.push(letter);
    }
  }
  if (arr.length === 0) {
    return false;
  }
  const sortedArr = arr.sort();
  return sortedArr.join('').trim();
};
