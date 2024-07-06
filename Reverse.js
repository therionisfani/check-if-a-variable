const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
console.log("1 && 2 = "+(1 && 2));