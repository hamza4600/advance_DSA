// Graph
// undirected Graph

class UndirectedGraph {
    constructor() {
        this.list = {};
    }
    addVertices(vertex) {  // node
        this.list[vertex] = {};
    }
    addEdges(vertex1, vertex2, weight) {  // connection
        if (weight === undefined) {
            weight = 0;
        }
        this.list[vertex1][vertex2] = weight;
        this.list[vertex2][vertex1] = weight;
    }
    removeEdges(vertex1, vertex2) {
        if (this.list[vertex1] && this.list[vertex1[vertex2]] !== undefined) {
            delete this.list[vertex1][vertex2]
        }
        if (this.list[vertex2] && this.list[vertex2][vertex1] !== undefined) {
            delete this.list[vertex2][vertex1]
        }
    }
    removeVertex(vertex) {
        if (this.list[vertex]) {
            for (let innerVertex in this.list[vertex]) {
                this.removeEdges[innerVertex, vertex]
            }
            delete this.list[vertex]
        }
    }
}
const undirected = new UndirectedGraph();
undirected.addVertices(1);
undirected.addVertices(2);
undirected.addVertices(3);
undirected.addVertices(4);
undirected.addVertices(5);


undirected.addEdges(1, 2, "edchd")
undirected.addEdges(2, 3, "cbhdhjcl451");
undirected.addEdges(3, 4, "xbedwc56c");
undirected.addEdges(4, 5, "32ce+c56");
undirected.addEdges(1, 5, "4cre65vce");

console.log(undirected.list)
undirected.removeVertex(5);
console.log(undirected.list)

class DirectedGraph {
    constructor() {
        this.directed = {}
    }
    addVertices(vertices) {
        this.directed[vertex] = {};
    }
    addEdges(vertex1, vertex2, weight) {
        if (weight === undefined) {
            weight = 0;
        }
        this.directed[vertex1][vertex2] = weight;  // main diffrencer 
    }
}


//  Trees 
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    insert(data) {
        let newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    serachNode(data) {
        let current = this.root;
        while (current) {
            if (data < current.left) {
                current = current.left
            } else if (data > current.data) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    BFS() { // visit node in level one level at time  OR level Order tranverse
        let root = this.root;
        let queue = [];
        if (!root) return;
        queue.push(root);
        while (queue.length) {
            let node = queue.shift();
            console.log(node.data);
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
    }
    DFS() { // top to bottom OR Pre order Tranverse Post Order Tranves
        let root = this.root;
        let stack = [];
        stack.push(root);
        while (stack.length) {
            let node = stack.pop();
            console.log(node.data);
            if (node.left) {
                stack.push(node.left)
            }
            if (node.right) {
                stack.push(node.right)
            }
        }
    }
    // pre Order Or DFS recersively  root , left , right 
    pre_Order() {
        this.preOrderRec(this.root)
    }
    preOrderRec(node) {
        if (!node) return;
        this.preOrderRec(node.left);
        console.log(node.data);
        this.preOrderRec(node.right);
    }
    // post order  left , right , root , all visted then next 
    post_Order() {
        this.postOrder(this.root)
    }
    postOrder(node) {
        if (node.left) {
            this.postOrder(node.left)
        }
        if (node.right) {
            this.postOrder(node.rigt)
        }
        console.log(node.data)
    };
    height() {
        return this.finHeight(this.root)
    }
    finHeight(node) {
        if (!node) return -1;
        let left = this.finHeight(node.left);
        let right = this.finHeight(node.right);
        return Math.max(left, right) + 1;
    }
    // Min Node 
    findMin(node) {
        if (!node.left) {
            return node;
        } else {
            return this.findMin(node.left);
        }
    }
    // remove Node in tree;
    remove(data) {
        this.root = this.remove_Node(this.root, data);
    }
    remove_Node(node, data) {
        if (!node) return;
        if (data < node.left) {
            node.left = this.remove_Node(node.left, data);
            return node;
        } else if (data > node.right) {
            node.right = this.remove_Node(node.right, data);
            return node;
        } else {
            // if is left node
            if (!node.left && !node.right) {
                node = null;
                return node;
            }
            // one child 
            if (!node.left) {
                node = node.right;
                return node;
            } else if (!node.right) {
                node = node.left;
                return node;
            }
            // two childern
            let minNode = this.findMin(node.right);
            node.data = minNode.data;
            node.right = this.remove_Node(node.right, minNode.data);
            return node

        }
    }
}

let tree = new Tree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);
tree.insert(1);
tree.insert(4);
tree.insert(6);
tree.insert(8);
tree.insert(11);
tree.insert(13);
tree.insert(16);
tree.insert(19);
tree.insert(2);
tree.insert(9);
tree.insert(14);
tree.insert(17);


tree.remove(10)
tree.remove(5)
tree.remove(15)
console.log(tree.DFS());



class Un_Directed {
    constructor() {
        this.list = {};
    }
    addVertex(vertex) {
        this.list[vertex] = {};
    }
    addEdges(vertex1, vertex2, weight) {
        if (weight === undefined) {
            weight = 0;
        }
        this.list[vertex1][vertex2] = weight;
    }
    BFS(vertex, fn) {
        let visited = {};
        let queue = [];
        queue.push(vertex);
        while (queue.length) {
            let node = queue.shift()
            if (!visited[node]) {
                visited[node] = true;
                fn(node);
                for (let nebur in this.list[node]) {
                    queue.push(nebur);
                }
            }
        }
    }
    DFS(vertex, fn) {
        let visited = {};
        let stack = [];
        stack.push(vertex);
        while (stack.length) {
            let node = stack.pop();
            if (!visited[node]) {
                visited[node] = true;
                fn(node)
                for (let nebur in this.list[node]) {
                    stack.push(nebur);
                }
            }
        }
    }
// dISGISTRA alGO

}
// 
const directed = new Un_Directed();
directed.addVertex("A")
directed.addVertex("B")
directed.addVertex("C")
directed.addEdges("A", "B", "Hamza")
directed.addEdges("B", "C", "Hamz6454a")
directed.addEdges("C", "A", "Ham44564za")

directed.BFS("A" , (ver) => {
    console.log(ver)
})
