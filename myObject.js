var arr2 = arr1.reverse();
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const reversedString = str => str.split('').reverse().join('');
var regexp  = new RegExp('{{([^}]+)}}', 'g');
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());