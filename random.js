console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
const currentDate = () => new Date().toLocaleDateString('en-US');