// How much letter can be formed from 5 letter 
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

function Permutataion(n, m) {
    // p = n! / (n-r)!n
    let r = n - m
    return factorial(n) / factorial(r)
}

// console.log(Permutataion(26,5))  // permutation of 5 letter from 26 letter

function Combination(n, m) {
    // c = n! / (r! * (n-r)!)
    return factorial(n) / (factorial(m) * factorial(n - m))
}

// console.log(Combination(26,5)) // combination of 5 letter from 26 letter


//  all Pemutaionin of String 
let aax = []
function str_Per(str, ans) {
    if (str.length === 0) {
        aax.push(ans)
        console.log(aax)
        return;
    }
    for (let i = 0; i < str.length; i++) {
        let aa = str[i];
        let rose = str.substring(0, i) + str.substring(i + 1);
        str_Per(rose, ans + aa);
    }
}
str_Per("abc", "")

// combination odf string 
function str_com(str) {
    let arr = new Array();
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            arr.push(str.slice(i, j))
        }
    }
    return arr
}

// console.log(str_com("abc"))


function permutator(inputArr) {
    var results = [];
    function permute(arr, memo) {
        var cur, memo = memo || [];
        for (var i = 0; i < arr.length; i++) {
            cur = arr.splice(i, 1);
            if (arr.length === 0) {
                results.push(memo.concat(cur));
            }
            permute(arr.slice(), memo.concat(cur));
            arr.splice(i, 0, cur[0]);
        }
        return results;
    }
    return permute(inputArr);
}

// console.log(permutator([ 'ab', 'zx', 45]))

// word breaker 


function wordBreak(n, dict, s) {
    let ans = "";
    wordBreakUtil(n, s, dict, ans);
}

function wordBreakUtil(n, s, dict, ans) {
    for (let i = 1; i <= n; i++) {
        let prefix = s.substring(0, i);
        if (dict.includes(prefix)) {
            if (i == n) {
                ans += prefix;
                console.log(ans, "\n")
                return;
            }
            wordBreakUtil(n - i, s.substring(i, n), dict, ans + prefix + " ");
        }
    }
}

let dict = ["mobile", "samsung", "sam", "sung",
    "man", "mango", "icecream", "and",
    "go", "i", "love", "ice", "cream"];
let str = "iloveicecreamandmango";
// console.log(wordBreak(dict,str))
// wordBreaker(dict, str)


// [Practice ]
function cea(str) {
    let arr = [];
    function helee(str, ans) {
        if (str.length === 0) {
            arr.push(ans);
            return;
        }
        for (let i = 0; i < str.length; i++) {
            let one = str[i];
            let rest = str.substring(0, i) + str.substring(i + 1);
            helee(rest, ans + one)
        }
    }
    helee(str, "")
    return arr;
}

// console.log(cea("XYZ"), "===")


// Mod of big number  Mod is reminder 
function mod(a, b) {
    return (a % b + b) % b;
}
// console.log(mod(1000007,2) , "===")

// Primees
function isPrime(n) {
    if (n == 1 || n == 0) return false;
    for (let i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            return false
        }
    }
    return true
}
function primes(n) {
    let arrr = [];
    for (let k = 1; k <= n; k++) {
        if (isPrime(k)) {
            arrr.push(k)
        }
    }
    return arrr
}
// console.log(primes(10))


// sum of all factoraial for number
function fact(n) {
    let num = 1;
    for (let i = 1; i <= n; i++) {
        num *= i
    }
    console.log(num)
}
function recfac(n) {
    if (n === 0) return 1;
    return n * recfac(n - 1)
}
// fact(10)
// console.log(recfac(10))
function sum_toN(n) {
    if (n === 1) return 1;
    return n + sum_factor(n - 1)
}

// factor of number 
function factor(n) {
    let sumofFactorial = 0;
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            console.log(i, "Factors")
            sumofFactorial += i
        }
    }
    console.log(sumofFactorial)
}

// GDC of number 
function gdc(a, b) {
    if (b == 0) {
        return a;
    }
    return gdc(b, a % b)
}

// Power of numvebr
function power(a, b) {
    let num = 1;
    while (b > 0) {
        if (b & 1) { // odd
            num = num * a
        }
        b = b >> 1 // /2
        a = a * a
    }
    return num
}

console.log(
    power(3, 5)
)