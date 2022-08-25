let num1 = 1*prompt("Enter num1");
let num2 = 1*prompt("Enter num2");

let output = !isNaN(num1+num2) ? `${num1+num2} ${num1/num2}` : "Некорректный ввод";
console.log(output);
document.write("Result: ", output)
