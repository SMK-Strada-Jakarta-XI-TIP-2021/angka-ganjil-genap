// code di sini
// ini tugas ke-1
console.log ('TUGAS KE-1');
for (i = 0; i <= 150 ; i+= 3) {
    if (i % 2 === 0) {
        console.log ('| ' + '- ' + i + ' = ' + ' ' + 'genap')
    } else {
        console.log ('| ' + '- ' + i + ' = ' + ' ' + 'ganjil')
    }
}

// ini tugas ke-2
console.log ('TUGAS KE 2');
for (i = 50; i <= 250; i += 5) {
    if (i % 3 === 0) {
        console.log ('=== ' + i + ' = ' + 'Faktor 3')
    } else {
        console.log ('=== ' + i + ' = ' + 'tidak bisa dibagi 3')
    }
}

// ini tugas ke tiga
console.log('TUGAS KE-3')
for (i = 100; i <= 250; i += 7) {
    if (i % 8 === 0) {
        console.log ('=== ' + i + ' = ' + 'Habis dibagi 8')
    } else {
        continue;
    }
}