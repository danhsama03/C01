//Bai 4 Tinh tien

let sl: number = 5;
let donGia: number = 10000;

function moneyAndTax(): void {
    const money: number = sl * donGia;
    const tax: number = 0.01 * money;

    console.log("Tien:", money);
    console.log("Thue:", tax);
};

moneyAndTax();