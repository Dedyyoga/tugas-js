// soal no 1
let max_user = 100;
for(let i = 1; i <= 100; i++) {
    console.log(`User ke-${i}`);
    document.write = `User ke-${i}`;
}


//  Soal no 2 //
let max_loop = 10;
for(let i = 0; i < 10 * 2; i += 2) {
    console.log(i);
}


//  Soal no 3 //
for(let i = 0; i <= 20; i++) {
    if(i % 2 === 0) {
        console.log(i + ' = genap');
    } else {
        console.log(i + ' = ganjil');
    }
}


//  Soal no 4 //
let check_confirm = confirm('Apakah anda mau mengulang?');
let count = 0;
while(check_confirm) {
    check_confirm = confirm('Apakah anda mau mengulang?');
    count++;
}

console.log('Perulangan sudah dilakukan sebanyak ' + count);



// Soal no 5 //
let ib = prompt('Sebutkan kepanjangan dari nama IB?');
let check = ib === 'Impact Byte';

while(!check) {
    ib = prompt('Sebutkan kepanjangan dari nama IB?');
    break;
}
alert('Selamat jawaban kamu benar');