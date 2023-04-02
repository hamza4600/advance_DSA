//  Permiutation || Combination nad Recusrion
// Recusion
function rec(n) {
    if (n == 1) {
        return
    }
    console.log("Recusion", n)
    rec(n - 1)
}
// rec(10)

function add(n) {
    if (n == 0) {
        return n
    }
    let sum = n + add(n - 1)
    return sum
}

// sum of digits of Number 
function sumOfDigits(n) {
    if (n == 0) {
        return n
    }
    let sum = n % 10 + sumOfDigits(Math.floor(n / 10))
    return sum
}
// console.log(sumOfDigits(123445))

// Permutation
// is different arrangement of set of elements can make if element  are take one  at a time 
// Permutataion = factorial(n) / factorial(n-r) r is the number of element you want to take at a time
// p = n! / (n-r)!

function factorial(n) {
    let fact = 1
    for (let i = 1; i <= n; i++) {
        fact = fact * i
    }
    return fact
}

function recurFactorial(n) {
    if (n == 0) {
        return 1
    }
    let fact = n * recurFactorial(n - 1)
    return fact
}

function permu(n) {
    // p = n! / (n-r)!
    let r = n - 1
    return factorial(n) / factorial(n - r)
}
console.log(permu(4), "Permutation")


//  Basic formula for Permutation is  n! / (n-r)!
function possiblePermitution(n) {
    let fact = 1
    for (let i = 1; i <= n; i++) {
        fact = fact * i
    }
    return fact
}

console.log(possiblePermitution(4))

// Combination
// is a differnece ways od seleceting element in a set of element 
// Combination = factorial(n) / (factorial(r) * factorial(n-r))  
// c = n! / (r! * (n-r)!)

function combi(n, r) { // r is the number of element you want to take at a time
    let ans = factorial(n) / (factorial(r) * factorial(n - r))
    return Math.round(ans)
}
console.log(combi(40, 10), "Combination")



function permutation(str, ans) {
    if (str.length == 0) {
        console.log(ans)
        return
    }
    for (let i = 0; i < str.length; i++) {
        let ch = str[i]
        let ros = str.substring(0, i) + str.substring(i + 1)
        permutation(ros, ans + ch)
    }
}
permutation("abc", "")



function combination(str, ans, idx) {
    if (idx == str.length) {
        console.log(ans)
        return
    }
    combination(str, ans + str[idx], idx + 1)
    combination(str, ans, idx + 1)
}


// Practice Time

// How mant letters be formed by BANAANA
// 1. B A N A A N A
function noWays(str) {
    // unique char in string 
    let unique = ""
    for (let i = 0; i < str.length; i++) {
        if (unique.indexOf(str[i]) == -1) {
            unique += str[i]
        }
    }
    // No of ways
    let ans = 1;
    for (let i = 0; i < unique.length; i++) {
        let count = 0
        for (let j = 0; j < str.length; j++) {
            if (unique[i] == str[j]) {
                count++
            }
        }
        ans = ans * factorial(count)
    }
    console.log(factorial(str.length) / ans)
}
noWays("BANAANA")

// letter DRIVER can be formed and such al vowels are together 
function xa(str) {
    // p = n!/(n-r)!
    // assume IE as a single character 5
    let n = factorial(5);
    // r = 2  becau 2 vovalws
    let r = factorial(2);
    let c = n / r;
    return c;
}
console.log(xa("DRIVER"))

// creat a team of 4 choic of 15
function ca(a, b) {
    // C = n!/(r! * (n-r)!)
    return factorial(a) / (factorial(b) * factorial(a - b))
}
console.log(ca(15, 4), "===")

// In how many ways can a group of 5 members be formed by selecting 3 boys out of 6 boys and 2 girls out of 5 girls?
function sol(boys, girls) {
    let bo = ca(6, 3);
    let gir = ca(5, 2);
    return bo * gir;
}
// console.log(sol())

// How many word to be formed from b=non repeted letter of it 
function sq(str) {
    let uniq = ''; // unique
    for (let i = 0; i < str.length; i++) {
        if (uniq.indexOf(str[i]) == -1) {
            uniq += str[i];
        }
    }
    return ca(uniq.length, uniq.length)
}
// sq("DRIVER")

//How much is 2% of 50kg
function muc() {
    let aa =  50 * 2 / 100
    return aa 
}

console.log(ca(15,2))

