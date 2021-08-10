// tugas ke 1

console.log('Hasil tugas 1');
console.log('----');
for (i = 1; i <= 150; i += 3) {
    if (i % 2 === 0) {
        console.log('-' + i + ' adalah genap');
    } else {
        console.log('-' + i + ' adalah ganjil');
    }
}
console.log(); //pemisah

// tugas ke 2

console.log('Hasil tugas 2');
console.log('----');
for (i = 50; i <= 250; i += 5) {
    if (i % 3 === 0) {
        console.log('-' + i + ' faktor 3');
    } else {
        console.log('-' + i + ' bukan faktor 3');
    }
}

console.log(''); // pemisah

//tugas ke 3

console.log('OUTPUT TUGAS 3');
console.log('----');
for (i = 100; i <= 250; i += 7) {
    if (i % 8 === 0) {
        console.log('-' + i + ' bisa dibagi 8');
    } else {
        // console.log('-' + i + ' gak bisa dibagi 8');
        continue;
    }
}