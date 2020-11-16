function main(choice) {

    let choiceUpper = choice.toUpperCase();

    switch (choiceUpper) {
        
        case 'y':
        case 'Y': 
            console.log('Yes');
            break;
        case 'N':
            console.log('No');
            break;
        default:
            console.log('Invalid choice');
    }
}

main('N');
main('bolts');