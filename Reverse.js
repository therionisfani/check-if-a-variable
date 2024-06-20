var c = new Counter(); c.add(); c.add(); c.add();
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);