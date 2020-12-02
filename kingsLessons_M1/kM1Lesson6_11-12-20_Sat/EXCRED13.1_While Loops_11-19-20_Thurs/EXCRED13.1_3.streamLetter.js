function main(listLetters) {
    let letter = listLetters.shift();
    let firstLetter = '';
    let otherLetters = '';
    let wordLetterCount = 1;

    while (letter !== 'End' && letter !== undefined) {

        if (letter !== 'c' && letter !== 'n' && letter !== 'o') {
            if (wordLetterCount === 1) {
                firstLetter = letter.toUpperCase();
            } else {
                otherLetters += letter.toLowerCase();
            }
            letter = listLetters.shift();
            wordLetterCount++;

        } else {
            switch (letter) {

                case 'c':
                    letter = listLetters.shift();
                    if (letter === 'c' && wordLetterCount === 1) {
                        firstLetter = letter.toUpperCase();
                        letter = listLetters.shift();
                    } else if (letter === 'c' && wordLetterCount > 1) {
                        otherLetters += letter.toLowerCase();
                        letter = listLetters.shift();
                    }
                    break;

                case 'o':
                    letter = listLetters.shift();
                    if (letter === 'o' && wordLetterCount === 1) {
                        firstLetter = letter.toUpperCase();
                        letter = listLetters.shift();
                    } else if (letter === 'o' && wordLetterCount > 1) {
                        otherLetters += letter.toLowerCase();
                        letter = listLetters.shift();
                    }
                    break;

                case 'n':
                    letter = listLetters.shift();
                    if (letter === 'n' && wordLetterCount === 1) {
                        firstLetter = letter.toUpperCase();
                        letter = listLetters.shift();
                    } else if (letter === 'n' && wordLetterCount > 1) {
                        otherLetters += letter.toLowerCase();
                        letter = listLetters.shift();
                    }
                    break;
            }

            wordLetterCount++;

        }
    }

    console.log(`${firstLetter}${otherLetters}`);

}

main(['H', 'n', 'e', 'l', 'l', 'o', 'o', 'c', 'End']);
