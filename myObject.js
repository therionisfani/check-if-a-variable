const toggleBool = () => (bool = !bool);
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const isEven = (num) => num % 2 === 0;
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');