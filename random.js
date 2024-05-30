const fullName = name || 'buddy';
const executableName = getExecutableName(channel, appName);
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());