//Bai 3 Chu vi va dien tich hinh tron

let PI: number = 3.14;
let r: number = 5;

function circle(): void {
    const C: number = r * 2 * PI;
    const S: number = r**2 * PI;

    console.log("Chu vi la: ",C, ", Dien tich la: ",S);
};

circle();