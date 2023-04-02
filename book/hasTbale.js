// he hash function converts  a specified key into an index for an array that stores all of the data 

// 
class HashTable {
    constructor() {
        this.table = new Array(137);
    }
    // hash function
    simpleHash(data) {
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    }
    add(key, value) {
        let pos = this.simpleHash(key);
        this.table[pos] = value;
    }
    showDistro() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] !== undefined) {
                console.log(i + ": " + this.table[i]);
            }
        }
    }
    get(key) {
        return this.table[this.simpleHash(key)];
    }
}

let hash = new HashTable();
hash.add("David", " 123");
hash.add("Jennifer", " 345");
hash.add("Donnie", " 456");
hash.add("Raymond", " 456");
hash.add("Cynthia", " 456");
hash.add("Mike", " 456");
hash.add("Clayton", " 456");
hash.add("Danny", " 456");
hash.add("Jonathan", " 456");
hash.add("Terrill", " 456");
hash.add("Raymond", " 456");

// console.log(hash);

// By Object 
class HashTable2 {
    constructor() {
        this.table = {};
    }
    _hash(key) {
        return key.toString().length % 37;
    }
    add(key, value) {
        if (!this.table[key]) {
            this.table[key] = value;
        }
    }
    get(key) {
        if (this.table[key]) {
            return this.table[key];
        }
    }
}

let hash2 = new HashTable2();
hash2.add("56", "xbbwo21");
hash2.add("57", "xbbwo22");
hash2.add("58", "xbbwo23");
hash2.add("59", "xbbwo24");
hash2.add("60", "xbbwo25");
hash2.add("61", "xbbwo26");
hash2.add("62", "xbbwo27");

console.log(hash2.get("60"));