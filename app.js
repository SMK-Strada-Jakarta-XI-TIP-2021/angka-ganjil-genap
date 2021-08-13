// Looping For Soal 1
console.log ("Looping For Soal 1");
console.log("Hasil:")
console.log("--------")
for (a = 0; a <= 150 ; a+= 3) {
    if (a % 2 === 0) {
       
        console.log ('   ' + a + ' - ' + 'genap')
    } else {
        console.log ('   ' + a + ' - ' + 'ganjil')
    }
}

console.log ('====================');

// Looping For Soal 2
console.log ("Looping For Soal 2");
console.log("OUTPUT:")
console.log("--------")
for (a = 50; a <= 250; a += 5) {
    if (a % 3 === 0) {
        console.log ('   ' + a + ' - ' + 'faktor 3')
    } else {
        console.log ('   ' + a + ' - ' + 'tidak bisa dibagi 3')
    }
}

console.log ('====================');

// Looping For Soal 3
console.log ("Looping For Soal 3");
console.log("OUTPUT:")
console.log("--------")
for (a = 100; a <= 250; a += 7) {
    if (a % 8 === 0) {
        console.log ('   ' + a)
    } else {
        continue;
    }
}
