const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 const nextD = '--discard-next';
  const prevD = '--discard-prev';
  const nextDb = '--double-next';
  const prevDb = '--double-prev';

  if (!(arr instanceof Array)) throw new Error();

  let resArr = [...arr];

  for (let i = 0; i < resArr.length; i++) {
    if (resArr[i] === nextD) {
      resArr.splice(i, 2, undefined);
    } else if (resArr[i] === prevD && i===0) {
      resArr.splice(i, 1);
    } else if (resArr[i] === prevD) {
        resArr.splice(i - 1, 2, undefined);
    } else if (resArr[i] === nextDb) {
      resArr.splice(i, 1, resArr[i + 1]);
    } else if (resArr[i] === prevDb) {
      resArr.splice(i, 1, resArr[i - 1]);
    }
  }
  resArr = resArr.filter((e) => e !== undefined);
  return resArr;
};
