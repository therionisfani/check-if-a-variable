const repositoryRootPath = path.resolve(__dirname, '..');
const isWeekday = (date) => date.getDay() % 6 !== 0;
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);