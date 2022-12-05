function sym(args) {
  const answer = [];
  const temp = [];
  for (let i = 0; i < arguments.length; i++) {
    let arg_u = [...new Set(arguments[i])];
    for (let j = 0; j < arg_u.length; j++) {
      temp.push(arg_u[j]);
    }
  }
  for (let k = 0; k < temp.length; k++) {
    let count2 = temp.filter(x => x == temp[k]).length;
    if (count2 == 1) {
      answer.push(temp[k]);
    }
  }
  answer.sort();
  return answer;
}

console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));