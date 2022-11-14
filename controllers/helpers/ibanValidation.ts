const iban = "GB82WEST12345698765432";
const letter_dic = {"A": 10, "B": 11, "C": 12, "D": 13, "E": 14, "F": 15, "G": 16, "H": 17, "I": 18, "J": 19, "K": 20,
              "L": 21, "M": 22, "N": 23, "O": 24, "P": 25, "Q": 26, "R": 27, "S": 28, "T": 29, "U": 30, "V": 31,
              "W": 32, "X": 33, "Y": 34, "Z": 35,
              "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9}


const result = iban.match(/.{1,4}/g) ?? [];
result.push(result.shift());
console.log(result);
let number_form: [] = [];
const letters_to_numbers = async () => {
  result
    .join("")
    .split("")
    .forEach(function (c: string) {
      number_form.push(letter_dic[`${c}`]);
      // console.log(letter_dic[`${c}`]);
      // return letter_dic[`${c}`];
    });
};
letters_to_numbers();
let sumnums = 0;
const makesum: number = () =>
  number_form.map((i) => {
    sumnums += i;
  });
makesum();
const modulo = (divident, divisor = 97) => {
  var partLength = 10;

  while (divident.length > partLength) {
    var part = divident.substring(0, partLength);
    divident = (part % divisor) + divident.substring(partLength);
  }

  return divident % divisor;
};
console.log("sumnums: ", parseInt(number_form.join("")));
console.log("sumnums: ", parseInt(number_form.join("")) % 97);
console.log("sumnums: ", 66 * 97, parseInt(number_form.join("")));
console.log("sumnums: ", modulo(number_form.join("")));


/*
*/


const iban = "GB82WEST12345698765432";
const letter_dic = {"A": 10, "B": 11, "C": 12, "D": 13, "E": 14, "F": 15, "G": 16, "H": 17, "I": 18, "J": 19, "K": 20,
              "L": 21, "M": 22, "N": 23, "O": 24, "P": 25, "Q": 26, "R": 27, "S": 28, "T": 29, "U": 30, "V": 31,
              "W": 32, "X": 33, "Y": 34, "Z": 35,
              "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9}

export const letters_to_numbers = (arr:[],result) => {
  result
      .join("")
      .split("")
      .forEach(function (c: string) {
        arr.push(letter_dic[`${c}`]);
        // console.log(letter_dic[`${c}`]);
        // return letter_dic[`${c}`];
      });
};
export const modulo = (divident, divisor=97) => {
  var partLength = 10;

  while (divident.length > partLength) {
      var part = divident.substring(0, partLength);
      divident = (part % divisor) +  divident.substring(partLength);          
  }

  return divident % divisor;
}
export const is_valid_iban = (ibank) => {
  const result = ibank.match(/.{1,4}/g) ?? [];
  result.push(result.shift());
  let number_form: [] = [];
  letters_to_numbers(number_form,result);
  
  
  return modulo(number_form.join(""))
}

console.log("sumnums: ", is_valid_iban(iban));
