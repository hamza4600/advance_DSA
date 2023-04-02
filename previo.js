//   start again\

class Node {
    constructor(data) {
        this.data = data,
            this.next = null
    }
}

class LinkList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.length++
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
            this.length++;
        }
    }
    search(data) {
        let current = this.head;
        while (current !== null) {
            if (current.data === data) {
                console.log("Found Data ", data)
                break;
            }
            current = current.next;
        }
        return false
    }
    show_Nodes() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data)
            current = current.next;
        }
    }
    remove(data) {
        if (!data) return;
        let current = this.head;
        if (data === this.head.value) {
            return this.head = this.head.next
        }
        let previus = null;
        while (current !== null) {
            if (data === current.data) {
                console.log("Data is remoed")
                previus.next = current.next
                this.length--;
            }
            previus = current
            current = current.next;
        }
        return false
    }
    insertPostion(pos, data) {
        if (pos > 0 || pos < this.length) return;
        let current = this.head;
        let newNode = new Node(data);
        if (pos === 0) {
            newNode.next = current;
            this.head = newNode;
        } else {
            let i = 0;
            let previus = null
            while (i < pos) {
                previus = current;
                current = current.next;
                i++;
            }
            newNode.next = current;
            previus.next = newNode;
            this.length++;
        }
    }


}


// const linklist = new LinkList();
// linklist.append("Hamza")
// linklist.append("Hamza1")
// linklist.append("Hamza2")
// linklist.append("Hamza3")

// // linklist.show_Nodes()

// // linklist.search("Hamza")
// linklist.insertPostion(8, "Hamza7484")
// linklist.show_Nodes()


class Stack {
    constructor() {
        this.array = [];
    }
    push(data) {
        this.array.append(data)
    }
    pop() {
        if (this.array.length > 0) {
            return this.array.pop()
        }
    }
    peek() {
        if (this.array.length > 0) {
            return this.array[this.array.length - 1]
        }
    }
}

class Queue {
    constructor() {
        this.que = [];
    }
    enque(data) {
        this.que.push(data)
    }
    dequeu() {
        if (this.que.length > 0) {
            this.que.shift();
        }
    }
    peek() {
        return this.que[this.que.length - 1]
    }
}


class HashTabel {
    constructor() {
        this.map = {}
    }
    _hash(key) {
        return key.toString().length % this.map.length
    }
    add(key, value) {
        let position = this._hash(key);
        if (!this.map.hasOwnProperty(position)) {
            this.map[position] = {}
        }
        this.map[position][key] = value
    }
    search(key) {
        let position = this._hash(key);
        if (
            this.map.hasOwnProperty(position) &&
            this.map[position].hasOwnProperty(key)
        ) {
            return this.map[position][key]
        }
        return null
    }
}
// const table = new HashTabel();

// table.add("firstName", "John");
// table.add("1", "John ne hjdcbduc edfvuj");
// table.add("lastName", "Doe");
// table.add("age", 25);
// table.add("job", "developer");
// table.add("city", "London");
// table.add("country", "England");

// console.log(table.search("age"))
// console.log(table)

//  double Lnk List 
class dNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.pre = null
    }
}

class DoubleLinkList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    append(data) {
        const newNode = new dNode(data);
        if (this.head === null) {
            this.head = newNode
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
            newNode.pre = current;
        }
        this.length++;
    }
    search(data) {
        let current = this.head;
        while (current.next) {
            if (data === current.data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
    delete_node(data) {
        let current = this.head;
        let previus;
        if (this.head.data === data) {
            return this.head = current.next;

        }
        while (current !== null) {
            if (current.data === data) {
                previus.next = current.next;
                break;
            }
            previus = current;
            current = current.next
        }
    }
    show_nodes() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data, "data")
            current = current.next;
        }
    }
    insertPostion(index, data) {

        let newNode = new dNode(data);
        let current = this.head;
        if (index === 0) {
            newNode.next = current;
            current.pre = newNode
            this.head = newNode;
        } else {
            let previus;
            let i = 0;
            while (i++ < index) {
                previus = current;
                current = current.next;
            }
            newNode.next = current;
            newNode.pre = previus
            current.pre = newNode;
            previus.next = newNode;
        }
    }
}

// const dlints = new DoubleLinkList();
// dlints.append("pxsjns");
// dlints.append("pxsjns1");
// dlints.append("pxsjns2");
// dlints.append("pxsjns3");
// dlints.append("pxsjns4");
// dlints.append("pxsjns5");
// // dlints.show_nodes()
// dlints.insertPostion(4 , "HmzA")
// // dlints.delete_node("pxsjns")
// dlints.show_nodes()


class CircularLinkList {  // head is connected to tail 
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.next = this.head;
            this.tail = newNode;
        }
        this.length++;
    }
    pop() {   // remove last Item,
        if (!this.head) return null;
        let current = this.head;
        let newTail = current;
        while (current.next !== this.head) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = this.head;
        this.length--;
    }
    show_nodes() {
        let current = this.head;
        while (current) {
            console.log(current.data, "===")
            current = current.next;
            if (current === this.head) break;
        }
    }
    search(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) {
                return true
            }
            current = current.next;
            if (current === this.head) {
                return false;
            }
        }
    }
    remove(data) {
        if (!this.head) return null;
        let current = this.head;
        let previus;
        if (this.head.data === data) {
            return this.head = current.next;
        }
        while (current) {
            if (current.data === data) {
                console.log("Remove")
                previus.next = current.next
            }
            previus = current;
            current = current.next;
            if (current === this.head) break;
        }
        return false;
    }
}

// const clist = new CircularLinkList();
// clist.append("hzmadcbh")
// clist.append("hzmadcbh1")
// clist.append("hzmadcbh2")
// clist.append("hzmadcbh3")
// clist.append("hzmadcbh4")
// clist.append("hzmadcbh5")
// clist.append("hzmadcbh10")
// clist.remove("hzmadcbh")
// clist.show_nodes()


// Queue and Its Types 
//  priorpty Queue 
// Link List and Array 

class PriorityQueue_array {
    constructor() {
        this.array = [];
    }
    enqueue(data, pri) {
        this.array.push({ data, pri })
        this.sort();
    }
    dequeue() {
        if (this.array.length > 0) {
            return this.array.shift();
        }
    }
    sort() {
        this.array.sort((a, b) => a.pri - b.pri)
    }
}

const pA = new PriorityQueue_array();
pA.enqueue("Hzma", 100);
pA.enqueue("Hzm11a", 10);
pA.enqueue("Hzmxsxxa", 20);
pA.enqueue("Hzxsma", 50);
pA.enqueue("zaHzma", 88);
pA.enqueue("zaH67zma", 0);
console.log(pA.array)

// Linklist 
class pNode {
    constructor(data, pri) {
        this.data = data;
        this.pri = pri;
        this.next = null;
    }
}
class PriorityQueue_lisklist {
    constructor() {
        this.head = null;
    }
    enqueue(data, pri) {
        let newNode = new pNode(data, pri);
        if (this.head === null || pri < this.head.pri) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next && pri > current.next.pri) {
                current = current.next;
            };
            newNode.next = current.next;
            current.next = newNode;
        }
        return this;
    }
    dequeue() {
        let temp = this.head;
        this.head = this.head.next;
        return temp
    }
    show() {
        let current = this.head;
        while (current) {
            console.log(current.pri, current.data)
            current = current.next;
        }
    }
}

// const pL = new PriorityQueue_lisklist();
// pL.enqueue("bcecvu3", 599)
// pL.enqueue("bcecvcdu3", 1)
// pL.enqueue("bcecvdc23eu3", 14)
// pL.enqueue("bcecvxsasxu3", 4)
// pL.enqueue("bcec34vu3", 400)
// pL.enqueue("bcec342xvu3", 40)
// pL.show()

//  double ended queue 
class DoubelEndQue_array {
    constructor() {
        this.array = []
    }
    addFront(data) {
        this.array.unshift(data)
    }
    addBack(data) {
        this.array.push(data)
    }
    removeFront() {
        if (this.array.length > 0) {
            this.array.shift();
        }
    }
    removeBack() {
        if (this.array.length > 0) {
            this.array.pop();
        }
    }
}
// By Link list circulat link list
class DoubelEndQue_linklist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length++;
    }
    append(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.next = this.head;
            this.tail = newNode;
        }
        this.length++;
    }
    removeFront() {
        let current = this.head;
        let newTail = current;
        while (current.next !== this.head) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = this.head;
        this.length--;
    }
    show() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
            if (current === this.head) break;
        }
    }
}

// const g3x = new DoubelEndQue_linklist();
// g3x.append("1Hzmaxn")
// g3x.append("2Hzma4xn")
// g3x.append("3Hzma4x45n")
// g3x.append("4Hzma15xn")
// g3x.append("5Hzm89axn")
// g3x.show()
// console.log("====")
// g3x.removeFront()
// g3x.removeFront()
// g3x.show()
