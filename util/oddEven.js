// const isEven = () => num % 2 === 0 ?? false;
// const isOdd = () => num % 2 !== 0 ?? true;

// const isOdd = () => !!(num & 1);
// const f = 5;
// isEven function

const isEven = (num) => !(num & 1);

const isOdd = (num) => !!(num & 1);

const evenOdd = (num) => (!(num & 1) ? `even` : `odd`);

// const arg = process.argv[2];
// console.log(isEven(arg));
// console.log(isOdd(arg));
// console.log(oddEven(arg));

// console.log(6 & 2);
// 5 = 0101
// 9 = 1001

exports.isEven = isEven;
exports.isOdd = isOdd;
exports.evenOdd = evenOdd;
