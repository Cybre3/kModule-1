function main(hour, min) {
    let minT = min + 15;
    let newHr = hour + 1;

    if (minT <= 59) {
        console.log(`${hour}:${minT}`);
    } else if ((minT - 60) < 10) {
        console.log(`${newHr}:0${minT - 60}`);
    } else if (newHr == 24) {
        console.log(`0:${minT - 60}`);
    } else if (minT > 59) {
        console.log(`${newHr}:${minT - 60}`);
    } 
}

main(1, 46);
main(0, 01);
main(23, 59);
main(11, 08);
main(12, 49);