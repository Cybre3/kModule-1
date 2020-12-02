function main(sec1, sec2, sec3) {
    // console.log("Hello World")
    let total = "";
    let sumOfSec = sec1 + sec2 + sec3;

    if (sumOfSec < 10) {
        "0" + sumOfSec;
    }
    let sec = sumOfSec;
    switch (true) {
        case (sumOfSec <= 59):
            if (sumOfSec < 10) {
                sec = `0${sumOfSec}`
            }
            console.log(`0:${sec}`);
            break;
        case (sumOfSec >= 60 && sumOfSec <= 119):
            sec = sumOfSec - 60;
            if (sec < 10) {
                sec = `0${sec}`;
            }
            console.log(`1:${sec}`);
            break;
        case (sumOfSec >= 120 && sumOfSec <= 179):
            sec = sumOfSec - 120;
            if (sec < 10) {
                sec = `0${sec}`;
            }
            console.log(`2:${sec}`);
            break;
        default:
    }


    // console.log(sumOfSec)
    // console.log(total)

}

main(35, 45, 44);
main(22, 7, 34);
main(50, 50, 49);
main(14, 12, 10);
