const symbolsPath = path.join(buildOutputPath, 'symbols');
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const channel = getChannel(computedAppVersion);