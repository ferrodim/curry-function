// Function.prototype.bind is prohibited by rules, so let write own
function bind(f, ...args){
    return (...args2) => f(...args, ...args2);
}

// Normal version. It's easy to understand
module.exports = function curry(f, ...args){
    let isArgumentsEnough = (args.length >= f.length);
    if (isArgumentsEnough){
        return f(...args);
    } else {
        return bind(curry, f, ...args);
    }
};