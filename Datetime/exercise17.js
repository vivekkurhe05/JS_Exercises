/**
 * Write a JavaScript function to convert a Unix timestamp to time.

Test Data:
console.log(Unix_timestamp(1412743274));
10:11:14
 */

// w3resource solution

function Unix_timestamp(t) {
    var dt = new Date(t * 1000);
    var hr = dt.getHours();
    var m = "0" + dt.getMinutes();
    var s = "0" + dt.getSeconds();
    return hr + ':' + m.substr(-2) + ':' + s.substr(-2);
}

console.log(Unix_timestamp(1412743274));