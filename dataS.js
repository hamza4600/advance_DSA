// Binary tree , Heap  , tree

class bNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Binaayt Tree
class BinaryTree {
    // by array
    constructor() {
        this.root = null;
    }
    add(data) {
        let node = new bNode(data);
        if (this.root === null) {
            this.root = node;
        } else {
            this.insertNode(this.root, node);
        }
    }
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    // show Nodes
    showNodes() {
        this.inOrder(this.root);
    }
    inOrder(node) {
        if (node !== null) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }
    // search
    search(data) {
        return this.searchNode(this.root, data);
    }
    searchNode(node, data) {
        if (node === null) {
            return null;
        } else if (data < node.data) {
            return this.searchNode(node.left, data);
        } else if (data > node.data) {
            return this.searchNode(node.right, data);
        } else {
            return node;
        }
    }
}

let tree = new BinaryTree();
tree.add(10);
tree.add(5);
tree.add(15);
tree.add(3);
tree.add(7);
tree.add(12);
tree.add(18);
tree.showNodes();
console.log(tree.search(5));

//  Implementing a Binary Search Tree using Array

class BinaryTree_array {
    constructor() {
        this.tree = [];
    }
    add(data) {
        if (this.tree.length === 0) {
            this.tree.push(data);
        } else {
            this.tree.push(data);
            this.heapify(this.tree.length - 1);
        }
    }
    heapify(index) {
        let parent = Math.floor((index - 1) / 2);
        if (this.tree[parent] > this.tree[index]) {
            let temp = this.tree[parent];
            this.tree[parent] = this.tree[index];
            this.tree[index] = temp;
            this.heapify(parent);
        }
    }
    showNodes() {
        console.log(this.tree);
    }
    search(data) {
        return this.searchNode(this.tree, data);
    }
    searchNode(tree, data) {
        if (tree.length === 0) {
            return null;
        } else if (data < tree[0]) {
            return this.searchNode(tree.slice(1, tree.length), data);
        } else if (data > tree[0]) {
            return this.searchNode(tree.slice(1, tree.length), data);
        } else {
            return tree[0];
        }
    }

}

let tree_array = new BinaryTree_array();
tree_array.add(10);
tree_array.add(5);
tree_array.add(15);
tree_array.add(3);
tree_array.add(7);
tree_array.add(12);
tree_array.add(18);
// tree_array.showNodes();
tree_array.showNodes();
console.log(tree_array.search(5));


// Graphs

class Graph {
    constructor() {
        this.nodes = 0;
        this.adjacentList = {};
    }
    addVertex(node) {
        this.adjacentList[node] = [];
        this.nodes++;
    }
    addEdge(node1, node2) {
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
    }

}

let myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");

myGraph.addEdge("0", "1");
myGraph.addEdge("0", "2");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "3");
myGraph.addEdge("2", "4");
myGraph.addEdge("3", "4");

myGraph.showConnections();
