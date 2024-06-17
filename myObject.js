const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const goToTop = () => window.scrollTo(0, 0);
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;