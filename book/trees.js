// trees contain nodes connectde to each other 

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
    // pre_order traversal 
    // root, then left, then right 
    pre_order() {
        this.transversePreOrder(this.root);
    }
    transversePreOrder(node) {
        if (!node) return;
        this.transversePreOrder(node.left);
        console.log(node.data);
        this.transversePreOrder(node.right);
    }
    // By Iterrativerly
    pre_order_iterative() {
        let stack = [];
        stack.push(this.root);
        while (stack.length > 0) {
            let node = stack.pop();
            console.log(node.data);
            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
        }
    }
    // in_order traversal
    // left, root, right  
    in_order() {
        this.in_order_transverse(this.root);
    }
    in_order_transverse(node) {
        if (!node) return;
        this.in_order_transverse(node.left);
        console.log(node.data);
        this.in_order_transverse(node.right);   
    }
    // By Iterrativerly
    in_order_iterative() {
        let stack = [];
        let done = false;
        let current = this.root;
        while (!done) {
            if (current != null) {
                stack.push(current);
                current = current.left;
            } else {
                if (stack.length) {
                    current = stack.pop();
                    console.log(current.data);
                    current = current.right;
                } else {
                    done = true;
                }
            }
        }
    }
    // Post_order traversal
    // done by left, right, root all left node vist then right node visit then root node visit
    post_order() {
        this.post_order_transverse(this.root);
    }
    post_order_transverse(node) {
        if (node.left) {
            this.post_order_transverse(node.left);
        }
        if (node.right) {
            this.post_order_transverse(node.right);
        }
        console.log(node.data);  
    }
    // By Iterrativerly
    post_order_iterative() {
        let stack1 = [];
        let stack2 = [];
        stack1.push(this.root);
        while (stack1.length) {
            let node = stack1.pop();
            stack2.push(node);
            if (node.left) {
                stack1.push(node.left);
            }
            if (node.right) {
                stack1.push(node.right);
            }
        }
        while (stack2.length) {
            let node = stack2.pop();
            console.log(node.data);
        }
    }
    // level_order traversal  or breadth_first Search
    // visit all node in level order one level at a time
    breadth_first_search() {
        let root = this.root;
        let queue = [];
        if (!root) return;
        queue.push(root);
        while (queue.length) {
            let node = queue.shift();
            console.log(node.data);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }
    // depth_first_search it is like pre_order traversal  or post_order traversal 
    // visit all node in depth order one level at a time
    depth_first_search() {
        let root = this.root;
        let stack = [];
        if (!root) return;
        stack.push(root);
        while (stack.length) {
            let node = stack.pop();
            console.log(node.data);
            if (node.right) {
                stack.push(node.right);
            }
            if (node.left) {
                stack.push(node.left);
            }
        }
    }
    // insert node in tree
    insert(data) {
        let newNode = new Node(data);
        if (!this.root) {
            this.root = newNode;
            return;
        } else {
            this.insertNode(this.root, newNode);
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
    // insertion can alsi be done by iterative method
    insert_iterative(data) {
        let newNode = new Node(data);
        if (!this.root) {
            this.root = newNode;
            return;
        } else {
            let current = this.root;
            while (current) {
                if (newNode.data < current.data) {
                    if (!current.left) {
                        current.left = newNode;
                        break;
                    } else {
                        current = current.left;
                    }
                } else {
                    if (!current.right) {
                        current.right = newNode;
                        break;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    // search node in tree 
    // search can be done by iterative method
    search_iterative(data) {
        let current = this.root;
        while (current) {
            if (data < current.data) {
                current = current.left;
            } else if (data > current.data) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    // search can be done by recursive method
    search_recursive(data) {
        return this.search(this.root, data);
    }
    search(node, data) {
        if (!node) return false;
        if (data < node.data) {
            return this.search(node.left, data);
        } else if (data > node.data) {
            return this.search(node.right, data);
        } else {
            return true;
        }
    }

    // find min value in tree
    findMinNode(node) {
        if (!node.left) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }
    // remove node from tree
    //  3 case 
    // 1. node is leaf node
    // 2. node has one child   child will replace the node
    // 3. node has two child   find min value in right subtree and replace the node OR find max value in left subtree and replace the node
    remove(data) {
        this.root = this.removeNode(this.root, data);
    }
    removeNode(node, data) {
        if (!node) return null;
        if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else if (data > node.data) {
            node.right = this.removeNode(node.right, data);
            return node;
        } else {
            // node is leaf node
            if (!node.left && !node.right) {
                node = null;
                return node;
            }
            // node has one child   
            if (!node.left) {
                node = node.right;
                return node;
            } else if (!node.right) {
                node = node.left;
                return node;
            }
            // node has two child
            let minNode = this.findMinNode(node.right);
            node.data = minNode.data;
            node.right = this.removeNode(node.right, minNode.data);
            return node;
        }
    }
    // find height of tree
    // height of tree is the number of edges in longest path from root to leaf node
    height() {
        return this.findHeight(this.root);
    }
    findHeight(node) {
        if (!node) return -1;
        let leftHeight = this.findHeight(node.left);
        let rightHeight = this.findHeight(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
    // find min value in tree
    findMin() {
        let current = this.root;
        while (current.left) {
            current = current.left;
        }
        return current.data;
    }
    // find max value in tree
    findMax() {
        let current = this.root;
        while (current.right) {
            current = current.right;
        }
        return current.data;
    }
    rootToLeafPathSum(sum) {
        return this.rootToLeafPathSumUtil(this.root, sum);
    }
    rootToLeafPathSumUtil(node, sum) {
        if (!node) return false;
        if (!node.left && !node.right && node.data === sum) return true;
        return this.rootToLeafPathSumUtil(node.left, sum - node.data) || this.rootToLeafPathSumUtil(node.right, sum - node.data);
    }
    root_value_to_leaf_path_sum(sum) {
        let result = [];
        this.rootToLeafPathSumUtil2(this.root, sum, [], result);
        return result;
    }
    rootToLeafPathSumUtil2(node, sum, path, result) {
        if (!node) return;
        path.push(node.data);
        if (!node.left && !node.right && node.data === sum) {
            result.push(path.slice());
        }
        this.rootToLeafPathSumUtil2(node.left, sum - node.data, path, result);
        this.rootToLeafPathSumUtil2(node.right, sum - node.data, path, result);
        path.pop();
    }
    root_value() {
        return this.root.data;
    }
    // show values like tree 
    // 5
    // 3 7
    // 2 4 6 8
    // 1 2 3 4 5 6 7 8
    show() {
        let result = [];
        this.showUtil(this.root, result);
        return result;
    }
    showUtil(node, result) {
        if (!node) return;
        result.push(node.data);
        this.showUtil(node.left, result);
        this.showUtil(node.right, result);
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
console.log(tree.show());


// problums 
// 
// 1. find height of tree
function height(node) {
    if (!node) return -1;
    let leftHeight = height(node.left);
    let rightHeight = height(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
}
// console.log(height(tree.root),"====");

// find lowesest Common Ancestor of two nodes

function lowestCommonAncestor(root, p, q) {
    if (!root) return null;
    if (root.data > p && root.data > q) {
        return lowestCommonAncestor(root.left, p, q);
    } else if (root.data < p && root.data < q) {
        return lowestCommonAncestor(root.right, p, q);
    } else {
        return root;
    }
}

console.log(lowestCommonAncestor(tree.root, 1, 19), "====++"); // will the 

// Print nth noed from root
//  used BST 
function nthNode(root, k) {
    let arryKth = [];
    let queue = [];
    if (!root) return;
    // B F S 
    queue.push([root, 0]);
    while (queue.length) {
        let tuple = queue.shift();
        let temp = tuple[0]
        let height = tuple[1]

        if (height === k) {
            arryKth.push(temp.value)
        }
        if (temp.left) {
            arryKth.push([temp.left, height + 1])
        }
        if (temp.right) {
            arryKth.push([temp.left, height + 1])
        }
    }
    console.log(arryKth)
}

// check binary tree is sub tree of another tree
// helper 
function isSame_tree(root1, root2) {
    if (root1 == null && root2 == null) {
        return true
    }
    if (root1 == null || root2 == null) {
        return false;
    }
    return root1.value == root2.value &&
        isSame_tree(root1.left, root2.left) &&
        isSame_tree(root1.right, root2.right)
}

function checkIfSubTree(root, subtree) {
    let queue = [];
    let counter = 0;
    if (!root) return;
    queue.push(root);
    while (queue.length) {
        let temp = queue.shift();
        if (temp.data == subtree.data == isSame_tree(temp, subtree)) {
            return true;
        }
        if (temp.left) {
            queue.push(temp.left)
        }
        if (temp.right) {
            queue.push(temp.right)
        }
    }
    return false;
}

// Is Mirror of other tree 
// right of A must be equal to left of B
// top must be same
function isMirror(tree1, tree2) {
    if (!tree1 && !tree2) {  // boyh are empty
        return true
    }
    if (!tree1 || tree2) { // one is empty 
        return false;
    }

    let checkLeftRight = isMirror(tree1.left, tree2.right)
    let checkRightLeft = isMirror(tree1.right, tree2.left)

    return tree1.value == tree2.value &&
        checkLeftRight && checkRightLeft
}

