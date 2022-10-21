/**
 * Write a Python program to find the occurrence and position of the substrings within a string.
 * 
 * Found "exercises" at 7:16                                                                                     
Found "exercises" at 22:31                                                                                    
Found "exercises" at 36:45
 */

// my solution
let str = "Python exercises, PHP exercises, C# exercises";
let re = /exercises/g;
let matches = [];
let match;

do{
    match = re.exec(str);
    if(match){
        matches.push(match);
    }
}while(match!=null);

let startIndex = [],
    endIndex = [];
for(let i=0; i<matches.length; i++){
    
    startIndex.push(matches[i].index);
    endIndex.push(matches[i][0].length)

    console.log(`Found "${re.source}" at ${startIndex[i]}:${startIndex[i]+endIndex[i]}`);

}


