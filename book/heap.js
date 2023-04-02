// tree data structure  can get lowest and highest item  in o(1) time
// in minheap  parent is smaller than childern root have smallest value 
// in maxheap  parent is bigger than childern root have highest value


// Bubble Up and Bubble Down is main differience in min max sor sorting in aray structure  array implementatio is good

// keep tracjk of medium in stream o f number 

// find smallest and largest items in heap 


class Heap {
    constructor() {
        this.heap = [];
    }
    // add item to heap
    add(item) {
        this.heap.push(item);
        this.bubbleUp();
    }
    // remove item from heap
    remove() {
        const item = this.heap.shift();
        this.heap.unshift(this.heap.pop());
        this.bubbleDown();
        return item;
    }
    // bubble up
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] < this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }
    // bubble down
    bubbleDown() {
        let index = 0;
        while (index < this.heap.length) {
            let leftChildIndex = index * 2 + 1;
            let rightChildIndex = index * 2 + 2;
            let leftChild = this.heap[leftChildIndex];
            let rightChild = this.heap[rightChildIndex];
            let swap = null;
            if (leftChild < this.heap[index]) {
                swap = leftChildIndex;
            }
            if (rightChild < this.heap[index] && rightChild < leftChild) {
                swap = rightChildIndex;
            }
            if (swap === null) break;
            [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
            index = swap;
        }
    }
    // get min item
    getMin() {
        return this.heap[0];
    }
    // get max item
    getMax() {
        return this.heap[this.heap.length - 1];
    }
    // get size
    size() {
        return this.heap.length;
    }
    // get heap
    getHeap() {
        return this.heap;
    }

}

let heap = new Heap();
heap.add(10);
heap.add(5);
heap.add(15);
heap.add(20);
heap.add(30);
heap.add(25);
heap.add(35);
heap.add(40);
heap.add(45);
heap.add(50);

console.log(heap.getHeap());
console.log(heap.getMax());
console.log(heap.getMin());
