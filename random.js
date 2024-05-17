const buildOutputPath = path.join(repositoryRootPath, 'out');
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const goToTop = () => window.scrollTo(0, 0);