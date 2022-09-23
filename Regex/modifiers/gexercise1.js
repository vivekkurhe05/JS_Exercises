let text = "Is this all there is?";
let re = /is/;
console.log(text.match(re));

if(re.global != true) {
    re+="g"
    console.log(text.match(re))
}