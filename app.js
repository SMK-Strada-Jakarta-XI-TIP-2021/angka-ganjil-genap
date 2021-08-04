/*Buatlah *Looping* dalam JavaScript untuk memeriksa setiap 3 angka dari 1-150, lalu tampilkan angka tersebut dalam console dan berikan keterangan angka tersebut ganjil atau genap.*/
 
//soal 1
let i = 1;
console.log(" ````````````````````")
console.log(" memeriksa setiap 3 angka dari 1-150 ")
while (i <= 150) {
    if (i % 2 !== 0) {
        console.log('|' + i + ' - ' + ' ganjil ');
    } else {
        console.log('|' + i + ' - ' + ' genap ');
    }

    i += 3;
}

// soal 2
console.log('`````````````````````````')
console.log('memeriksa setiap 5 angka dari 50-250')

let angka = 50;

console.log(' OUTPUT : ');

while (angka <= 250) {

    if (angka % 3 !== 0) {
        console.log('|' + angka + ' - ' + ' bukan faktor perkalian 3');
    } else {
        console.log('|' + angka + ' - ' + ' faktor perkalian 3');
    }

    angka += 5;
}
 // dengan for soal 3
console.log('````````');
console.log('OUTPUT :');
for (let b = 100; b <= 250; b += 7) {
    if (b % 8 === 0) {
        console.log('| ' + b + ' angka sudah habis dibagi 8');
    } else {
        continue;
    }
}