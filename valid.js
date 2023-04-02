// Valid paranetheis 
// 5 + (6 + 7) + 8 * {9 + 10} + [11 + 12] 

function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else {
            const last = stack.pop();
            if (s[i] !== map[last]) {
                return false;
            }
        }
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
}

console.log(isValid('()[]{}'))