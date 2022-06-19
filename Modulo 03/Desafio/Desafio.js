console.log("Desafio 01");
const PI = 3.14159;

let R = parseFloat(15);
let result = (4.0/3)*PI*Math.pow(R, 3);

console.log("VOLUME = "+result.toFixed(3));



console.log("Desafio 02");
/*
let lines = "4 3".split("\n");
console.log(lines);
let line = lines.shift().split(" ");
let X = parseInt(line[0]);
let Y = parseInt(line[1]);
var price = 0;
    if (X ==  1) {
      price  = 4.0 * Y;
    }
    else if (X == 2) {
      price  = 4.5 * Y;
    }
    else if (X == 3) {
      price  = 5 * Y;
    }
    else if (X == 4) {
      price  = 2 * Y;
    }
    else if (X == 5) {
      price  = 1.5 * Y;
    }
    console.log( "Total: R$ "  + price.toFixed(2));
*/
console.log("Desafio 03");

let lines = "11".split("\n");
let n = parseInt(lines.shift());

for (let i = 1; i <= n; i++) {
  console.log(`${i} ${i ** 2} ${i ** 3}`);
  console.log(`${i} ${i ** 2+1 } ${i ** 3+1}`);
}

console.log("Desafio 04");
let T = 1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111;

console.log((T.length > 140)? "MUTE" : "TWEET" );