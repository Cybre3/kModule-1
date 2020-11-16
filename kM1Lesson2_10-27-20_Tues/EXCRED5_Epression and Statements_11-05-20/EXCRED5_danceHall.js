/* 
dancer space = 40cm2 
length and width in meters; convert to cm2
Wardrobe side input (a) in meters
Bench size is 10 times less than hall/room area
*/

function main(l , w , a) {

    let areaCm2 = l * w * 10000;  
    let rBenchSize = areaCm2 / 10;
    let sWardrobe = a * a * 10000;
    let spaceNeed = 40 + 7000;
    let freeSpace = areaCm2 - rBenchSize - sWardrobe;
    let possibleDancers = Math.floor(freeSpace / spaceNeed);

    console.log(Math.floor(possibleDancers));
}

main(50, 25, 2);
main(40, 32, 1);