// The Promise object represents the eventual completion (or failure) of an asynchronous operation 
// and its resulting value.

const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
    .then(function (orderId) {
        console.log(orderId);
        return orderId;
    })
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    })
    .catch(function (err) {
        console.log(err.message);
    });

// createOrder(cart)
//     .then(function (orderId) {
//         console.log(orderId);
//         return orderId;
//     })
//     .then(function (orderId) {
//         return proceedToPayment(orderId);
//     })
//     .catch(function (err) {
//         console.log(err.message);
//     })
//     .then(function (paymentInfo) {
//         console.log(paymentInfo);
//     })   // No Matter happens i will definitely be called

function validateCart(cart) {
    return true;
}

// Producer
function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        // createOrder
        // validateCart
        // orderId
        if (!validateCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }
        // logic for createOrder
        const orderId = "12345";
        if (orderId) {
            setTimeout(function () {
                resolve(orderId);
            }, 5000);
        }
    });
    return pr;
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        resolve("Payment Successful");
    });
}

