const merge = (a, b) => a.concat(b);
const uniqueArr = (arr) => [...new Set(arr)];
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");