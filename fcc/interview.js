function sym(args) {
  answer = [];
  temp = [];
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      temp.push(arguments[i][j]);
    }
  }
  for (let k = 0; k < temp.length; k++) {
    let count = temp.filter(x => x == temp[k]).length;
    if (count == 1) {
      answer.push(temp[k]);
    }
  }
  answer.sort();
  return answer;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));