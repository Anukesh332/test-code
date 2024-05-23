let input = [{Name:"Amit",Salary:[{Month:"Jan-2022",Salary:"1"},{Month:"Feb-2022",Salary:"2241"},{Month:"Mar-2022",Salary:"2"}]},
            {Name:"Ajay",Salary:[{Month:"Jan-2022",Salary:"2"},{Month:"Feb-2022",Salary:"1244"}]},
            {Name:"Omkar",Salary:[{Month:"Jan-2022",Salary:"1"},{Month:"Feb-2022",Salary:"1111"}]},
            {Name:"Girish",Salary:[{Month:"Jan-2022",Salary:"2"},{Month:"Feb-2022",Salary:"2222"}]},
            {Name:"Yogita",Salary:[{Month:"Jan-2022",Salary:"1"},{Month:"Feb-2022",Salary:"2"}]}]

const aaa = JSON.stringify(input);
// console.log(aaa);


// ==================================================  ANS 1  ================================================================

abc = "";
for (let j = 0; j < input.length; j++) {
    abc = input[j].Name  
sum1 = 0
  for (let i = 0; i < input[j].Salary.length; i++) {
        sum1 += parseInt(input[j].Salary[i].Salary)
    }
    console.log(`The total salary of ${abc} is ` +   sum1)
}

// ========================================================================================================================