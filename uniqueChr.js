function unique_chars(str) {
  let unique_str = "";

  for (let i = 0; i < str.length; i++) {
    if (!unique_str.includes(str[i])) {
      unique_str += str[i];
    }
  }
  return unique_str;
}
console.log(unique_chars("abcdabc"));
