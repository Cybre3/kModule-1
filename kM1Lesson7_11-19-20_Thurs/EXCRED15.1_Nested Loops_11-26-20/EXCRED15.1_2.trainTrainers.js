/*
calculate average score of each presentation by a student, 
and the average of all presentations.

Input
● first row 
    number of people on the jury -n -an integer in the range [1...20]
● separate line
    name of the presentation -String
● For each presentation of the new line 
    n -the number of ratings -real number in the interval [2.00 ... 6.00]
    
Output
● After calculating average for a presentation
    print:“{name of the presentation} -{average score}.”
● After receiving the command "Finish"
    print:“Student’s final assessment is {average presentations of all presentations}.” 
    
All scores formatted to second decimal point.
*/

function main(juryNum, listPresent) {
    let present = listPresent.shift();
    let presentName = '';
    let allPreScore = 0;
    let evalCount = 0;
    
    while(present !== 'Finish' && present !== undefined){
        let eachPreScore = 0;
        let eachPreAvg = 0;
        presentName = present;
        present = listPresent.shift();
        for(let i = 1; i <= juryNum; i++){
            eachPreScore += present;
            present = listPresent.shift();
        }
        eachPreAvg = eachPreScore / juryNum;
        evalCount += juryNum;
        allPreScore += eachPreScore;
        console.log(`${presentName} - ${eachPreAvg.toFixed(2)}.`);
    }
    let allPreAvg = allPreScore / evalCount;
    if(present === 'Finish'){
        console.log(`Student's final assessment is ${allPreAvg.toFixed(2)}.`);
    }
}

main(2, ['While-Loop', 6.00, 5.50, 'For-Loop', 5.84, 5.66, 'Finish']);
main(1, ['Objects', 3.00, 'Arrays', 4.00, 'Finish']);