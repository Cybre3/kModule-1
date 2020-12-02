function main(grade) {

    if (grade > 90){
        console.log('You got A');
    } else if (grade > 80) {
        console.log('You got B');
    } else {
        console.log('Enter a correct grade');
    }
}

main(85); 
main('hi');