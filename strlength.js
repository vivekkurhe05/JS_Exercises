function strlen(str) {
  let length = 0;

  while (str[length] != undefined) {
    length++;
  }
  return length;
}

console.log(strlen("WeLcOmE"));