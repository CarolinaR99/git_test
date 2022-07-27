function sym(args) {
  answer = [];
  for (let i = 0; i < arguments.length - 1; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      if (arguments[i+1].includes(arguments[i][j]) == false) {
        answer.push(arguments[i][j]);
      }
    }
  }
  return answer;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));

console.log(1);