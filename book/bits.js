/*
Basic opertaions 
& - AND
| - OR
^ - XOR
~ - NOT
<< - Left shift
>> - Right shift
>>> - Zero-fill right shift

AND is true only if both operands are true
a & b
0 & 0 = 0
0 & 1 = 0
1 & 0 = 0
1 & 1 = 1

OR is true if either of the operands is true
a | b
0 | 0 = 0
0 | 1 = 1
1 | 0 = 1
1 | 1 = 1

XOR is true if either of the operands is true but not both of them 
a ^ b
0 ^ 0 = 0
0 ^ 1 = 1
1 ^ 0 = 1
1 ^ 1 = 0

NOT is true if the operand is false and false if the operand is true  bits are inverted
~a
~0 = 1
~1 = 0
 bits are 32 bit signed integers

Left shift is true if the operand is false and false if the operand is true works like multiplication
 a << b
a << 0 = a
a << 1 = a * 2
a << 2 = a * 4
a << 3 = a * 8
a << 4 = a * 16
a << 5 = a * 32
a << 6 = a * 64
a << 7 = a * 128
a << 8 = a * 256

Right shift is true if the operand is false and false if the operand is true works like division
    a >> b
a >> 0 = a
a >> 1 = a / 2
a >> 2 = a / 4
a >> 3 = a / 8
a >> 4 = a / 16
a >> 5 = a / 32
a >> 6 = a / 64
a >> 7 = a / 128
a >> 8 = a / 256

Zero-fill right shift is true if the operand is false and false if the operand is true works like division
    a >>> b
a >>> 0 = a
a >>> 1 = a / 2
a >>> 2 = a / 4
a >>> 3 = a / 8
a >>> 4 = a / 16
a >>> 5 = a / 32
*/


const bitsAdd = (a, b) => {
    while (b != 0) {   // while b is not zero
        var carry = a & b; // carry now contains common set bits of a and b
        a = a ^ b; // Sum of bits of a and b where at least one of the bits is not set
        b = carry << 1;  // Carry is shifted by one so that adding it to a gives the required sum
    }
    return a;
}

console.log(
    bitsAdd(1, 200)
)

const negitive = a => ~a + 1;

console.log(negitive(10))

const multiply = (a, b) => {
    var res = 0;
    while (b > 0) {
        res += a;
        b--;
    }
    return res;
}

console.log(multiply(8, 100))

const divide = (a, b) => {
    var res = 0;
    while (a > 0) {
        a -= b;
        res++;
    }
    return res;
}

// console.log(divide(100, 8))

const power = (a, b) => {
    var res = 1;
    while (b > 0) {
        res *= a;
        b--;
    }
    return res;
}

// console.log(power(2, 4))

const power2 = (a, b) => {
    if (b == 0) return 1;
    if (b == 1) return a;
    if (b % 2 == 0) {
        return power2(a * a, b / 2);
    } else {
        return a * power2(a * a, (b - 1) / 2);
    }
}

// console.log(power2(2, 4))

// Bit Opertaors 
function And(num) {
    return (num & 1) === 0;
}
console.log("Number is even", And(13))

// .. Lef SHift
function leftShift(num) {
    return (num << 1);
}
console.log("Double numer", leftShift(50))

function leftNum(a, b) {
    return a << b;
}

console.log("multiply number by Second ", leftNum(50, 10))

// RRight Shift 
function rightShift(num) {
    return (num >> 1);
}
console.log("Divide numer by 2 ", rightShift(5057))


function rightNum(a, b) {
    return a >> b;
}
console.log("Divide numer number by Second", rightNum(50, 10))

// XOR number 
function xor(num) {
    return (num ^ 5);
};
console.log("XOR", xor(10))
// if we xor num with same it become zero and with differnt num will add that num 

// Or a number
function Or(a, b) {
    return a | b;
}
console.log("Orrr", Or(10, 55))


//   check if num is power of 2 
function isPowerod(num) {
    return (num & (num - 1)) === 0
}
console.log("isPowerOfTwo", isPowerod(8));