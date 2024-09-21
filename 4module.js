const input = require('readline-sync');

function collatzLength(p) {
    let z = p;
    let count = 0;
    
    while (z !== 1) {
        if (z % 2 == 0) {
            z = z / 2;
        } else {
            z = 3 * z + 1;
        }
        count++;
    }
    
    console.log(count);
    return count;
}

const p = input.questionInt('Enter the number: ');
collatzLength(p);