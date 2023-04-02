const fs = require('fs');

// show all files in a directory
//  file and folder are like a node in a tree and the tree is the directory 

function isDirectory(file) {
    return fs.statSync(file).isDirectory();

}

function readDir(dir) {
    let files = fs.readdirSync(dir + '/');
    return files;
}
let cache = new Object();

class File {
    constructor(name, size) {
        this.name = name;
        this.size = size;
    }
}

class Directory {
    constructor(name, files, size) {
        this.name = name;
        this.files = [...files];
        this.size = size;
    }
}

const showfiles = () => {

    let arrfiles = [];

    const files = fs.readdirSync(__dirname); // get all files in the current directory

    files.forEach((file, index) => {
        if (!cache[file]) {
            let fil = new File(file, fs.statSync(file).size);
            cache[file] = fil;
        }
        if (isDirectory(file)) {
            let files = fs.readdirSync(file);
            let dir = new Directory(file, files, fs.statSync(file).size);
            cache[file] = dir;
        }
    });

    for (let key in cache) {
        // only node_modules folder is a directory
        if (cache[key].name === 'node_modules') {
            let files = fs.readdirSync(cache[key].name);
            cache[key].files = files;
            // files is an array of files in the node_modules folder
            arrfiles.push(cache[key].files);
        }
    }
    for (let i = 0; i < arrfiles[0].length; i++) {
        let ss = arrfiles[0][i];
        if(isDirectory(ss)){
            console.log(ss);
        } else {
            console.log("file: " + ss);
        }
    }
}

showfiles();


let dc = new fs.Dirent();

const ch = (folder) => {
    return dc.isDirectory(folder);
}

function readData(file) {
    let data = fs.readFileSync(file, 'utf8');
    // remove all comments from the file
    let regex = /\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm;
    let result = data.replace(regex, '');
    // write the file without comments
    fs.writeFileSync('xs.js', result);
    return result;
}
// console.log(readData('xs.js'));

// go deep down to all folders and get all files in the directory 
function recursivelyCheck(dir, stack) {
    let files = fs.readdirSync(dir);
    if (!files) return;
    if (files.length === 0) return;
    // file is a file push to stack
    if (ch(files[0])) {
        stack.push(files[0]);
    }
    for (let i = 0; i < files.length; i++) {
        if (!ch(files[i])) {
            recursivelyCheck(files[i], stack);
        } else {
            stack.push(files[i]);
        }
    }
}


function allFiles(dir) {
    let stack = [];
    let folders = fs.readdirSync(dir);

    try {
        for (let i = 0; i <= folders.length; i++) {
            const file = folders[i];
            if (!ch(file)) {
                recursivelyCheck(file, stack);
            } else {
                stack.push(file);
            }
        }
        console.log(stack.length);
    }
    catch (err) {
        console.log(err);
    }
}

// allFiles('node_modules');
