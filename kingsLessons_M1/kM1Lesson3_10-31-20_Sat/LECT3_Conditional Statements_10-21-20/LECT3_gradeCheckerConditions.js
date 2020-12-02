function gradeChecker(score) {

    if( score >= 65){
        console.log('Pass the exam');
        console.log(`Score: ${score}`);
    } else

    // if (score < 65) 
        {
        console.log('Failed the exam');
        console.log(`Score: ${score}`);
    }
}

gradeChecker(95);
gradeChecker(50);

//error with not using curly brackets in a block of code
function gradeChecker1(score) {

    if( score >= 65){
        console.log('Pass the exam');
        console.log(`Score: ${score}`);
    } else

    // if (score < 65) 
        
        console.log('Failed the exam');
        console.log(`Score: ${score}`);
    
}

gradeChecker1(95);

