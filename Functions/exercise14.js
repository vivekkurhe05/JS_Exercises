/**
 * Write a JavaScript function to convert an amount to coins. Go to the editor
Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
Output : 25, 10, 10, 1
 */

// function convert_amount_into_coins(amount, coins) {
//     let diff = amount - coins[0];
//     var d = 0;
//     while (diff >= 0) {
//         console.log("coin used: " + coins[0])
//         if (diff <= coins[0]) {
//             d = coins.shift();
//             console.log(coins)
//         }

//         diff = diff - coins[0]

//         if (diff < 0) {
//             coins.shift()
//             diff = diff + d
//             console.log("diff value " + diff)
//         }

//     }

//     return diff;
// }

// console.log(convert_amount_into_coins(46, [25, 10, 5, 2, 1]));


// one of the comments


function convertAmountCoins(amount, coins) {
    let result = [];
    for (let i = 0; i < coins.length; i++) {
        for (let j = 0; j < Math.floor(amount / coins[i]); j++) result.push(coins[i]);
        amount %= coins[i];
    }
    return result;
}
console.log(convertAmountCoins(46, [25, 10, 5, 2, 1])); // [ 25, 10, 10, 1 ]
console.log(convertAmountCoins(0, [25, 10, 5, 2, 1])); // []
console.log(convertAmountCoins(18, [25, 10, 5, 1])); // [ 10, 5, 1, 1, 1 ]
console.log(convertAmountCoins(47, [5,2])); 