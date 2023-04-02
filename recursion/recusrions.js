// combination in array 
function combination(arr) {
    let result = [];
    function helper(arr, temp) {
        if (arr.length === 0) {
            result.push(temp)
        }
        for (var i = 0; i < arr.length; i++) {
            let newTemp = temp.slice();
            newTemp.push(arr[i]);
            let newArr = arr.slice(0, i).concat(arr.slice(i + 1))
            helper(newArr, newTemp)
        }
    }
    helper(arr, [])
    return result;
}

// console.log(combination(['haza', "bsdx", "crvty", "48rg9"]))

function ms(arr) {
    let n = arr.length;
    let total = Math.floor((n + 1) * (n + 2) / 2);
    for (let i = 0; i < n; i++) {
        total -= arr[i]
    }
    return total;
}
const za = [1, 2, 3, 4, 5, 6, 7, 8, 10]

function sl(arr) {
    let sm = 0, lg = 0;
    for (let i = 0; i < arr.length; i++) {
        if (sm > arr[i]) {
            sm = arr[i]
        }
        if (lg < arr[i]) {
            lg = arr[i]
        }
    }
    return [sm, lg]
}
console.log(
    sl(za)
)