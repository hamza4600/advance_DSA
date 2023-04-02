// Monday 13 December 

// undirected graph
// do not have direction between vertices  . each node goes from one vertix to another

// directe graph 
//  have direction between vertices  . each node goes from one vertix to another

// weighted graph
// have weight between vertices  . each node goes from one vertix to another weight is the cost of going from one vertix to another 

class UndirectedGraph {
    constructor() {
        this.list = {}
    }
    adVertex(vertex) {
        this.list[vertex] = {}
    }
    addEdges(vertex1, vertex2, weight) {
        if (weight === undefined) {
            weight = 0
        }
        this.list[vertex1][vertex2] = weight;
        this.list[vertex2][vertex1] = weight;
    }
    removeEdges(vertex1, vertex2) {
        if (this.list[vertex1] && this.vertex[vertex1][vertex2] != undefined) {
            delete this.list[vertex1][vertex2]
        }
        if (this.list[vertex2] && this.vertex[vertex2][vertex1] != undefined) {
            delete this.list[vertex2][vertex1]
        }
    }
    removeVertex(vertex) {
        if (this.list[vertex]) {
            for (let neigbur in this.list[vertex]) {
                this.removeEdges[neigbur, vertex]
            }
            delete this.list[vertex]
        }
    }
}

// all  remove is same as in undirected graph 
class DirectedGraph {
    constructor() {
        this.list = {}
    }
    addVertex(vertex) {
        this.list[vertex] = {}
    }
    addEdges(originalVertex, destVertex, weight) {
        if (weight = undefined) {
            weight = 0
        }
        this.list[originalVertex][destVertex] = weight
    }
    BFS(startVertex, fn) {
        let visited = {};
        let queue = []
        queue.push(startVertex)
        while (queue.length) {
            let node = queue.shift();
            if (!visited[node]) {
                visited[node] = true
                fn(node)
                for (let neibour in this.list[node]) {
                    queue.push(neibour)
                }
            }
        }
    }
    DFS(startVertex, fn) {
        let visited = {}
        let stack = [];
        stack.push(startVertex);
        while (stack.length) {
            let node = stack.pop();
            if (!visited[node]) {
                visited[node] = true
                fn(node)
                for (let neibour in this.list) {
                    stack.push(neibour)
                }
            }
        }
    }
    // dijistra Alog to find shot=rted Path between nodes
    _isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    _extraMin(Q, dist) { // q i unvisted and dist is distance from source
        let min = Infinity;
        let minNode = null;
        for (let node in Q) {
            if (dist[node] < min) {
                min = dist[node];
                minNode = node
            }
        }
        return minNode;
    }
    Digistra(source) {
        let unVisted = {};
        let distance = {};
        for (let node in this.list) {  // updated values 
            distance[node] = Infinity;
            unVisted[node] = this.list[node]
        }
        distance[source] = 0; // start point 
        while (!this._isEmpty(unVisted)) {
            let current = this._extraMin(unVisted, distance);
            delete unVisted[current];
            for (let neibour in this.list[current]) {
                let alt = distance[current] + this.list[current][neibour]  // distance from source to current + distance from current to neibour
                // short path
                if (alt < distance[neibour]) {
                    distance[neibour] = alt
                }
            }
        }
        return distance;
    }

}
// we can also impelmen tdigistar in Priroty queue 
class PriorityQueue {
    constructor() {
        this.queue = [];
    }
    enqueue(priority, data) {
        this.queue.push({ priority, data });
        this.sort
    }
    dequeue() {
        if (this.queue.length > 0) {
            this.queue.shift()
        }
    }
    sort() {
        this.queue.sort((a, b) => a.priority - b.priority)
    }
}

// recursion and Back tracking
//  callining itself againg and again and move back if condition isnot meet and memeoized the result  if overlapping occur 
function recu(n, arr) {
    if (n === 1) return;
    arr.push(n * 2);
    if (n > 5) {
        console.log("===", n)
    }
    recu(n - 1, arr)
}

function exmaple1(n) {
    let arr = [];
    recu(n, arr);
    return arr
}
// console.log(exmaple1(10))


// No of ways of coins CAN WE GET value

//min step to make s1 to s2
let map = {};

function editRecursively(str1, str2) {

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

// console.log(editRecursively('Hamza', 'saturday'), 'no of steps')



// all Problums related to 
// combinations  , Permituatations , Backtacking  , string , array forming 



function test() {
    // measure time by function
    let start = new Date().getTime();
    // your code here
    for (let i = 0; i < 100000; i++) {
        console.log(i)
    }
    let end = new Date().getTime();
    console.log("time taken", end - start + "ms");
}
// by Node 38887.000ms
// by c it take 0.0305sec
// test()


// 
function pa(nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1
        } else {
            map[nums[i]] += 1
        }
    }
    for (let w in map) {
        if (map[w] === 1) {
            return w
        }
    }
}
// optimized version return item with single occurance
function asd(nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total = total ^ nums[i] 
    }
    return total
}

// againg didistra 
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
function minDis(unVisted, source) {
    let min = 0;
    let minNod = null;
    for (let node in unVisted) {
        if (unVisted[node] < min) {
            min = source[node];
            minNod = node
        }
    }
    return minNod
}

function digistra(source) {
    let unVisisted = {};
    let distance = {};
    for (let item in (this.list)) {
        unVisisted[item] = null;
        distance[item] = Infinity;
    }
    distance[source] = 0  // start point 
    while (isEmpty(unVisisted)) {
        let current = minDis(unVisisted, distance[source]);
        delete unVisisted[current];
        for (let neibour in this.list[current]) {
            let avg = distance[current] + this.list[current][neibour];
            if (avg < distance[neibour]) {
                distance[neibour] = avg
            }
        }
    }
    return distance;
}



// Trees
class Node {
    constructor(data) {
        this.data = data
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null
    }
    addNode(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, node) {
        if (node.data < root.data) {
            if (!root.left) {
                root.left = node;
            } else {
                this.insertNode(root.left, node)
            }
        } else {
            if (!root.right) {
                root.right = node
            } else {
                this.insertNode(root.right, node)
            }
        }
    }
    BFS() {
        let current = this.root;
        let queue = [];
        if (!current) return;
        queue.push(this.root);
        while (queue.length) {
            let node = queue.shift();
            console.log(node.data)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
    }
    DFS() {
        let current = this.root;
        const stack = [];
        if (!current) return;
        stack.push(current)
        while (stack.length) {
            let node = stack.pop();
            console.log(node.data);
            if (node.right) {
                stack.push(node.right)
            }
            if (node.left) {
                stack.push(node.left)
            }
        }
    }
    // binary Search
    findNode(data) {
        let current = this.root;
        while (current) {
            if (data < current.data) {
                current = current.left
            } else if (data > current.data) {
                current = current.left;
            } else {
                return true
            }
        }
        return false;
    }
    // find Min Node 
    findMin(node) {
        if (!node.left) {
            return node
        } else {
            return this.findMin(node.left)  // left side will always have samlleer Node
        }
    }
    // remove Node  to remove Node
    removeNode(data) {
        this.root = this.remove(this.root, data)
    }
    remove(node, data) {
        // 3 main Cases
        if (!node) return null;
        if (data < node.data) {
            node.left = this.remove(node.left, data)
            return node
        } else if (data > node.data) {
            node.right = this.remove(node.right, data)
            return node;
        } else {
            // at leaf 
            // one childe
            if (!node.left) {
                return node.right;
            } else if (!node.right) {
                return node.left
            }
            // Two childen erro in root node 
            let minNode = this.findMin(node.right);
            node.data = minNode.data;
            node.right = this.remove(node.right, minNode.data);
            console.log("====", node)
            return node;
        }
    }
    // height 
    height() {
        return this.findHeight(this.root);
    }
    findHeight(root) {
        if (!root) return;
        let left = this.findHeight(root.left);
        let right = this.findHeight(node.right);
        return Math.max(left, right);
    }
    // recusions on tree 
    // pre Order Tranvers liek DFS  // root , left , right
    pre_Oder() {
        this.preOder(this.root);
    }
    preOder(node) {
        if (!node) return;
        this.preOder(node.left);
        console.log(node.data)
        this.preOder(node.right)
    }
    // inOrder // left , root , right;
    in_Order() {
        this.inOrder(this.root)
    }
    inOrder(node) {
        if (!node) return;
        this.inOrder(node.left);
        console.log(node.data)
        this.inOrder(node.right)
    }
    // post order left , right , root 
    post_Oder() {
        this.postOrder(this.root)
    }
    postOrder(node) {
        if (node.left) {
            this.postOrder(node.left)
        }
        if (node.right) {
            this.postOrder(node.right)
        }
        console.log(node.data)
    }
}

let tree = new Tree();
tree.addNode(505)
tree.addNode(55)
tree.addNode(507895)
tree.addNode(5015)
tree.addNode(5105)
tree.addNode(50512)
tree.addNode(5045)
tree.addNode(50125)

tree.BFS();
console.log("\n\n")
tree.removeNode(505) // Practice again on remove of Node from tree 
tree.DFS()

// tree.pre_Oder()




// Link list  and Types 

class LNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
// Single 
class SingleLinklist {
    constructor() {
        this.head = null;
    }
    addNode(data) {
        const newNode = new LNode(data);
        if (this.head === null) {
            this.head = newNode
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    // show Nodes
    showNodes() {
        let current = this.head;
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }
    // find
    findNode(data) {
        let current = this.head
        while (current) {
            if (data == current.data) {
                return true;
            }
            current = current.next
        }
        return false;
    }
    // Remove Ndoe
    remove(data) {
        let current = this.head;
        let previus = null;
        while (current) {
            if (data === current.data) {
                if (!previus) {
                    this.head = current.next
                } else {
                    previus.next = current.next;
                }
            }
            previus = current;
            current = current.next;
        }
        return false;
    }
    // reverse 
    reverse() {
        let current = this.head;
        let next, previus;
        while (current) {
            next = current.next;
            current.next = previus;
            previus = current;
            current = next;
        }
        this.head = previus;
    }
}

// console.log("Link List ")
// const like = new SingleLinklist();
// like.addNode(10)
// like.addNode(110)
// like.addNode(1450)
// like.addNode(1026);
// // console.log(like.findNode(102))
// like.remove(1026);
// like.reverse()
// like.showNodes()


// Dounble and Circulat are bit same 
class DNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previus = null;
    }
}

class DoubleLinkList {
    constructor() {
        this.head = null;
    }
    addNode(data) {
        const newNode = new DNode(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
            newNode.previus = current
        }
    }
    showNod() {
        let current = this.head;
        while (current) {
            console.log("\n", current.data)
            current = current.next
        }
    }
    removeNode(data) {
        let current = this.head;
        let previus;
        while (current) {
            if (data == current.data) {
                if (!previus) {
                    this.head = current.next;
                } else {
                    previus.next = current.next
                }
            }
            previus = current;
            current = current.next
        }
        return false
    }
}

// const sx = new DoubleLinkList();
// sx.addNode(10)
// sx.addNode(1045)
// sx.addNode(101)
// sx.addNode(1230)
// sx.addNode(12980)
// sx.removeNode(12980)
// sx.showNod()

class CircuLinkList {
    constructor() {
        this.head = null;
        this.tail = null
    }
    addNode(data) {
        const newNode = new LNode(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.next = this.head;
            this.tail = newNode;
        }
    }
    // remove

}

const aZ = new CircuLinkList();
aZ.addNode(15)
aZ.addNode(1365)
aZ.addNode(125)
aZ.addNode(1556)
aZ.addNode(11265)
console.log(aZ)


// Stack and Queue
class Stack {
    constructor() {
        this.array = [];
    }
    push(data) {
        this.array.push(data)
    }
    pop() {
        if (this.array.length > 0) {
            return this.array.pop();
        };
    }
};

class Queue {
    constructor() {
        this.array = [];
    }
    enqueue(data) {
        this.array.push(data)
    }
    dequeue() {
        if (this.array.length > 0) {
            return this.array.shift();
        };
    }
}

// PriorityQueue
class Priroty_Queu {
    constructor() {
        this.array = [];
    }
    enqueue(data, priority) {
        this.array.push({ data, priority })
        this.array.sort((a, b) => a.priority - b.priority)
    }
    dequeue() {
        if (this.array.length > 0) {
            return this.array.shift();
        };
    }
}

//  Usinh Two Stack 
class Queue_Using_Stack {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    enqueue(data) {
        this.stack1.push(data)
    }
    dequeue() {
        if (this.stack1.length === 0 && this.stack2.length === 0) {
            return "Queue is Empty"
        }
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                const poped = this.stack1.pop();
                this.stack2.push(poped)
            }
        }
        return this.stack2.pop();
    }
}

// using Two Queue
class Stack_Using_Queue {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }
    push(data) {
        this.queue1.push(data)
    }
    pop() {
        if (this.queue1.length === 0) {
            return "Stack is Empty"
        }
        // 
        while (this.queue1.length > 1) {
            const poped = this.queue1.shift();
            this.queue2.push(poped)
            console.log(this.queue2 , "this.queue1")
        }
        const poped = this.queue1.shift();
        // swap
        const temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp;
        return poped;
    }
}

const twe = new Stack_Using_Queue();
twe.push(10)
twe.push(15)
twe.push(20)
twe.push(25)
twe.push(30)
twe.push(35)
twe.push(40)
twe.push(45)

console.log(twe.pop()) 