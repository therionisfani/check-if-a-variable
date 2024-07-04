const channelName = getChannelName(channel);
const isTabInView = () => !document.hidden;
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;