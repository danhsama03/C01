//Bai 7 Khoang cach

let a1: number = 0;
let a2: number = 0;
let b1: number = 3;
let b2: number = 4;

function distance2point(): void {
    const distance: number = Math.sqrt((b1 - a1)**2 + (b2 - a2)**2);
    console.log("Khoang cach giua hai diem la ", distance);
}

distance2point();
