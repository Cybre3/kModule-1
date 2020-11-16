// record in seconds
// distance in meters
// swim time seconds per meter
// water resistance slows 12.5 seconds per 15 meters

function main(recSec, meters, secPerMeter) {

    let resist = Math.floor(meters / 15) * 12.5;
    let iTime = (meters * secPerMeter);
    let iTimeR = iTime + resist;
    let missedTime = iTimeR - recSec;

    if (iTime < recSec) {
        console.log(`Yes, he succeeded! The new world record is ${iTimeR.toFixed(2)} seconds.`);
    } else {
        console.log(`No, he failed! He was ${missedTime.toFixed(2)} seconds slower.`);
    }
}

main(10464, 1500, 20);
main(55555.67, 3017, 5.03);