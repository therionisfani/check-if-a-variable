const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const channel = getChannel(computedAppVersion);
var DELIM_SIZE = 4;