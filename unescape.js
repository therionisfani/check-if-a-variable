const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;