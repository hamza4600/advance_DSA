// linkList 

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SingleLinklist {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        if (this.head === null) {
            this.head = new Node(data);
        } else {
            let temp = this.head;
            this.head = new Node(data);
            this.head.next = temp;
        }
        this.size++;
    }
    remove(data) {
        let current = this.head;
        if (current.data === data) {
            console.log("removed, ", current.data);
            this.head = current.next;
            this.size--;
        } else {
            let previus = current;
            while (current.next) {
                if (current.data === data) {
                    previus.next = current.next;
                    this.size--;
                    return;
                }
                previus = current;
                current = current.next;
            }
            if (current.data === data) {
                previus.next = null;
                this.size--;
            }
        }
    }
    // /* 
    // easy veersion to remove 
    delete(data) {
        let current = this.head;
        let previus = null;
        while (current !== null) {
            if (current.data === data) {
                if (!previus) {
                    this.head = current.next;
                } else {
                    previus.next = current.next;
                }
                this.size--;
            }
            previus = current;
            current = current.next;
        }
    }
    // */
    serach(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
    reverse_linklist() {
        let current = this.head;
        let previus = null;
        let next = null;
        while (current) {
            next = current.next;
            current.next = previus;
            previus = current;
            current = next;
        }
        this.head = previus;
    }
    reverse_linklist_recursion() {
        this.reverse_linklist_recursion_util(this.head, null);
    }
    reverse_linklist_recursion_util(current, previus) {
        if (current.next === null) {
            this.head = current;
            current.next = previus;
            return;
        }
        let next = current.next;
        current.next = previus;
        this.reverse_linklist_recursion_util(next, current);
    }
    reverse_linklist_recursion2() {
        this.reverse_linklist_recursion_util2(this.head);
    }
    reverse_linklist_recursion_util2(current) {
        if (current.next === null) {
            this.head = current;
            return current;
        }
        let previus = this.reverse_linklist_recursion_util2(current.next);
        previus.next = current;
        current.next = null;
        return current;
    }
    delete_duplication() {
        let current = this.head;
        let previus = null;
        let hash = {};
        while (current) {
            if (hash[current.data]) {
                previus.next = current.next;
            } else {
                hash[current.data] = true;
                previus = current;
            }
            current = current.next;
        }
    }
}

let linkList = new SingleLinklist();
linkList.add(1);
linkList.add(2);
linkList.add(3);
linkList.add(4);
linkList.add(5);
linkList.add(6);
linkList.add(7);
linkList.add(7);
linkList.add(7);

// linkList.print();
// linkList.delete(1);
// linkList.remove(7);
linkList.print();
console.log(linkList.serach(1));

linkList.reverse_linklist_recursion();
linkList.print();
// 
console.log("remove duplication");
linkList.delete_duplication();
linkList.print();

//  reverse LinkList

function reverse_linklist(link) {
    let node = link.head;
    let prev = null;
    while (node) {
        let next = node.next;
        node.next = prev;
        prev = node;
        if (!next) break;
        node = next;
    }
    return node;
}


// delete duplication
function delete_duplication(list) {
    var track = {};
    let current = list.head;
    let prev = null;
    while (current) {
        if (track[current.data]) {
            prev.next = current.next;
        } else {
            track[current.data] = true;
            prev = current;
        }
        current = current.next;
    }
    return list;
}
