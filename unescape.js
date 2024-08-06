const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const goToTop = () => window.scrollTo(0, 0);
const merge = (a, b) => [...a, ...b];