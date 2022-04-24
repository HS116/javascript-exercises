const ftoc = function(temp) {
  return round1dp((temp - 32) * 5/9);
};

const ctof = function(temp) {
  return round1dp(9/5 * temp + 32);
};

function round1dp(num){
  return (Math.round(num * 10)) / 10;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
