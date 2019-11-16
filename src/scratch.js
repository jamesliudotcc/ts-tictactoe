let x = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];

let a = x.map(innerArray => innerArray.reduce((acc, curr) => (acc += curr), 0));

console.log(a);
