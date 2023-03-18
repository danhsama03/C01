//Bai 6 Doi gio

let timesecond: number = 1000;

function changeTime(): void {
    const hours: number = Math.floor(timesecond / 3600);
    const minutes: number = Math.floor(timesecond / 60);
    const seconds: number = timesecond % 60;
    if (hours < 10) {
        console.log("Thoi gian sau khi doi la 0",hours,":",minutes,":",seconds);
    } else {
        console.log("Thoi gian sau khi doi la ",hours,":",minutes,":",seconds);
    }
    
;}

changeTime();