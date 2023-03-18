//Bai 5 So nut bang so xe

let number: number = 35472;

function licensePlate(): void {
    
    if (number > 99999) {
        console.log("Chi duoc nhap 5 chu so!!");
    } else {
        const a: number = Math.floor((number / 10000) % 10);
        const b: number = Math.floor((number / 1000) % 10);
        const c: number = Math.floor((number / 100) % 10);
        const d: number = Math.floor((number / 10) % 10);
        const e: number = number % 10;
        const total: number = (a + b + c + d + e) % 10;
        console.log("So nut cua bang so xe la: ", total);
    }
};

licensePlate();
