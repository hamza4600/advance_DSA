
// parintheses matching

function isBalanced(str) {
    let stack = new Stack();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push(str[i]);
        } else if (str[i] === ')') {
            if (stack.peek() === '(') {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.items.length === 0;
}

console.log(isBalanced('((()))'));


/*

coding challange for for front end developer

function MathChallaenge(str) { } 
take string being passed and determineif there is some substring K that can be repeated N > 1 times to produce the input string exactly as it appears. program should produce the longest substring K, and if there is none it should return the string -1.

example:
input: "abcababcababcab"
output: abcab

function MathChallaenge(str) { 
    // code goes here
    return str;
}

console.log(MathChallaenge('abcababcababcab'), '====='); // abcab



*/

function MathChallaenge(str) {
    const length = str.length;
    if (length > 1) {
        for (let i = Math.ceil(length / 2); i > 1; i--) {
            {
                const substring = str.slice(0, i)
                const repeated = substring.repeat(length / i)

                if (repeated === str) {
                    return substring
                }
            }
        }

        return '-1'
    }
}

// console.log(MathChallaenge('affedaaffed'), '=====');

// Array challane 
// first Most repeated number in array

function mostRepeated(arr) {
    let obj = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (obj.has(arr[i])) {
            obj.set(arr[i], obj.get(arr[i]) + 1);
        } else {
            obj.set(arr[i], 1);
        }
    }
    let max = 1;
    let res = -1;
    console.log(obj);
    obj.forEach((value, key) => {
        if (max < value) {
            res = key;
            max = value;
        }
    })
    return res;
}
let cd = [3, 4, 1, 6, 10]

function maxRepeted(arr) {
    let maxCount = 1;
    let maxfreq = -1;

    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count > maxCount) {
            maxCount = count;
            maxfreq = arr[i];
        }
    }
    return maxfreq
}

// console.log(maxRepeted(cd), '=====');

// baskend challange 
// use GraphQl write a query to return an arrgument of ISBN number which is equal to string 0743273567  a book object with title ; string , publisher: string  , author: string  , pages : int, publisher : string  , generes: array of string , reviews : array obj 
// make sure to set limit of 1 for the review field

// quer

// {
//     book(isbn: "0743273567") {
//         title
//         publisher

//         author
//         pages
//         publisher
//         generes
//         reviews(limit: 1) {
//             title
//             body
//             rating
//         }
//     }


// React challange
// Todo App work by implementing the functionality for the components.

// It should work the following way: The user can type anything in the input form, and press enter or click the "Add Item" button to add the item to the todo list. The todo list items should display in list format. You should then finally be able to mark items as "completed" or remove them from the list. When an item is marked as completed, have it display with a line through the text and be colored green.

// When the app initially loads make sure the todo list is empty. You are free to add classes and styles, but make sure you leave the component ID's and clases provided as they are. Submit your code once it is complete and our system will validate your output.

// Good luck!


// import React, { useState } from 'react';

/*
    const [todoList, setTodoList] = useState([]);
    const [todoInput, setTodoInput] = useState('');

    const handleAddItem = () => {
        // Add item to todoList
         // add item to todoList
        if (todoInput !== '') {
            setTodoList([...todoList, todoInput]);
            setTodoInput('');

        }
    }

    const handleRemoveItem = (index) => {
        // Remove item from todoList
        const newTodoList = [...todoList];
        newTodoList.splice(index, 1);
        setTodoList(newTodoList);


    }

    const handleCompleteItem = (index) => {
        // Mark item as completed
        get by id
        const item = document.getElementById(index);
        color green
        item.style.color = 'green';
        line through    


    }

    return (
        <div className="todo-app">

            <div className="todo-input">
                <input 
                type="text"
                 id="todo-input"
                    value={todoInput}
                    onChange={(e) => setTodoInput(e.target.value)}
                     
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                                handleAddItem();
                        }
                    }}

                 
                 />
                <button id="add-item" onClick={handleAddItem}>Add Item</button>


                    listtodoList.map((item, index) => (
                        <li key={index}>
                            <span
                                className={item.completed ? 'completed' : ''}
                                    id = {index}
                            >{item}</span>
                            <button id="remove-item" onClick={() => handleRemoveItem(index)}>Remove</button>
                            <button id="complete-item" onClick={() => handleCompleteItem(index)}>Complete</button>
                        </li>
                    ))}
            </div>
        </div>




        countt in react native corret work 

        import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View>

            <Button
                title="Increase"
                onPress={() => {
                    setCounter(counter + 1);
                }
                }
            />
            

            Hacker rank coding challange 
            javascript img clone 

            creat an image class that support Imag clone , Multiplr tools make copy pass position of the image bu cloning the image 
            class Size (width , height) to set the width and height of the image
            impletemt class image 
            with fillowin method Stringh url , Size size set the url and size of the image
            getUrl() return the url of the image
                setUrl(url) set the url of the image
                setSize(size) set the size of the image widtha nd height 
                getSize return the size of the image
                cloneImage return current img . Retuern a new image with the same url and size
                the lock stub validates the correctness of Imag implementation  by perfoming following operation 
                CloneId this operation clone the image 
                UpdateUrl Id newUrl the operation update the url of the image
                UpdateSize Id newSize the operation update the size of the image
                after all operations the lock stub print the url and size of each image

                class Size {
                    constructor(width, height) {
                        this.width = width;
                        this.height = height;
                }

                class Image {
                    constructor(url, size) {
                        this.url = url;
                        this.width = size.width;
                        this.height = size.height;
                    }

                    getUrl() {
                        return this.url;
                    }

                    setUrl(url) {
                        this.url = url;
                    }

                    getSize() {
                        return new Size(this.width, this.height);
                    }

                    setSize(width, height) {
                        this.width = width;
                        this.height = height;
                    }

                    cloneImage() {
                        return new Image(this.url,  new Size(this.width, this.height));
                    }
                }

                
                javascropt Employee Inheritance
                use prototypal inheritance to create a class Employee that has the following properties and methods
                creat a function Employee that takes single parameter title assign to its  member variable title
                aadd following method to the Employee prototypeset
                setTitle(title) set the title of the employee
                getTitle() return the title of the employee

                fucltion Employee(title) {
                    this.title = title;
                }

                Employee.prototype.setTitle = function(title) {
                    this.title = title;
                }

                Employee.prototype.getTitle = function() {
                    return this.title;
                }

                creat a class Engineer that inherits from Employee and has the following properties and methods
                take two parameter title and isManager and assign to its member variable title and isManager
                add these function  to enginr prototypes
                setIsManager(isManager) set the isManager of the engineer
                getIsManager() return the isManager of the engineer

                function Engineer(title, isManager) {
                    Employee.call(this, title);
                    this.isManager = isManager;
                }

                Engineer.prototype = Object.create(Employee.prototype);
                Engineer.prototype.constructor = Engineer;

                Engineer.prototype.setIsManager = function(isManager) {
                    this.isManager = isManager;
                }

                Engineer.prototype.getIsManager = function() {
                    return this.isManager;
                }


                Sorted Sums hacker rank 
                for a sequience [a1, a2, an]
                take first element of a (a1, a2, an) sort then in non-decreasing order callthis new sequence 
                let f(i) = 1 * s1 + 2 * s2 + ... + i * si 
                then compute f(1)+f(2)+f(n) where f(i) = (a1 + a2 + ... + ai) as result may be large print the result modulo 10^9 + 7 
                example 
                 n = 4
                 a= [4, 3, 2, 1]
                 s1= [4] f(1) = 1 * 4 = 4
                 s2= [3, 4] f(2) = 1 * 3 + 2 * 4 = 11
                    s3= [2, 3, 4] f(3) = 1 * 2 + 2 * 3 + 3 * 4 = 20
                    s4= [1, 2, 3, 4] f(4) = 1 * 1 + 2 * 2 + 3 * 3 + 4 * 4 = 30
                    f(1) + f(2) + f(3) + f(4) = 4 + 11 + 20 + 30 = 65 and 65 % (10^9 + 7) = 65

                    function sortedSum(a) {
                        let s = a.sort((a, b) => a - b);
                        let result = 0;
                         
                        for (let i = 0; i < s.length; i++) {
                            let f1 = 0;
                            for (let j = 0; j < i; j++) {
                                f1 += (j + 1) * s[j];
                            }
                            result += f1;
                        }

                        return result % (Math.pow(10, 9) + 7);

                    }

*/
function arrangeSort(currSort, ele) {
    if (currSort.length === 0) return [ele];
    var i = 0, arr = [];
    while (currSort[i] <= ele) {
        arr.push(currSort[i]);
        i++;
    }
    arr.push(ele);
    for (var a = i; a < currSort.length; a++) {
        arr.push(currSort[a]);
    }
    return arr;
}
function sumArr(currSort, ele) {
    var currSort1 = arrangeSort(currSort, ele);
    var sum = 0;
    for (var i = 0; i < currSort1.length; i++) {
        sum = sum + (i + 1) * currSort1[i];
    }
    return {
        currSort: currSort1,
        val: sum

    }
}

function sortedSum(a) {

    var currSort = [];
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        var obj = sumArr(currSort, a[i]);
        sum = sum + obj.val;
        currSort = obj.currSort;
    }
    return sum % (Math.pow(10, 9) + 7);
}

console.log(sortedSum([4, 3, 2, 1]));


/*


cpp solution

class BIT{
public:
    int size;
    vector<long long> v;
    BIT(int s){
        size = s;
        v.resize(s, 0);
    }
    void update(int i, int delta){
        while(i < size){
            v[i] += delta;
            i += i & (-i);
        }
    }
    long long sum(int i){
        long long s = 0;
        while(i > 0){
            s += v[i];
            i -= i & (-i);
        }
        return s;
    }
};

int sortedSum(vector<int> a) {
     int n = a.size();
     int N = 1e6 + 1, M = 1e9 + 7;
    BIT *pre = new BIT(N), *post = new BIT(N);
    long long fn = a[0], ans = fn, totSum = fn;
    pre->update(a[0], 1);
    post->update(a[0], a[0]);
    for(int i = 1; i < n; i++) {
        int rank = pre->sum(a[i]) + 1;
        long long sumGreaterThanI = totSum - post->sum(a[i]);
        fn = (fn + rank * 1ll * a[i] + sumGreaterThanI) % M;
        ans = (ans + fn) % M;
        pre->update(a[i], 1);
        post->update(a[i], a[i]);
        totSum += a[i];
    }
    return ans;
    
}

Hotel Construction
there are certain number of cities in a country some of whicj are connect d bidirectional number of roads are one less than
 number of cities it is posible to travel in any pair of cities by road the distince between two cities is the minimun number of roads that must be traversed to travel from one city to another
 how many ways are there to build exact 3 hotels  each is diffenet city such that distance between each pair is equal  
    example
     n = 5 cities
     roads = [[1, 2], [1, 3], [1, 4], [1, 5]]
        there are 4 ways to build exactly 3 hotels
        build hotel in cities 2 , 3 and 4
        build hotel in cities 2, 3 and 5
        build hotel in cities 2, 4 and 5
        build hotel in cities 3, 4 and 5
        in all cases distnce between each pair of hotels is 2 beacuse there are four way to accomplish the answer is 4

        function hotelConstruction(n, roads) {
            let graph = new Array(n + 1).fill(0).map(() => new Array());
            for (let i = 0; i < roads.length; i++) {
                let [a, b] = roads[i];
                graph[a].push(b);
                graph[b].push(a);
            }

            let dist = new Array(n + 1).fill(0);
            let visited = new Array(n + 1).fill(false);
            let queue = [];
            queue.push(1);
            visited[1] = true;
            while (queue.length > 0) {
                let curr = queue.shift();
                for (let i = 0; i < graph[curr].length; i++) {
                    let next = graph[curr][i];
                    if (!visited[next]) {
                        visited[next] = true;
                        dist[next] = dist[curr] + 1;

                        queue.push(next);
                    }
                }

            }

            let max = Math.max(...dist);
            let count = 0;

            for (let i = 1; i <= n; i++) {
                if (dist[i] === max) {
                    count++;
                }
            }

            return count * (count - 1) * (count - 2) / 6;

        }


    n = len(roads) + 1
    adj = [[] for _ in range(n)]
    for i, j in roads:
        adj[i - 1].append(j - 1)
        adj[j - 1].append(i - 1)
    ans = 0
    
    def dfs(x, d):
        dist[x] = d
        for y in adj[x]:
            if dist[y] == -1:
                dfs(y, d + 1)
    
    # Brute force.
    for i in range(n - 2):
        for j in range(i + 1, n - 1):
            for k in range(j + 1, n):
                dist = [-1 for _ in range(n)]
                dfs(i, 0)
                if dist[j] != dist[k]:
                    continue
                dist = [-1 for _ in range(n)]
                dfs(j, 0)
                if dist[i] == dist[k]:
                    ans += 1
    return ans


    Javascript coding challenge

    linkedIn question
    one difference between collections created with map and collection created with Object 
    map can have any type of key 

*/

function hotelConstruction(roads) {
    let n = roads.length + 1;
    // let adj = Array(n).fill(0).map(() => []);
    let adj = [];
    for (let [i, j] of roads) {
        adj[i - 1].push(j - 1);
        adj[j - 1].push(i - 1);
    }
    let ans = 0;

    function dfs(x, d) {
        dist[x] = d;
        for (let y of adj[x]) {
            if (dist[y] === -1) {
                dfs(y, d + 1);
            }
        }
    }

    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                let dist = Array(n).fill(-1);
                dfs(i, 0);
                if (dist[j] !== dist[k]) {
                    continue;
                }
                dist = Array(n).fill(-1);
                dfs(j, 0);
                if (dist[i] === dist[k]) {
                    ans += 1;
                }
            }
        }
    }
    return ans;
}

console.log(hotelConstruction(5, [[1, 2], [1, 3], [1, 4], [1, 5]]));

let rain = 10;
let animal = 0;
while(rain < 13 || animal <= 2) {
    rain ++;
    animal +=2
}

console.log(animal); // 4