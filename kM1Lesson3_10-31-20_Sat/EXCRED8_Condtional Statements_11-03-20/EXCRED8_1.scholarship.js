// social scholarship or scholarship for excellent performance
// income(leva), minimun wage, gpa
// income < minimum wage, gpa >= 4.5 
// social scholarship = 35% of minimum wage
// scholarship of excellent results is a gpa of >= 5.5
// amount of scholarship for excellent performance = student gpa * 25
// Print scholarship with bigger amount of money

function main(incomeLeva, studentGpa, minimumWage) {
    
    let socialScholarship = minimumWage * 0.35;
    let scholarshipExcellentPerformance = studentGpa * 25;

    if (studentGpa >= 5.5) {
        if (scholarshipExcellentPerformance >= socialScholarship) {
            console.log(`You get a scholarship for excellent results ${Math.floor(scholarshipExcellentPerformance)} BGN`);
        } else {
            console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
        }
    } else if (incomeLeva < minimumWage && studentGpa >= 4.5) {
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
    } else {
        console.log(`You cannot get a scholarship!`);
    }
}

// You may eliminate nested conditionals by making use of conditional operators:

// function main(income, gpa, minWage) {
//     var socialScholarship = 0.35 * minWage;
//     var excellentScholarship = gpa * 25;
//     if (income < minWage && gpa >= 5.5 && socialScholarship <= excellentScholarship) {
//         console.log("You get a scholarship for excellent results " + excellentScholarship + " BGN");
//     } else if (income < minWage && gpa >= 5.5 && socialScholarship >= excellentScholarship) {
//         console.log("You get a Social scholarship " + socialScholarship + " BGN");
//     } else if (income > minWage || gpa < 5.5) {
//         console.log("You cannot get a scholarship!");
//     }
// }


main(480.00, 4.60, 45.00);
main(300.00, 5.65, 420.00);
main(310, 5.8, 350);