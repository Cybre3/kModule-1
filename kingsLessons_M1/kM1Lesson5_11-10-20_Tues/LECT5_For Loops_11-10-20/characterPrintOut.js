function main1(letter) {
    let startVal = letter.charCodeAt();
    let output = '';

    for (i = letter.charCodeAt(); i <= 'Z'.charCodeAt(); i++) {
        output += String.fromCharCode(i)+ ' ';
        if (i === 'Z ') {
            output = 'Z'- ' ';
        }
    }

    console.log(output);
}

main1('A');

function main(startingLetter, endingLetter) {

    let startVal = startingLetter.charCodeAt();
    let endVal = endingLetter.charCodeAt();

    let output = '';

    for (let i = startVal; i <= endVal; i++) {
        output += String.fromCharCode(i)+ ' ';
    }

    console.log(output);

}

main('a', 'c');