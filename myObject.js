const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const resultingPromises = urls.map((url) => makHttpRequest(url));
const merge = Object.assign({}, obj1, obj2);