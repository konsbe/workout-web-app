// const iban: string = "GB82WEST12345698765432";
type TypeLetters = { [key: string]: number };

const letter_dic:TypeLetters = {
  "A": 10, "B": 11, "C": 12, "D": 13, "E": 14, "F": 15, "G": 16, "H": 17, "I": 18, "J": 19, "K": 20,
  "L": 21, "M": 22, "N": 23, "O": 24, "P": 25, "Q": 26, "R": 27, "S": 28, "T": 29, "U": 30, "V": 31,
  "W": 32, "X": 33, "Y": 34, "Z": 35,
  "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9 
}

export type TypeIbanValidation = {
  modulo(devident: string, divisor: number): void;
  is_valid_iban(ibank: string): void;
  check_iban(): void;
  letters_to_numbers(arr: { arr: Array<number | never> }, result: any): void;
};
abstract class AbstractValidation implements TypeIbanValidation {
  ibank: string;

  constructor(n: string) {
    this.ibank = n;
  }

  abstract modulo(devident: string, divisor: number): void;
  abstract is_valid_iban(ibank: string): void;
  abstract check_iban(): void;
  abstract letters_to_numbers(
    arr: { arr: Array<number | never> },
    result: any
  ): void;
}
export default class IbanValidation extends AbstractValidation {
  iban: string;
  constructor(n: string) {
    super(n);
    this.iban = n;
  }

  letters_to_numbers = (arr: { arr: Array<number | never> }, result: any) => {
    result
      .join("")
      .split("")
      .forEach(function (c: string) {
        arr.arr.push(letter_dic[`${c}`]);
      });
  };

  modulo = (divident: string, divisor = 97) => {
    var partLength = 10;

    while (divident.length > partLength) {
      var part = divident.substring(0, partLength);
      divident = (parseFloat(part) % divisor) + divident.substring(partLength);
    }

    return parseInt(divident) % divisor;
  };

  is_valid_iban = (ibank: string) => {
    const result: any[] = ibank.match(/.{1,4}/g) ?? [];
    result.push(result.shift());
    let number_form: { arr: Array<number | never> } = { arr: [] };
    this.letters_to_numbers(number_form, result);

    return this.modulo(number_form.arr.join(""));
  };

  public check_iban = () => {
    // console.log("sumnums: ", this.is_valid_iban(this.iban));
  };
}

// const letters_to_numbers = (
//   arr: { arr: Array<number | never> },
//   result: any
// ) => {
//   result
//     .join("")
//     .split("")
//     .forEach(function (c: string) {
//       arr.arr.push(letter_dic[`${c}`]);
//     });
// };
// const modulo = (divident: string, divisor = 97) => {
//   var partLength = 10;

//   while (divident.length > partLength) {
//     var part = divident.substring(0, partLength);
//     divident = (parseFloat(part) % divisor) + divident.substring(partLength);
//   }

//   return parseInt(divident) % divisor;
// };
// export const is_valid_iban = (ibank: string) => {
//   const result: any[] = ibank.match(/.{1,4}/g) ?? [];
//   result.push(result.shift());
//   let number_form: { arr: Array<number | never> } = { arr: [] };
//   letters_to_numbers(number_form, result);

//   return modulo(number_form.arr.join(""));
// };

// console.log("sumnums: ", is_valid_iban(iban));

// const iban = "GB82WEST12345698765432";
// const letter_dic = {"A": 10, "B": 11, "C": 12, "D": 13, "E": 14, "F": 15, "G": 16, "H": 17, "I": 18, "J": 19, "K": 20,
//               "L": 21, "M": 22, "N": 23, "O": 24, "P": 25, "Q": 26, "R": 27, "S": 28, "T": 29, "U": 30, "V": 31,
//               "W": 32, "X": 33, "Y": 34, "Z": 35,
//               "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9}

// const result = iban.match(/.{1,4}/g) ?? [];
// result.push(result.shift());
// console.log(result);
// let number_form: [] = [];
// const letters_to_numbers = async () => {
//   result
//     .join("")
//     .split("")
//     .forEach(function (c: string) {
//       number_form.push(letter_dic[`${c}`]);
//       // console.log(letter_dic[`${c}`]);
//       // return letter_dic[`${c}`];
//     });
// };
// letters_to_numbers();
// let sumnums = 0;
// const makesum: number = () =>
//   number_form.map((i) => {
//     sumnums += i;
//   });
// makesum();
// const modulo = (divident, divisor = 97) => {
//   var partLength = 10;

//   while (divident.length > partLength) {
//     var part = divident.substring(0, partLength);
//     divident = (part % divisor) + divident.substring(partLength);
//   }

//   return divident % divisor;
// };
// console.log("sumnums: ", parseInt(number_form.join("")));
// console.log("sumnums: ", parseInt(number_form.join("")) % 97);
// console.log("sumnums: ", 66 * 97, parseInt(number_form.join("")));
// console.log("sumnums: ", modulo(number_form.join("")));

// /*
