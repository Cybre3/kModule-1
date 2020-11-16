function main(pts) {    
    
    // if (parseInt(pts % 2 == 0)) {
    //     extra = 1;
    // } else if (pts % 10 == 0){
    //     extra = 2;
    // } else if (pts <= 100) {
    //     bonus = 5;
    //     console.log(bonus + extra);
    //     console.log(pts + bonus + extra); 
    // } else if (pts <= 1000) {
    //     bonus = pts * 0.20;
    //     console.log(bonus + extra);
    //     console.log(pts + bonus + extra);
    // } else if (pts > 1000) {
    //     bonus = pts * 0.10;
    //     console.log(bonus + extra);
    //     console.log(pts + bonus + extra);
    // } 
    let mid = pts * 0.10;
    let big = pts * 0.20;

    if (pts % 5 == 0 && pts % 2 == 1){
        bonus = 2;
        if (pts > 1000) {
            console.log((mid) + bonus);
            console.log(pts + (mid) + bonus);
        } else if (pts > 100) {
            console.log((big) + bonus);
            console.log(pts + (big) + bonus);
        } else if (pts < 100) {
            console.log(5 + bonus);
            console.log(pts + 5 + bonus);
        }
    } else if (pts % 2 == 0) {
        bonus = 1;
        if (pts > 1000) {
            console.log((mid) + bonus);
            console.log(pts + (mid) + bonus);
        } else if (pts > 100) {
            console.log((big) + bonus);
            console.log(pts + (big) + bonus);
        } else if (pts < 100) {
            console.log(5 + bonus);
            console.log(pts + 5 + bonus);
        }
    } else {
        if (pts > 1000) {
            console.log(mid);
            console.log(pts + (mid));
        } else if (pts > 100) {
            console.log(big);
            console.log(pts + (big));
        } else if (pts < 100) {
            console.log(5);
            console.log(pts + 5);
        }
    }
}

main(20);
main(175);
main(2703);
main(15875);