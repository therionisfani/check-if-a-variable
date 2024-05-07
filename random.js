const removeDuplicates = (arr) => [...new Set(arr)];
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));