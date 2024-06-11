const removeDuplicates = (arr) => [...new Set(arr)];
const currentDate = () => new Date().toLocaleDateString('en-US');
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);