// Graphs in deatail revision 

// graph is a data structure that contains a set of nodes and edges connecting them  || connected nodes or Object 

// Undirected graphs  
// Undirected graphs are graphs where the edges have no orinitataion.  The edge (a,b) is the same as (b,a)

// Directed graphs
// digraphs are graphs where the edges have an orientation. The edge (a,b) is not the same as (b,a) . we say that (a,b) is directed from a to b 

// Weighted graphs
// graphs where the edges have a weight associated with them. The weight can be a number, a string, or any other object.

// a tree is a special type of graph or Undirected  that has no cycles. A cycle is a path that starts and ends at the same node. 

// Diredted Asyclic Graphs (DAGs)
// DAGs are directed graphs that have no cycles.  A cycle is a path that starts and ends at the same node.
// all out tress are DAGs but not all DAGs are trees

// Complete graphs
// Complete graphs are graphs where every node is connected to every other node.

// Adjacency matrix
// An adjacency matrix is a 2D array of booleans, where the index of the row and column represents the index of a node. If the value at matrix[i][j] is true, then there is an edge between nodes i and j. If the value is false, then there is not. 

// Adjacency list
// An adjacency list is an array of linked lists or array that contains the index of the connected nodes. 
// A -> [(B, 2), (C, 4)]  2 is the weight of the edge between A and B and 4 is the weight of the edge between A and C

// Graph traversal
// Graph traversal is the process of visiting every node in a graph. There are two main ways to traverse a graph: breadth-first and depth-first.

//  Shortast Path    
// Shortest path is the path between two nodes that has the smallest number of edges.
// can use BFS , Dijsktra's algorithm, and A* algorithm , Bellman-Ford algorithm , Floyd-Warshall algorithm

// Negative Cycles 
// A negative cycle is a cycle where the total weight of the cycle is negative.
// use  Bellman-Ford algorithm and Floyd-Warshall algorithm

// Strongly connected components (SCCs)
// A strongly connected component (SCC) is a self-contained cycle in a directed graph where every node in the subset can reach every other node in the subset. we have circular dependency 
//  Tarjan's algorithm and Kosaraju's algorithm

// TSP (Travelling Salesman Problem)
// The travelling salesman problem (TSP) is the problem of finding the shortest path that visits every node in a graph exactly once and returns to the starting node.
//  use  Brute force, Dynamic programming, and Nearest neighbour algorithm , Held-Karp algorithm

/*
    BRIEF SUMMARY OF ALGORITHMS
    v = number of vertices in the graph (nodes) 
    e = number of edges in the graph (connections)
    n = number of nodes in the graph (vertices)
    v and e are directly proportional to each other in an undirected graph
    BFS - O(V + E)
    DFS - O(V + E)
    Dijkstra's - O((V + E)logV)
    A* - O((V + E)logV)
    Bellman-Ford - O(VE)
    Floyd-Warshall - O(V^3)
    Tarjan's - O(V + E)
    Kosaraju's - O(V + E)
    Brute force - O(n!)
    Dynamic programming - O(n^2 * 2^n)
    Nearest neighbour - O(n^2)
    Held-Karp - O(n^2 * 2^n)

    BRIDGES
    A bridge is an edge that, if removed, increases the number of connected components in the graph. AS A WEEK POINT IN THE GRAPH

    ARTICULATION POINTS
    An articulation point is a node that, if removed, increases the number of connected components in the graph. AS A WEEK POINT IN THE GRAPH

    MINIMUM SPANNING TREE
    A minimum spanning tree (MST) is a subset of the edges of a connected, edge-weighted undirected graph that connects all the nodes together, without any cycles and with the minimum possible total edge weight.
    used in  Kruskal's algorithm and Prim's algorithm
    applications  network design, clustering algorithms, and approximation algorithms for TSP

    NETWORK FLOW : MAXIMUM FLOW
    Maximum flow is the maximum amount of flow that can go through a network from a source node to a sink node.
    used in  Ford-Fulkerson algorithm and Edmonds-Karp algorithm , Dinic's algorithm , Push-relabel algorithm , and Relabel-to-front algorithm
    EXAMPLES::
    1.  The maximum amount of water that can flow through a pipe network.
    2.  The maximum amount of data that can be sent through a network.
    3.  The maximum amount of people that can be seated in a room.

    BFS
    BFS is a graph traversal algorithm that starts at a root node and explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level. 
    BFS is used to find the shortest path between two nodes in an unweighted graph.
    move in a level by level order Queue is used to store the nodes that are waiting to be visited

    DFS
    DFS is a graph traversal algorithm that starts at a root node and explores as far as possible along each branch before backtracking.
    DFS is used to find the shortest path between two nodes in a weighted graph.
    move in a depth by depth order Stack is used to store the nodes that are waiting to be visited

    Graph Theory on Grids
    Grids are a special type of graph where the nodes are arranged in a grid-like structure. matrix and adjacency list are used to represent the graph

*/
// Dungen Game
function generteDungeon(n) {
    let dungeon = [];
    for (let i = 0; i < n; i++) {
        dungeon.push([]);
        for (let j = 0; j < n; j++) {
            dungeon[i].push(0);
        }
        // random number of walls
        let numWalls = Math.floor(Math.random() * n);
        for (let j = 0; j < numWalls; j++) {
            let wallCol = Math.floor(Math.random() * n);
            dungeon[i][wallCol] = 1;
        }
    }
    let startRow = Math.floor(Math.random() * n);
    let startCol = Math.floor(Math.random() * n);
    dungeon[startRow][startCol] = "S";

    return dungeon;
}

function printDungeon(dungeon) {
    for (let i = 0; i < dungeon.length; i++) {
        console.log(dungeon[i].join(" "));
    }
}

let dungeon = generteDungeon(10);
printDungeon(dungeon);

// Path to S
function findPathToS(dungeon) {
    let startRow = 0;
    let startCol = 0;
    for (let i = 0; i < dungeon.length; i++) {
        for (let j = 0; j < dungeon.length; j++) {
            if (dungeon[i][j] === "S") {
                startRow = i;
                startCol = j;
                console.log("Coordinates of S: Row and Colum " + startRow + ", " + startCol);
                break;
            }
        }
    }
    let path = [];
    let currentRow = startRow;
    let currentCol = startCol;
    while (currentRow !== 0 || currentCol !== 0) {
        path.push([currentRow, currentCol]);
        if (currentRow === 0) {
            currentCol--;
        } else if (currentCol === 0) {
            currentRow--;
        } else {
            let up = dungeon[currentRow - 1][currentCol];
            let left = dungeon[currentRow][currentCol - 1];
            if (up < left) {
                currentRow--;
            } else {
                currentCol--;
            }
        }
    }
    path.push([0, 0]);
    return path;
}

let path = findPathToS(dungeon);
console.log(path);

// a program can not be build until its dependencies are built first . 
// topological sort is used to find the order in which the dependencies should be built 
// is an ordering of nodes in a directed graph such that each directed edge uv from node u to node v, u comes before v in the ordering.
// in simple we line up the nodes in a way that all the dependencies of a node are built before the node itself is built
// how edges are poninting in the graph is important
// only directed acyclic graph can be topologically sorted

function topologicalSort(graph) {
    let sorted = [];
    let visited = {};
    for (let node in graph) {
        if (node in visited) continue;
        _topologicalSort(node, visited, sorted, graph);
    }
    return sorted;
}

function _topologicalSort(node, visited, sorted, graph) {
    visited[node] = true;
    let neighbors = graph[node];
    for (let neighbor of neighbors) {
        if (neighbor in visited) continue;
        _topologicalSort(neighbor, visited, sorted, graph);
    }
    sorted.unshift(node);
}

let graph = {
    a: ["b", "c"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: ["f"],
    f: []
};

console.log(topologicalSort(graph));

// Dijkstra's Algorithm
// Dijkstra's algorithm is a greedy algorithm that makes the optimal choice at each step as it attempts to find the shortest path.  
// Dijkstra's algorithm is used to find the shortest path between two nodes in a weighted graph.
// O(E log V) time complexity 
// can only be used on a graph with non-negative edge weights

class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

function dijkstra(graph, start, end) {
    let distances = {};
    let previous = {};
    let nodes = new PriorityQueue();
    for (let vertex in graph) {
        if (vertex === start) {
            distances[vertex] = 0;
            nodes.enqueue(vertex, 0);
        } else {
            distances[vertex] = Infinity;
            nodes.enqueue(vertex, Infinity);
        }
        previous[vertex] = null;
    }
    let smallest;
    let path = [];
    while (nodes.values.length) {
        smallest = nodes.dequeue().val;
        if (smallest === end) {
            while (previous[smallest]) {
                path.push(smallest);
                smallest = previous[smallest];
            }
            break;
        }
        if (smallest || distances[smallest] !== Infinity) {
            for (let neighbor in graph[smallest]) {
                let nextNode = neighbor;
                let candidate = distances[smallest] + graph[smallest][neighbor];
                let nextNeighbor = distances[nextNode];
                if (candidate < nextNeighbor) {
                    distances[nextNode] = candidate;
                    previous[nextNode] = smallest;
                    nodes.enqueue(nextNode, candidate);
                }
            }
        }
    }
    return path.concat(smallest).reverse();
}


let graphd = {
    a: { b: 4, c: 2 },
    b: { e: 3 },
    c: { d: 2, f: 4 },
    d: { e: 3 },
    e: { f: 1 },
    f: {}
};

console.log(dijkstra(graphd, "a", "f"));

// D-ary Heap
// A d-ary heap is a heap that has d children per node. 
// A d-ary heap is a generalization of a binary heap. 
// A d-ary heap is a complete tree.
// A d-ary heap is a heap that has d children per node.

// Belleman Ford Algorithm
// The Bellman-Ford algorithm is used to find the shortest path from a starting node to all other nodes in a weighted graph. unlike dijkstra's algorithm it can handle negative weights 
// O(VE) time complexity
// Step 1: Initialize distances from the source to all vertices as infinite and distance to the source itself as 0. Create an empty set sptSet (shortest path tree set).
// Step 2: While sptSet doesn’t include all vertices
// ……a) Pick a vertex u which is not there in sptSet and has minimum distance value.
// ……b) Include u to sptSet.
// ……c) Update distance value of all adjacent vertices of u. To update the distance values, iterate through all adjacent vertices. For every adjacent vertex v, if sum of distance value of u (from source) and weight of edge u-v, is less than the distance value of v, then update the distance value of v.

function bellmanFord(graph, start, end) {
    let distances = {};
    let previous = {};
    for (let vertex in graph) {
        distances[vertex] = Infinity;
        previous[vertex] = null;
    }
    distances[start] = 0;
    for (let i = 0; i < Object.keys(graph).length - 1; i++) {
        for (let vertex in graph) {
            for (let neighbor in graph[vertex]) {
                let nextNode = neighbor;
                let candidate = distances[vertex] + graph[vertex][neighbor];
                let nextNeighbor = distances[nextNode];
                if (candidate < nextNeighbor) {
                    distances[nextNode] = candidate;
                    previous[nextNode] = vertex;
                }
            }
        }
    }
    let smallest = end;
    let path = [];
    while (previous[smallest]) {
        path.push(smallest);
        smallest = previous[smallest];
    }
    return path.concat(smallest).reverse();
}

let graphb = {
    a: { b: 4, c: 2 },
    b: { e: 3 },
    c: { d: 2, f: 4 },
    d: { e: 3 },
    e: { f: 1 },
    f: {}
};

console.log(bellmanFord(graphb, "a", "f"));

// Floyd Warshall Algorithm
// The Floyd–Warshall algorithm is an algorithm for finding shortest paths in a weighted graph with positive or negative edge weights (but with no negative cycles). A single execution of the algorithm will find the lengths (summed weights) of the shortest paths between all pairs of vertices, though it does not return details of the paths themselves.
// O(V^3) time complexity
// Step 1: Create a distance matrix dist[][] of size V x V with all entries as infinite except the diagonal entries as 0. Create a matrix path[][] of size V x V that will finally contain the shortest paths between every pair of vertices.
// Step 2: Calculate the shortest path between all pairs through intermediate vertices. The idea is to one by one pick all vertices and updates all shortest paths which include the picked vertex as an intermediate vertex in the shortest path. When we pick vertex number k as an intermediate vertex, we already have considered vertices {0, 1, 2, .. k-1} as intermediate vertices. For every pair (i, j) of the source and destination vertices respectively, there are two possible cases.
// ……a) k is not an intermediate vertex in shortest path from i to j. We keep the value of dist[i][j] as it is.
// ……b) k is an intermediate vertex in shortest path from i to j. We update the value of dist[i][j] as dist[i][k] + dist[k][j] if dist[i][j] > dist[i][k] + dist[k][j]

// build up all intermediate routes between i and J to find the shortest path
function floydWarshall(graph) {
    let distances = {};
    for (let vertex in graph) {
        distances[vertex] = {};
        for (let neighbor in graph[vertex]) {
            distances[vertex][neighbor] = graph[vertex][neighbor];
        }
    }
    for (let k in graph) {
        for (let i in graph) {
            for (let j in graph) {
                if (distances[i][k] + distances[k][j] < distances[i][j]) {
                    distances[i][j] = distances[i][k] + distances[k][j];

                }
            }
        }
    }
    return distances;
}
// matrix of shortest paths between all pairs of vertices
const florid = [
    [0, 4, 2, 4, 7, 5],
    [3, 0, 5, 7, 3, 8],
    [2, 6, 0, 2, 5, 4],
    [4, 8, 2, 0, 3, 6],
    [7, 3, 5, 3, 0, 1],
    [5, 9, 4, 6, 1, 0]
]
console.log(floydWarshall(florid), "floyd");

// BRidges in a graph
// A bridge in a graph is an edge whose removal increases the number of connected components in the graph.
// A bridge is an edge that, if removed, increases the number of connected components in the graph.

// Step 1: Initialize the discovery time and low value arrays.
// Step 2: Pick any vertex u of the graph and do following.
// ……a) If u is not visited yet, then mark it visited and recursively call DFSUtil() for its adjacent vertices.
// ……b) If u is visited and not parent of current vertex, then find if the vertex u has been discovered before or not. If u is discovered before, then update low value of current vertex as follows.
// ………..i) If the vertex u is not ancestor of current vertex, then low value of current vertex is minimum of low value of current vertex and discovery time of u.
// ………..ii) If the vertex u is an ancestor, then low value of current vertex is minimum of low value of current vertex and low value of u.
// Step 3: After the recursive calls return, check if the vertex with minimum discovery time reachable from subtree rooted with current vertex is below current vertex in DFS tree. If not, then print the pair current vertex and the vertex with minimum discovery time.

function bridges(graph) {
    let visited = {};
    let low = {};
    let bridges = [];
    let time = 0;

    for (let vertex in graph) {
        if (!visited[vertex]) {
            dfs(vertex, -1, bridges);
        }
    }

    function dfs(vertex, parent, bridges) {
        visited[vertex] = true;
        low[vertex] = time;
        time++;
        for (let neighbor in graph[vertex]) {
            if (!visited[neighbor]) {
                dfs(neighbor, vertex, bridges);
                low[vertex] = Math.min(low[vertex], low[neighbor]);
                if (low[neighbor] > low[vertex]) {
                    bridges.push([vertex, neighbor]);
                }
            } else if (neighbor != parent) {
                low[vertex] = Math.min(low[vertex], low[neighbor]);
            }
        }
    }
    return bridges;
}

let graphc = {
    a: { b: 1, c: 1 },
    b: { a: 1, c: 1, d: 1 },
    c: { a: 1, b: 1, d: 1 },
    d: { b: 1, c: 1 }
};

console.log(bridges(graphc));


// T S P
// Given a set of cities and distance between every pair of cities, the problem is to find the shortest possible route that visits every city exactly once and returns to the starting point.
// Brute Force O(n!)
// Dynamic Programming O(n^2 * 2^n)

//Dybnamic Programming
//  im small function
function tsl1(graph, s) { // s is the starting node
    let n = graph.length;
    let dp = new Array(1 << n);
    setUp(graph, dp, s, n);
    solve(graph, dp, s, n);
    let minCost = findMinCost(graph, dp, s, n);
    let tour = findOptTour(graph, dp, s, n);
    return { minCost, tour };
}
function setUp(graph, dp, s, n) {
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n);
    }
    for (let i = 0; i < dp.length; i++) {
        for (let j = 0; j < dp[i].length; j++) {
            dp[i][j] = Number.MAX_SAFE_INTEGER;
        }
    }
    dp[1][s] = 0;
}
function solve(graph, dp, s, n) {
    for (let mask = 0; mask < (1 << n); mask++) {
        for (let i = 0; i < n; i++) {
            if ((mask & (1 << i)) == 0) {
                for (let j = 0; j < n; j++) {
                    if (i != j && (mask & (1 << j)) != 0) {
                        dp[mask | (1 << i)][i] = Math.min(dp[mask | (1 << i)][i], dp[mask][j] + graph[j][i]);
                    }
                }
            }
        }
    }
}
function findMinCost(graph, dp, s, n) {
    let ans = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        ans = Math.min(ans, dp[(1 << n) - 1][i] + graph[i][s]);
    }
    return ans;
}
function findOptTour(graph, dp, s, n) {
    let mask = (1 << n) - 1;
    let i = s;
    let tour = [i];
    while (mask != 0) {
        let j = -1;
        for (let k = 0; k < n; k++) {
            if ((mask & (1 << k)) != 0 && (j == -1 || dp[mask][j] + graph[j][i] > dp[mask][k] + graph[k][i])) {
                j = k;
            }
        }
        tour.push(j);
        mask = mask ^ (1 << j);
        i = j;
    }
    return tour;
}

let graphdF = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
];
console.log(tsl1(graphdF, 0));

// Max Flow
// Given a graph which represents a flow network where every edge has a capacity. Also given two vertices source ‘s’ and sink ‘t’ in the graph, find the maximum possible flow from s to t with following constraints:
// a) Flow on an edge doesn’t exceed the given capacity of the edge.
// b) Incoming flow is equal to outgoing flow for every vertex except s and t.

// Ford Fulkerson Algorithm
// 1) Start with initial flow as 0.
// 2) While there is a path from source to sink.
// ……a) Find minimum residual capacity of the edges along the path filled with current flow values.
// ……b) Add this value to flow.
// 3) Return flow.

// O(f * E) f is max flow  E is number of edges 

function maxFlow(graph, s, t) {
    // s is source and t is sink
    let parent = new Array(graph.length);
    let maxFlow = 0;
    while (bfs(graph, s, t, parent)) {
        let pathFlow = Number.MAX_SAFE_INTEGER;
        for (let v = t; v != s; v = parent[v]) {
            let u = parent[v];
            pathFlow = Math.min(pathFlow, graph[u][v]);
        }
        for (let v = t; v != s; v = parent[v]) {
            let u = parent[v];
            graph[u][v] -= pathFlow;
            graph[v][u] += pathFlow;
        }
        maxFlow += pathFlow;
    }
    return maxFlow;
}
function bfs(graph, s, t, parent) {
    let visited = new Array(graph.length);
    let queue = [];
    queue.push(s);
    visited[s] = true;
    parent[s] = -1;
    while (queue.length > 0) {
        let u = queue.shift();
        for (let v = 0; v < graph.length; v++) {
            if (!visited[v] && graph[u][v] > 0) {
                queue.push(v);
                parent[v] = u;
                visited[v] = true;
            }
        }
    }
    return visited[t];
}

let graphdV = [
    [0, 16, 13, 0, 0, 0],
    [0, 0, 10, 12, 0, 0],
    [0, 4, 0, 0, 14, 0],
    [0, 0, 9, 0, 0, 20],
    [0, 0, 0, 7, 0, 4],
    [0, 0, 0, 0, 0, 0]
];
console.log(maxFlow(graphdV, 0, 5));

//  Calcute the value fo pi using monte carlo method
// 1) Generate a random point in the square.
// 2) Check if the point lies inside the circle.
// 3) Repeat the above steps for a large number of times.
// 4) The ratio of points inside the circle to the total number of points gives an estimate of the value of pi.

function calcPi(n) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        let x = Math.random();
        let y = Math.random();
        if (x * x + y * y <= 1) {
            count++;
        }
    }
    return (4 * count) / n;  // 4 is the area of the square
}
console.log(calcPi(1000000));