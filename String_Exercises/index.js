/**
 * You can't change constant variable
 */
const url = 'https://google.com/';
url = url.replaceAll('/','\\')
console.log(url)