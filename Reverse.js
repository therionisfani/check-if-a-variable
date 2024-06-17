const scriptRootPath = path.join(repositoryRootPath, 'script');
const isEven = (num) => num % 2 === 0;
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));