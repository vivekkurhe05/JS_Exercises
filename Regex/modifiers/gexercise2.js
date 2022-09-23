let text = "Is this all there is?";
let pattern = /is/g; 

let matches = [];
let result;

do{
    result = pattern.exec(text);
    if(result) {
        matches.push(result)
    }
}while(result!=null)

console.log(matches.map((el,index) => el.index))
