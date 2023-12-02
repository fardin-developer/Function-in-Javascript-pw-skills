function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function(...moreArgs) {
                return curried(...args, ...moreArgs);
            };
        }
    };
}

const add = (a, b) => a + b;
const curriedAdd = curry(add);

const add5 = curriedAdd(5);
console.log(`add5(3): ${add5(3)}`);  // Output: 8

console.log(`curriedAdd(2, 3): ${curriedAdd(2, 3)}`);  // Output: 5
