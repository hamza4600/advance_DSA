// dount in console
function cross() {
    let n = 10;
    for (let i = 0; i < n; i++) {
        let str = "";
        for (let j = 0; j < n; j++) {
            if (i === j || i + j === n - 1) {
                str += " * "
            } else {
                str += " "
            }
        }
        console.log(str)
    }

}

function box() {
    let n = 10;
    for (let i = 0; i < n; i++) {
        let str = "";
        for (let j = 0; j < n; j++) {
            if (i === n - 1 || j === n - 1 || i === 0 || j === 0) {
                str += " * "
            }
            else if (i === j || i + j === n - 1) {
                str += " * "
            }
            else if (i === n - 2 || j === n - 2 || i === 1 || j === 1) {
                str += " - "
            }

            else {
                str += "   "
            }
        }
        console.log(str)
    }

}
// circular()

// reveers strig
function rev(str) {
    return str.split("").reverse().join("")
}
function rev1(str) {
    let stack = "";
    for (let i = str.length - 1; i >= 0; i--) {
        stack += str[i]
    }
    return stack
}
function revR(str) {
    if (str.length <= 1) {
        return str;
    }
    return str.charAt(str.length - 1) + revR(str.substring(0, str.length - 1))
}

function pali(str) {
    if (str.length <= 1) return true;
    if (str.charAt(0) === str.charAt(str.length - 1)) {
        return pali(str.substring(1, str.length - 1))
    }
    return false
}

// decimal to biunar 
function convert(num) {
    if (num == 0) {
        return 0
    } else {
        return (
            (num % 2) + 10 * convert(parseInt(num / 2))
        )
    }
}
function bi(num) {
    if (num == 0) return;
    console.log(num % 2)
    return bi(parseInt(num / 2))
}

// fibi 
let map = {};
function fibo(n) {
    if (n <= 1) return n;
    if (map[n]) return map[n];
    return (map[n] = fibo(n - 1) + fibo(n - 2));
}

// Meger SOrt 
// Divide array  in Two small and replace postions
function merg_sort(arr) {

    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(merg_sort(left), merg_sort(right))
}
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

// merg_sort([10, 100, 500, 1, 456, 9875])

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function rever_link(linklist) {
    if (linklist === null || linklist.next === null) return linklist;
    let newHead = rever_link(linklist.next);
    linklist.next.next = linklist;
    linklist.next = null;
    return newHead;
}

const link = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: null
                }
            }
        }
    }
}

// rever_link(link)
function merge_link(link1, link2) {
    if (link1 === null) return link2;
    if (link2 === null) return link1;
    if (link1.value < link2.value) {
        link1.next = merge_link(link1.next, link2);
        return link1;
    } else {
        link2.next = merge_link(link1, link2.next);
        return link2;
    }
}

// insertion in Tree
function tree_insert(tree, data) {
    if (tree === null) return new Node(data);
    if (data < tree.data) {
        tree.left = tree_insert(tree.left, data)
    }
    else {
        tree.right = tree_insert(tree.right, data)
    }
    return tree;
}

//  all leaf node in tree
function leaf(tree) {
    if (tree === null) return;
    if (tree.left === null && tree.right === null) {
        console.log(tree.data)
        return;
    }
    leaf(tree.left);
    leaf(tree.right);
}

// Factotraisl 
function factoraila(num) {
    return tailfact(num, 1)
}
function tailfact(num, acc = 1) {
    if (num > 0) {
        return tailfact(num - 1, acc * num)
    }
    return acc;
}

//  In a netweork two nodes are infexted with virus and they can infect only one node at a time  remove the virus from the network 

// find the infexred node 
// delete the node so they are not part of the network
// infeted nodes are 21 and 22
function remove_virus(graph) {
    for (let i = 0; i < graph.length; i++) {
        for (let l = 0; l < graph[i].length; l++) {
            if (graph[i][l] === 21 || graph[i][l] === 22) {
                graph[i].splice(l, 1)
            }
        }
    }
    return graph;
}

let aa = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18],
    [19, 20, 21],
    [22, 23, 24],
];

// if Input is a undirected graph
// remove node -10 and -11
// for undiredted graph
// find the node and delete the node
const findInfected = (graph, infected) => {
    let queue = [];
    let visited = {};
    for (let no in graph) {
        queue.push(no);
    }
    while (queue.length) {
        let node = queue.shift();

        if (infected.includes(parseInt(node))) {
            console.log(node + " is infected",)
            infected.splice(infected.indexOf(parseInt(node)), 1);
            // delete graph[node];
        }

        if (!visited[node]) visited[node] = true;

        for (let neibour in graph[node]) {
            if (!visited[neibour]) {
                queue.push(neibour);
            }
        }

    }
    return graph;
}

let bb = {
    1: { 2: 1, 3: 1 },
    2: { 1: 1, 4: 1, 5: 1 },
    3: { 1: 1, 6: 1, 7: 1 },
    4: { 2: 1, 8: 1, 9: 1 },
    5: { 2: 1, 10: 10, 11: 10 },
    6: { 3: 1, 12: 1, 13: 1 },
    7: { 3: 1, 14: 1, 15: 1 },
}
let inf = [10, 11];

// findInfected(bb, inf)
const uniqu = (arr) => {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = true;
    }
    return Object.keys(obj);
    // non repeated element xor 
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i + 1; j < arr.length; j++) {
    //         if (arr[i] ^ arr[j]) {
    //             console.log(arr[i], arr[j])
    //         }
    //     }
    // }
}

console.log(

)

