/**
 * Write a JavaScript function to hide email addresses to protect from unauthorized user.
 * Test Data :
 * console.log(protect_email("robin_singh@example.com"));
 * "robin...@example.com"
 */

function protect_email (str) {

    let names = str.split('_');
    return names[0] + '...' + names[1].slice(names[1].indexOf('@'));
}

console.log(protect_email("robin_singh@example.com"));
console.log(protect_email("mahendra_singh_dhoni@example.com"));


//or

protect_email = function (user_email) {
    var avg, splitted, part1, part2;
    splitted = user_email.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];
    return part1 + "...@" + part2;
};

console.log(protect_email("robin_singh@example.com"));
console.log(protect_email("mahendra_singh_dhoni@example.com"));