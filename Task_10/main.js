// 1

function getPromise(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

getPromise('test promise', 2000)
    .then(resolve => console.log(resolve));


// 2

function calcArrProduct(arr) {
    return new Promise((resolve, reject) => {
        const checkNumber = arr.every(i => ((typeof i) === 'number'));
        if (checkNumber) {
            const productArray = arr.reduce((acc, curr) => acc * curr, 1);
            resolve(productArray);
        } else {
            reject('Error! Incorrect array!"');
        }
    });
}

calcArrProduct([1, 2, 3])
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject));