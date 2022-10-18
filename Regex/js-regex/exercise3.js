/**
 * Write a pattern that matches e-mail addresses.

The personal information part contains the following ASCII characters.

Uppercase (A-Z) and lowercase (a-z) English letters.
Digits (0-9).
Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
Character .( period, dot or fullstop) provided that it is not the 
first or last character and it will not come one after the other.
 */

// my solution
function valid_email(email) {
  let re = /[A-Za-z0-9]+\-[A-Za-z0-9]+@[A-Za-z]+\.[a-z]{2,3}/;

  return re.test(email);
}

console.log(valid_email("me-info@example.com"));