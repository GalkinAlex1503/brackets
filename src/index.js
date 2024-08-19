module.exports = function check(str, bracketsConfig) {
    // your solution
    let stack = [];
    let bracketMap = new Map();
    let sameBracketPairs = new Set();

    for (let [open, close] of bracketsConfig) {
        bracketMap.set(close, open);
        if (open === close) {
            sameBracketPairs.add(open);
        }
    }

    for (let char of str) {
        if (sameBracketPairs.has(char)) {
            if (stack.length > 0 && stack[stack.length - 1] === char) {
                stack.pop();
            } else {
                stack.push(char);
            }
        } else if (bracketMap.has(char)) {
            if (stack.length === 0 || stack[stack.length - 1] !== bracketMap.get(char)) {
                return false;
            }
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}
