const users = ['alessandro@gmail.com', 'luca@gmail.com', 'giacomo@gmail.com', 'simone@gmail.com', 'ercole@gmail.com', 'gennaro@gmail.com',];

const input = prompt('inserisci email:');

let control = false;

for (let i = 0; i < users.length; i++) {
    if (users[i] == input){
        control = true;
    }
}

if (control) {
    console.log('puoi accedere al sito');
} else {
    console.log('non puoi accedere al sito');
}