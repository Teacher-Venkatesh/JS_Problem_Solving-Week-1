//Your task is to create a function that does four basic mathematical operations.

//The function should take three arguments - operation(string/char), value1(number), value2(number).
//The function should return result of numbers after applying the chosen operation.



function basicOp(operation,value1,value2){
  return  operation == '+' ? value1 + value2 :
          operation == '-' ? value1 - value2 :
          operation == '*' ? value1 * value2 :
          operation == '/' ? value1 / value2 : 'Invalid Operator';
}

//Run SpecRunner.html to check the Test Case