const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const LL = 0.693;

module.exports = function dateSample(sampleActivity) {
  let k = LL / HALF_LIFE_PERIOD;
  let t = 0;
  let N = parseFloat(sampleActivity);
  if(typeof(sampleActivity) === "string" && arguments.length !== 0 && !isNaN(N) && N > 0 && N < MODERN_ACTIVITY){
    t = Math.log(MODERN_ACTIVITY / N) / k;
    t = Math.ceil(t);
    return t;
  }else{
    return 0;
  }
