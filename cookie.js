
class Cookies {
    constructor() {
        this.path = '/';
        this.domain = null;
        this.secure = false;
        this.lifetime = null;
        this.expires = null;
        this.time = new Date();
        this.defaults = { expires: this.expires, path: this.path, domain: this.domain, secure: this.secure, lifetime: this.lifetime, time: this.time };
        this.queue = [];
    }

    set(options) {
        if (typeof options === 'object') {
            this.defaults = Object.assign(this.defaults, options);
        }
    }
    showValue() {
        console.log(this.defaults, '\n Value of Cookie ')
        console.log(this.queue, '\n visit of User')
    }
    addVisit(visit) {
        if (typeof visit !== 'object' || !visit) return;
        this.queue.push(visit)
    }
}
const generateId = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

function main() {
    const cookie = new Cookies();

    const value = {
        path: '/',
        domain: 'localhost',
        secure: true,
        lifetime: 1000,
        time: new Date(),
        expires: new Date() + 1000,
    };
    cookie.set(value);
    // add visit
    const visit = {
        name: generateId(),
        domain: 'localhost',
        page: 'home',
        time: new Date(),
    };
    cookie.addVisit(visit);
    let visit2 = {
        name: generateId(),
        domain: 'localhost',
        page: 'home',
        time: new Date(),
    };
    cookie.addVisit(visit2);

    console.log(
        'cookie.defaults',
        cookie.defaults,
        '\n',
        'cookie.queue',
        cookie.queue,
    )
}
// main()



function showTree(tree) {
    let stack = [];
    while (tree.length) {
        let node = tree.shift();
        if (node.left) {
            stack.push(node.left)
        }
        if (node.right) {
            stack.push(node.right)
        }
        console.log(node.data)
    }
    return stack;
}

let tree = [
    { data: 1, left: 2, right: 3 },
    { data: 2, left: 4, right: 5 },
    { data: 3, left: 6, right: 7 },
    { data: 4, left: 8, right: 9 },
]

// showTree(tree)
