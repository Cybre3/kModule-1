function main(countOfCharacter, characters) {

    let result = 0;

    for (let i = 1; i <= countOfCharacter; i++) {
        let letter = characters.shift();
         switch (letter) {
             case 'a':
                 result += 1;
                 break;
             case 'e':
                 result += 2;
                 break;
             case 'i':
                 result += 3;
                 break;
             case 'o':
                 result += 4;
                 break;
             case 'u':
                 result += 5;
                 break;
             default:
                 result += 0;
                 break;                 
         }
    }

    console.log(result);
}

main(3, ['i', 'x', 'u']);