module.exports = function check(str, bracketsConfig) {
  let openBracket = [];
  let closeBracket = [];
  for (i = 0; i < bracketsConfig.length; i++) {
    openBracket.push(bracketsConfig[i][0]);
    closeBracket.push(bracketsConfig[i][1]);
  }
  let stack = [];
  for (i = 0; i < str.length; i++) {
    if (
      closeBracket.includes(str[i]) &&
      stack.length > 0 &&
      closeBracket.indexOf(str[i]) ===
        openBracket.indexOf(stack[stack.length - 1])
    ) {
      stack.pop();
    } else if (openBracket.includes(str[i])) {
      stack.push(str[i]);
    } else {
      return false;
    }
  }
  return stack.length === 0;
};
