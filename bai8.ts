//Bai 8 Hoan vi

let a: number = 2;
let b: number = 4;

function permutation(): void {
    let c: number = 0;
    c = a;
    a = b;
    b = c;
    console.log("Sau khi hoan vi a =",a, ", b =",b);
};

permutation();