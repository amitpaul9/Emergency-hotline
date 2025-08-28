let now = new Date();

let hours = now.getHours();
let minutes = String(now.getMinutes()).padStart(2, '0');
let seconds = String(now.getSeconds()).padStart(2, '0');
let ampm = hours >= 12 ? 'PM' : 'AM';

hours = hours % 12 || 12; // convert 0 → 12

console.log(`${hours}:${minutes}:${seconds} ${ampm}`);
