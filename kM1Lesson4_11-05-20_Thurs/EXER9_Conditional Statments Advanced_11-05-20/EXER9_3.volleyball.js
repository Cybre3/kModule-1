function main(yearType, numOfHolidays, numOfWeekendsInHometown) {
    // weekendsInAYear = 48;
    // weekendsOffInSofia = 3/4;
    let gamesHolidaysInSofia = numOfHolidays * (2/3);    
    let gamesPlayedWeekendsInSofia = (48 - numOfWeekendsInHometown) * (3/4);
    let gamesNotLeapYear = gamesPlayedWeekendsInSofia + gamesHolidaysInSofia + numOfWeekendsInHometown;
    let gamesPlayed = 0;

    switch (yearType) {
        
        case 'normal':
            gamesPlayed = gamesNotLeapYear;         
            break;
        case 'leap':
            gamesPlayed = gamesNotLeapYear + (gamesNotLeapYear * 0.15);
            break;
        default:
            break;
    }

    console.log(Math.trunc(gamesPlayed));
}

main('leap', 5, 2);
main('normal', 3, 2);
main('leap', 2, 3);
main('normal', 11, 6);
main('leap', 0, 1);
main('normal', 6, 13);