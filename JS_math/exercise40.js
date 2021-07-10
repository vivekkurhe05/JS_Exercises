/**
 * Write a JavaScript function to create random background color. 
 */

// your solution

function rndm_bgcolor () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);;

    let rgb = `rgb(${r},${g},${b})`;
    console.log(rgb)
}

rndm_bgcolor();