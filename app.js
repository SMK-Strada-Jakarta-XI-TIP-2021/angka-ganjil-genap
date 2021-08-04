[20.42, 4/8/2021] +62 857-5582-6013: // dengan while soal 1
// bahan buat while
let d = 1;

console.log('');
console.log('Hasil :');
console.log('--------');
// proses 
while (d <= 150) {
    // pengkondisian untuk angka ganjil genap
    if (d % 2 !== 0) {
        console.log('|' + d + ' - ' + ' ganjil');
    } else {
        console.log('|' + d + ' - ' + ' genap');
    }

    d += 3;
}

// dengan while soal 2
// bahan buat while
let e = 50;

console.log('');
console.log('OUTPUT :');
console.log('--------');

// proses
while (e <= 250) {
    // pengkondisian faktor 3
    if (e % 3 !== 0) {
        console.log('|' + e + ' - ' + ' tidak bisa dibagi 3');
    } else {
        console.log('|' + e + ' - ' + ' faktor 3');
    }

    e += 5;
}
[20.42, 4/8/2021] +62 857-5582-6013: // dengan for soal 3
console.log('```');
console.log('OUTPUT :');
console.log('--------');
for (let c = 100; c <= 250; c += 7) {
    if (c % 8 === 0) {
        console.log('| ' + c + ' angka sudah habis dibagi 8');
    } else {
        continue;
    }
}