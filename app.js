// dengan for soal 1
console.log('```');
console.log('Hasil :');
console.log('--------');

for (let a = 1; a <= 150; a += 3) {
    if (a % 2 === 0) {
        console.log('| ' + a + ' - ' + 'genap');
    }else {
        console.log('| ' + a + ' - ' + 'ganjil');
    }
}

// dengan for soal 2
console.log('```');
console.log('OUTPUT :');
console.log('--------');
for (let b = 50; b <= 250; b += 5) {
    if (b % 3 === 0) {
        console.log('| ' + b + ' - ' + 'faktor 3');
    } else {
        console.log('| ' + b + ' - ' + 'tidak bisa dibagi 3'); 
    }
}

// dengan for soal 3
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

// dengan while soal 1
// bahan buat while
// let d = 1;

// console.log('```');
// console.log('Hasil :');
// console.log('--------');
// // proses 
// while (d <= 150) {
//     // pengkondisian untuk angka ganjil genap
//     if (d % 2 !== 0) {
//         console.log('|' + d + ' - ' + ' ganjil');
//     } else {
//         console.log('|' + d + ' - ' + ' genap');
//     }

//     d += 3;
// }

// // dengan while soal 2
// // bahan buat while
// let e = 50;

// console.log('```');
// console.log('OUTPUT :');
// console.log('--------');

// // proses
// while (e <= 250) {
//     // pengkondisian faktor 3
//     if (e % 3 !== 0) {
//         console.log('|' + e + ' - ' + ' tidak bisa dibagi 3');
//     } else {
//         console.log('|' + e + ' - ' + ' faktor 3');
//     }

//     e += 5;
// }
