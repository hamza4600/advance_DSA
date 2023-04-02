// Caching 
// store the data in temeprary memory so it can be easily retrieved later use it requierd again . exmaple is data base we don,t want to query the data base every time we need the data we can store the data in cache and use it later

// LRU (least recently used) cache
// used by Os to manage memory . number of time a is refered and keep track and is limited . when cache is exceed it search the block that is lowest counter and remove it from cache .


class LFUNode {
    constructor(key, value) {
        this.prev = null;
        this.next = null;
        this.key = key;
        this.data = value;
        this.freqCount = 1;
    }
}

// have two hash map one for key and  freq.freq has access to top frequient for element access

class LFUDoublyLinkedList {
    constructor() {
        this.head = new LFUNode("head_buffer", null);
        this.tail = new LFUNode("tail_buffer", null);
        this.size = 0;
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    insertAtHead(node) {
        node.next = this.head.next;
        this.head.next.prev = node;
        this.head.next = node;
        node.prev = this.head;
        this.size++;
    }
    removeNode(node) {
        node.prev.next = node.next
        node.next.prev = node.prev
        this.size--;
    }
    removeAtTail() {
        var oldTail = this.tail.prev;
        var prev = this.tail.prev;
        prev.prev.next = this.tail;
        this.tail.prev = prev.prev;
        this.size--;
        return oldTail;
    }
}

//  have two mian concepts  
// insert new node and remove  the old node
// if capicity is exceed remove the least frequient node
class LFU_Cache {
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.minFreq = 0;
        this.keys = new Map();  // store LFU_Node
        this.freq = new Map(); // store LFU_DoubleLinklist
    }
    set(key, value) {
        var node = this.keys[key];

        if (node == undefined) {
            node = new LFUNode(key, value);

            this.keys[key] = node;

            if (this.size != this.capacity) {
                // insert without deleting
                if (this.freq[1] === undefined) {
                    this.freq[1] = new LFUDoublyLinkedList();
                }
                this.freq[1].insertAtHead(node);
                this.size++;
            } else {
                // delete and insert
                var oldTail = this.freq[this.minFreq].removeAtTail();
                delete this.keys[oldTail.key];

                if (this.freq[1] === undefined) {
                    this.freq[1] = new LFUDoublyLinkedList();
                }

                this.freq[1].insertAtHead(node);
            }
            this.minFreq = 1;
        } else {
            var oldFreqCount = node.freqCount;
            node.data = value;
            node.freqCount++;

            this.freq[oldFreqCount].removeNode(node);

            if (this.freq[node.freqCount] === undefined) {
                this.freq[node.freqCount] = new LFUDoublyLinkedList();
            }

            this.freq[node.freqCount].insertAtHead(node);

            if (oldFreqCount == this.minFreq && Object.keys(this.
                freq[oldFreqCount]).size == 0) {
                this.minFreq++;
            }
        }
    }

    get(key) {
        var node = this.keys[key];

        if (node == undefined) {
            return null;
        } else {

            var oldFreqCount = node.freqCount;
            node.freqCount++;

            this.freq[oldFreqCount].removeNode(node);

            if (this.freq[node.freqCount] === undefined) {
                this.freq[node.freqCount] = new LFUDoublyLinkedList();
            }

            this.freq[node.freqCount].insertAtHead(node);

            if (oldFreqCount == this.minFreq && Object.keys(this.
                freq[oldFreqCount]).length == 0) {
                this.minFreq++;
            }
            return node.data;
        }
    }
}



const cache = new LFU_Cache(2);
cache.set(1, 1);
cache.set(2, 2);
cache.set(3, 3);
console.log(cache.get(2));
console.log(cache)


