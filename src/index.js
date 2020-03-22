module.exports = function check(str, bracketsConfig) {
  bracketsConfig = bracketsConfig.map(item => item.reduce ((acc, cur) => acc + cur));
 
  for (let i = str.length; i >= 0; i--) {
    bracketsConfig.forEach (item => {
      str = str.replace(item, '');
    });
    if (str.length == 0) return true;
  } return false;
}
