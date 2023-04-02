//  implmet the stack data structure and Queue data structure

class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.items.length > 0) {
            return this.items.pop();
        }
    }
    peek() {
        return this.items[this.items.length - 1];
    }
}

class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        if (this.items.length > 0) {
            return this.items.shift();
        }
    }
    peek() {
        return this.items[0];
    }
}

// Stack using Two Queues

class Stack2 {
    constructor() {
        this.queue1 = new Queue();
        this.queue2 = new Queue();
    }
    push(element) {
        this.queue1.enqueue(element);
    }
    pop() {
        if (this.queue1.items.length > 0) {
            while (this.queue1.items.length > 1) {
                this.queue2.enqueue(this.queue1.dequeue());
            }
            return this.queue1.dequeue();
        }
    }
    peek() {
        return this.queue1.items[this.queue1.items.length - 1];
    }
}
/*
    from scratch
    class Stack {
        constructor() {
            this.queue1 = [];
            this.queue2 = [];
        }
        enqueue(element) {
            this.queue1.push(element);
        }
        dequeue() {
            if (this.queue1.length > 0) {
                while (this.queue1.length > 1) {
                    this.queue2.push(this.queue1.shift());
                }
                return this.queue1.shift();
            }
        }
    }

*/
// Queue using Two Stacks

class Queue2 {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }
    enqueue(element) {
        this.stack1.push(element);
    }
    dequeue() {
        if (this.stack1.items.length > 0) {
            while (this.stack1.items.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
            return this.stack2.pop();
        }
    }
    peek() {
        return this.stack1.items[0];
    }
}
/*
class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    enqueue(element) {
        this.stack1.push(element);
    }
    dequeue() {
        if (this.stack1.length > 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
            return this.stack2.pop();
        }
    }
}
*/


// 1. Implement a stack using a linked list

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack3 {
    constructor() {
        this.top = null;
    }
    push(data) {
        let node = new Node(data);
        if (this.top === null) {
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
    }
    pop() {
        if (this.top !== null) {
            let data = this.top.data;
            this.top = this.top.next;
            return data;
        }
    }
    peek() {
        if (this.top !== null) {
            return this.top.data;
        }
    }
}

// 2. Implement a queue using a linked list

class Queue3 {
    constructor() {
        this.front = null;
        this.rear = null;
    }
    enqueue(data) {
        let node = new Node(data);
        if (this.front === null) {
            this.front = node;
            this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
    }
    dequeue() {
        if (this.front !== null) {
            let data = this.front.data;
            this.front = this.front.next;
            return data;
        }
    }
    peek() {
        if (this.front !== null) {
            return this.front.data;
        }
    }
}


// Resutant customer system

class Customer {
    constructor(name, order) {
        this.name = name;
        this.order = order;
    }
}

class Restaurant {
    constructor() {
        this.queue = new Queue();
    }
    addCustomer(customer) {
        this.queue.enqueue(customer);
    }
    serveCustomer() {
        return this.queue.dequeue();
    }
}

const restaurant = new Restaurant();
restaurant.addCustomer(new Customer('John', 'Burger'));
restaurant.addCustomer(new Customer('Jane', 'Pizza'));
restaurant.addCustomer(new Customer('Mary', 'Steak'));
restaurant.addCustomer(new Customer('Bob', 'Salad'));
restaurant.addCustomer(new Customer('Peter', 'Pasta'));

// console.log(restaurant.serveCustomer());

