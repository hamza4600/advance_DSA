// array problumns

// squar root of number
function squRoto(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    let i = 1, square = 1;
    while (square < n) {
        if (square === n) {
            return square
        }
        i++;
        square = i * i;
    }
    return i;
}
console.log(squRoto(100))
// Optimze solution
function Optimze_root(number) {
    if (number === 0 || number === 1) {
        return n
    }
    var start = 1, end = number, ans;

    while (start <= end) {
        let mid = parseInt((start + end) / 2);

        if (mid * mid == number)
            return mid;

        if (mid * mid < number) {
            start = mid + 1; // use the upper section
            ans = mid;
        } else {
            end = mid - 1; // use the lower section
        }
    }
    return ans;
}

console.log("====", Optimze_root(810980))

// two item to give sum of num

function sum_arr(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] + arr[i] === num) {
                console.log(arr[i], arr[j])
                return true;
            }
        }
    }
    return false;
};
// O(n)2
// console.log(sum_arr([2, 3, 4, 5, 6, 7, 89], 9))

// Optimized 
function sum_map(arr, sum) {
    let map = {};
    for (var i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            return true;
        } else {
            console.log("====sum", arr[i])
            map[sum - arr[i]] = arr[i]
        }
    }
    return false
}
// console.log("Optimized", sum_map([2, 3, 4, 5, 6, 7, 89], 9))

// item that appers only Once
function once(arr) {
    let map = {};
    for (var i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            map[arr[i]]++;
        } else {
            map[arr[i]] = 1;
        }
    }
    for (var key in map) {
        if (map[key] === 1) {
            return key;
        }
    }
}

// console.log("once", once([2, 3, 4, 5, 6, 7, 89, 2, 3, 4, 5, 6, 7, 90]))

// second approch 
function once2(arr) {
    let set = new Set();
    for (var i = 0; i < arr.length; i++) {
        if (set.has(arr[i])) {
            set.delete(arr[i])
        } else {
            set.add(arr[i])
        }
    }
    return set;

}
// console.log("once2", once2([2, 3, 4, 5, 6, 7, 89, 2, 3, 4, 5, 6, 7, 90]))

// sort array of words 
function sort_words(arr) {
    return arr.sort((a, b) => {
        return a.length - b.length;
    })
}
// console.log("sort_words", sort_words(["aaa", "aaaa", "aaaaa", "a", "aa"]))

// word occuernce in a sentence 
function word_occuernce(sentence) {
    var occurance = {};
    var words = sentence.split(" ");
    for (var i = 0; i < words.length; i++) {
        let letter = words[i];
        if (occurance[letter]) {
            occurance[letter]++;
        } else {
            occurance[letter] = 1;
        }
    }
    let max = 0;
    let max_word = "";
    for (var key in occurance) {
        if (occurance[key] > max) {
            max = occurance[key];
            max_word = key;
        }
    }
    return max_word + " " + max;
}

const sent = 'practice makes perfect get perfect by practice just practice';
console.log("word_occuernce ==", word_occuernce(sent))

// 