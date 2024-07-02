const timeFromDate = date => date.toTimeString().slice(0, 8);
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);