//Bai 9 Tinh S

let x: number = 4;
let y: number = 2;

function calculateS(): void {
    const S: number = (Math.sqrt(x) + Math.abs(x)) / Math.sqrt((x)**y);
    console.log("S = ", S);
};

calculateS();
