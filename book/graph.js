/*

BFS ::: Traverses the graph by visiting neighbor nodes one level
DFS ::: Traverses the graph by going deep into each neighbor
Dijkstra ::: Finds the shortest path from one vertex to the rest of the
Topological Sort ::: Sorts the directed graph; for job scheduling algorithms

TYPES OF GRAPHS

Dense ::: There are a lot of connections between different vertices.
Sparse ::: Only a small fraction of possible connections exist between vertices.
Cyclical ::: There is a path that takes vertices back to themselves.
Uncyclical ::: There is a no path such that vertices can be taken back to themselves.
DirectedGraphs ::: have a direction between edges.
UndirectedGraphs ::: do not have a direction between edges.

*/

// it is basically way of representing connections between object
//  graph applicatios
// website 
// Map 
// Social Media
// circuit 
// Telephone 


// Vertices 
//  vertices is nodee from which graph is formed 

// Edges 
// connections between node in a graph it is a line between vertices 

// Degre of Vertices 
// degree of vertices  refer to a number of edges on that vertices

// Undirected Graphs 
// that don,t have direction between edges . imples mutal connection between the nodes wothout direction 
//  common ways of impementaion are adjacentry matrix and adjaecntry list 

class UndirectedGraph {
    constructor() {
        this.edges = {}
    }
    addVertices(vertex) {
        this.edges[vertex] = {};
    }
    addEdges(vertix1, vertex2, weight) {
        if (weight === undefined) {
            weight = 0;
        }
        this.edges[vertix1][vertex2] = weight;
        this.edges[vertex2][vertix1] = weight;
    }
    removeEdges(vertix1, vertix2) {
        if (this.edges[vertix1] && this.edges[vertix1][vertix2] != undefined) {
            delete this.edges[vertix1][vertix2];
        }
        if (this.edges[vertix2] && this.edges[vertix2][vertix1] != undefined) {
            delete this.edges[vertix2][vertix1];
        }
    }
    removeVertix(vertix) {
        // for(let )
        if (this.edges[vertix]) {
            // all inner edges removed 
            for (let innVertix in this.edges[vertix]) {
                this.removeEdges(innVertix, vertix)
            }
            delete this.edges[vertix]
        }
    }
}


const undirected = new UndirectedGraph();
undirected.addVertices(1);
undirected.addVertices(2);
undirected.addVertices(3);
undirected.addVertices(4);
undirected.addVertices(5);

undirected.addEdges(1, 2, 10)
undirected.addEdges(2, 3, 8);
undirected.addEdges(3, 4, 10);
undirected.addEdges(4, 5, 100);
undirected.addEdges(1, 5, 85);

console.log(undirected.edges)
undirected.removeVertix(5);
console.log(undirected.edges)


// Directed Graph
// that do not have direction between vertices  . each node goes from one vertix to another 

class DirectedGraph {
    constructor() {
        this.edges = {};
    }
    addVertix(vertex) {
        this.edges[vertex] = {};
    }
    addEdges(originVertex, destVertex, weight) {
        if (weight == undefined) {
            weight = 0;
        }
        this.edges[originVertex][destVertex] = weight;
    }
}
// remove is same as undirected graph ;
//  apply remove edges and remove vertix of undirected graph to directed graph
DirectedGraph.prototype.removeEdges = UndirectedGraph.prototype.removeEdges;
DirectedGraph.prototype.removeVertix = UndirectedGraph.prototype.removeVertix;

const directed = new DirectedGraph();
directed.addVertix("A")
directed.addVertix("B")
directed.addVertix("C")
directed.addVertix("D")
directed.addEdges("A", "B", "Hamza")
directed.addEdges("B", "C", "Hamz6454a")
directed.addEdges("C", "A", "Ham44564za")
directed.addEdges("D", "B", "H*3d432am44564za")


console.log(directed.edges)


// Breath First Search
// serach algo that is used to search a graph level by level  . it is used to find the shortest path between two nodes
DirectedGraph.prototype.breathFirstSearch = function (startVertix, fn) {
    let queue = [];
    let visited = {};

    queue.push(startVertix);
    while (queue.length) {
        let vertix = queue.shift();
        if (!visited[vertix]) {
            visited[vertix] = true;
            fn(vertix);
            for (let neighbour in this.edges[vertix]) {
                queue.push(neighbour);
            }
        }
    }
}

directed.breathFirstSearch("A", (vertix) => {
    console.log(vertix)
});

// Depth First Search 
// search algo that is used to search a graph depth by depth . it is used to find the shortest path between two nodes
DirectedGraph.prototype.depthFirstSearch = function (startVertix, fn) {
    let visited = {};
    let stack = [];
    stack.push(startVertix);
    while (stack.length) {
        let vertix = stack.pop();
        if (!visited[vertix]) {
            visited[vertix] = true;
            fn(vertix);
            for (let neighbour in this.edges[vertix]) {
                stack.push(neighbour);
            }
        }
    }
}
// Recusriver Depth First Search
DirectedGraph.prototype.recursiveDepthFirstSearch = function (vertex, fn) {
    let visited = {};
    this.recDFS(vertex, visited, fn);
}
DirectedGraph.prototype.recDFS = function (vertex, visited, fn) {
    visited[vertex] = true;
    fn(vertex);
    for (let neighbour in this.edges[vertex]) {
        if (!visited[neighbour]) {
            this.recDFS(neighbour, visited, fn)
        }
    }
}
// it goes deep down the graph and then backtracks to the next node
directed.recursiveDepthFirstSearch("A", (vertix) => {
    console.log(vertix)
})

// directed.depthFirstSearch("A", (vertix) => {
//     console.log(vertix)
// }
// )


// Dijkstra's Algorithm 
// is an algorithm for finding the shortest paths between nodes in a graph, which may represent, for example, road networks.  it is used to find the shortest path between two nodes

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(priority, val) {
        this.values.push({ priority, val });
        this.sort();
    }
    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

function _isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
function _extraMin(Q, dist) {  // Q is the set of unvisited nodes and dist is the distance from the source
    let min = Infinity;
    let minNode = null;
    for (let node in Q) {
        if (dist[node] < min) {
            min = dist[node];
            minNode = node;
        }
    }
    return minNode;
}
DirectedGraph.prototype.Dijkstra = function (source) {
    let Q = {}; // set of unvisited nodes
    let dist = {}; // distance from source
    for (let vertex in this.edges) {
        dist[vertex] = Infinity; // unknown
        Q[vertex] = this.edges[vertex]; // add v toQ
    }
    dist[source] = 0;
    while (!_isEmpty(Q)) {
        let u = _extraMin(Q, dist) // get min distance
        delete Q[u]  // remove
        for (let neigbur in this.edges[u]) {
            // current distance 
            let alt = dist[u] + this.edges[u][neigbur];
            // short path found
            if (alt < dist[neigbur]) {
                dist[neigbur] = alt;
            }
        }
    }
    return dist;
}

//  Topoligical Sort 
DirectedGraph.prototype.topoSort = function (v, visited, stack) {
    visited.add(v);
    for (let item in this.edges[v]) {
        if (visited.has(item) == false) {
            this.topoSort(item, visited, stack)
        }
    }
    stack.unshift(v);
}
DirectedGraph.prototype.topologicalSort = function () {
    let visited = {};
    let stack = [];

    for (let item in this.edges) {
        if (visited.has(item) == false) {
            this.topoSort(item, visited, stack)
        }
    }
    return stack;
}


let digraph1 = new DirectedGraph();
digraph1.addVertix("A")
digraph1.addVertix("B");
digraph1.addVertix("C");
digraph1.addVertix("D");
digraph1.addEdges("A", "B", 1);
digraph1.addEdges("B", "C", 1);
digraph1.addEdges("C", "A", 1);
digraph1.addEdges("A", "D", 1);
console.log(digraph1, "====");
// edges: { A: { B: 1, D: 1 }, B: { C: 1 }, C: { A: 1 }, D: {} }}
let a = digraph1.Dijkstra("A")
console.log(a)

let bb = digraph1.topologicalSort();
console.log(bb)
// A* Algorithm
// is a computer algorithm that is widely used in pathfinding and graph traversal, which is the process of finding a path between multiple points, called "nodes". It enjoys widespread use due to its performance and accuracy. It is often used in many fields of computer science due to its completeness, optimality, and optimal efficiency.  it is used to find the shortest path between two nodes



class WeightGraph {
    constructor() {
        this.list = {};
    }
    addVertex(vertex) {
        if (!this.list[vertex]) {
            this.list[vertex] = [];
        }
    }
    addEdges(vertex1, vertex2, weight) {
        this.list[vertex1].push({ node: vertex2, weight })
        this.list[vertex2].push({ node: vertex1, weight })
    }

}

const weight = new WeightGraph();
weight.addVertex("A")
weight.addVertex("B")
weight.addVertex("C")

weight.addEdges("A", "B", 456)
weight.addEdges("B", "C", 4152356)
weight.addEdges("C", "A", 451561606)

console.log(weight.list)