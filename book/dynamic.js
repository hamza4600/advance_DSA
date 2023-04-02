//  dynamic programming 
// break in to small pieces 

function fibo(n) {
    if (n <= 1) return n;
    else {
        return fibo(n - 1) + fibo(n - 2);
    }
}

// console.log(fibo(10))

let cache = {};
function opfibo(n = num) { // reduce over lappinh and cache value
    if (n <= 1) return n;
    if (cache[n]) return cache[n];
    return (cache[n] = opfibo(n - 1) + opfibo(n - 2));
}

// console.log(opfibo(100))
// itterative
function itterrate(n) {
    let a = 0;
    b = 1;
    let c = 1;
    for (var i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c
    }
    return c
}

// console.log(itterrate(100))

// AVOID RE-CALCULATIONS
// CAN REDURE RUN TIME FROM N3 TO O(N)

// number of stpes
function nuofSteps(step) {
    if (step < 0) return 0;
    if (step === 0) return 1;
    // in chache
    console.log(cache)
    if (cache[step]) {
        return cache[step];
    } else {
        cache[step] = nuofSteps(step - 1) + nuofSteps(step - 2) + nuofSteps(step - 3);
        return cache[step];
    }
}

// console.log(
//     nuofSteps(20)
// )


// kanapsack problum


// logest common subsequiences  of two string 
function longestSub(str1, str2) {
    let sub = [];
    if (str1.length === 0 || str2.length === 0) return sub;
    // find the common subsequence
    for (let i = 0; i < str1.length; i++) {
        if (str2.indexOf(str1[i]) !== -1) {
            sub.push(str1[i])
        }
    }
    return sub;
}

console.log(longestSub('ABCDGH', 'ABDFHRB'))

// combinaion of string
function combinaion(str) {
    let arr = [];
    if (str.length === 0) return arr;
    // recussion
    let sub = combinaion(str.slice(1));
    for (let i = 0; i < sub.length; i++) {
        arr.push(str[0] + sub[i])
    }
    arr.push(str)
    return arr.concat(sub)
}

console.log(combinaion('XYZ'))

// longest common subsequence
function lcs(x, y) {
    let m = x.length
    let n = y.length;
    let dp = {}

    for (let i = 0; i <= m; i++) {
        dp[i] = [];
    }
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {

            if (i == 0 || j == 0) {
                dp[i][j] = 0;
            }
            else if (x[i - 1] == y[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp;
}

let x = "AGGTAB"
let y = "GXTXAYB"
// let dpArr = lcs(x, y);
// console.log(dpArr);


// Longest comon subsequience 
function Lcs(str1, str2, m, n) {
    if (m === 0 || n === 0) return 0;
    if (str1[m - 1] === str2[n - 1]) {
        return 1 + Lcs(str1, str2, m - 1, n - 1)
    } else {
        return Math.max(
            Lcs(str1, str2, m, n - 1),
            Lcs(str1, str2, m - 1, n)
        )
    }
}
function LCS(str1, str2) {
    return Lcs(str1, str2, str1.length, str2.length)
}

// console.log(LCS('AGGTAB', 'GXTXAYB'))


// Coin Change Problem
// Given a value N, if we want to make change for N cents, and we have infinite supply of each of S = { S1, S2, .. , Sm} valued coins, how many ways can we make the change? The order of coins doesn’t matter.

function countCoinWays(coimArr, noCoins, value) {
    if (value === 0) return 1;
    if (value < 0 || (noCoins <= 0 && value >= 1)) return 0;
    if (value > coimArr.reduce((a, b) => a + b)) return 0;
    return countCoinWays(coimArr, noCoins - 1, value) +
        countCoinWays(coimArr, noCoins, value - coimArr[noCoins - 1])   
}

function countWays(coinArr, value) {
    return countCoinWays(coinArr, coinArr.length, value)
}

console.log(countWays([1, 2, 3], 6), 'coin change')

// levenstein distance
// Given two strings str1 and str2 and below operations that can performed on str1. Find minimum number of edits (operations) required to convert ‘str1’ into ‘str2’.
let map = {}

function editRecursively(str1, str2) {
    // console.log(map)

    if (str1 === str2) return 0;
    if (str1.length === 0) return str2.length;
    if (str2.length === 0) return str1.length;
    if (map[str1 + str2]) return map[str1 + str2];
    if (str1[0] === str2[0]) { // if first char is same
        return editRecursively(str1.slice(1), str2.slice(1))
    }
    let insert = 1 + editRecursively(str1, str2.slice(1));
    let remove = 1 + editRecursively(str1.slice(1), str2);
    let replace = 1 + editRecursively(str1.slice(1), str2.slice(1));
    map[str1 + str2] = Math.min(insert, remove, replace);
    return map[str1 + str2];

}

// console.log(editRecursively('sunday', 'saturday'), 'edit distance')