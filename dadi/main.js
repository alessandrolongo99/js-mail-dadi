const user = Math.floor((Math.random() * 6) + 1);
const ia = Math.floor((Math.random() * 6) + 1);

console.log('user: ' + user);
console.log('ia: ' + ia);

if (user == ia) {
    console.log('pareggio');
} else if (user > ia) {
    console.log('user ha vinto');
} else {
    console.log('ia ha vinto');
}