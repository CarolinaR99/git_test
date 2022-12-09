function sym(args) {
  const box = [];
  const temp = [];
  for (let i = 0; i < 2; i++) {
    let arg_u = [...new Set(arguments[i])];
    for (let j = 0; j < arg_u.length; j++) {
      temp.push(arg_u[j]);
    }
  }
  for (let k = 0; k < temp.length; k++) {
    let count = temp.filter(x => x == temp[k]).length;
    if (count == 1) {
      box.push(temp[k]);
    }
  }
  if (typeof arguments[2] != "undefined") {
    let arg1 = box;
    let arg_u2 = [...new Set(arguments[2])];
    const box2 = [];
    const temp2 = [];
    for (let j = 0; j < arg1.length; j++) {
      temp2.push(arg1[j]);
    }
    for (let j = 0; j < arg_u2.length; j++) {
      temp2.push(arg_u2[j]);
    }
    for (let k = 0; k < temp2.length; k++) {
      let count2 = temp2.filter(x => x == temp2[k]).length;
      if (count2 == 1) {
        box2.push(temp2[k]);
      }}
    
      if (typeof arguments[3] != "undefined") {
        let arg2 = box2;
        let arg_u3 = [...new Set(arguments[3])];
        const box3 = [];
        const temp3 = [];
        for (let j = 0; j < arg2.length; j++) {
          temp3.push(arg2[j]);
        }
        for (let j = 0; j < arg_u3.length; j++) {
          temp3.push(arg_u3[j]);
        }
        for (let k = 0; k < temp3.length; k++) {
          let count3 = temp3.filter(x => x == temp3[k]).length;
          if (count3 == 1) {
            box3.push(temp3[k]);
          }}
        
          if (typeof arguments[4] != "undefined") {
            let arg3 = box3;
            let arg_u4 = [...new Set(arguments[4])];
            const box4 = [];
            const temp4 = [];
            for (let j = 0; j < arg3.length; j++) {
              temp4.push(arg3[j]);
            }
            for (let j = 0; j < arg_u4.length; j++) {
              temp4.push(arg_u4[j]);
            }
            for (let k = 0; k < temp4.length; k++) {
              let count4 = temp4.filter(x => x == temp4[k]).length;
              if (count4 == 1) {
                box4.push(temp4[k]);
              }}

              if (typeof arguments[5] != "undefined") {
                let arg4 = box4;
                let arg_u5 = [...new Set(arguments[5])];
                const box5 = [];
                const temp5 = [];
                for (let j = 0; j < arg4.length; j++) {
                  temp5.push(arg4[j]);
                }
                for (let j = 0; j < arg_u5.length; j++) {
                  temp5.push(arg_u5[j]);
                }
                for (let k = 0; k < temp5.length; k++) {
                  let count5 = temp5.filter(x => x == temp5[k]).length;
                  if (count5 == 1) {
                    box5.push(temp5[k]);
                  }} 

                var answer = box5;
              }
            
            else {
            var answer =  box4;
            }

            }
        
          else {
            var answer = box3;
        }
      }
      else {
        var answer = box2;
      }
  }
  else {
    var answer = box;
  }

  answer.sort();
  return answer;
}

console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));