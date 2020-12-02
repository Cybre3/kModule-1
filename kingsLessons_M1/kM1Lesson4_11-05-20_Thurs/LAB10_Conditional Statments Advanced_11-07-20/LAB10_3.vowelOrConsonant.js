/* 
Write a function to check a letter for vowel or consonant:
• Receives a letter from the English alphabet
• Print either "Vowel" or "Consonant"
*/

function main(letterChoice) {

 let letter = letterChoice.toLowerCase();

    switch (letter) {

        case 'e':
        case 'u':
        case 'o':
        case 'i':
        case 'a':
            console.log('Vowel');
            break;
        default:
            console.log('Consonant');
    }
}

main('a');
main('x');
main('E');
main('i');
main('b');