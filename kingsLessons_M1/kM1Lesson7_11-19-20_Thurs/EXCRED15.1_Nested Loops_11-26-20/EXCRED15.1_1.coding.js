/*
print as many lines as digits as numbers. 
first line of the corresponding units, 
of the second -tens, 
third order -hundreds of numbers, etc., 
as there are no more digits of the number.
Each line print symbol with following conditions:
● The symbol, [ASCII] table. 
    Its decimal ASCII code is 33 plus each didgit in it place of input number.
● print symbol as many times as the digit corresponding to this line
● If digit === 0, print "ZERO" once
*/

function main(num){

    let deciConvert = 33;
    let newNum = num;
    
    while(newNum !== 0){
        let digit = newNum % 10;
        let output = '';
        if (digit === 0){
            output += 'ZERO';
        } else {
            let code = deciConvert + digit;
            for(let i = 1; i <= digit; i++){
                output += String.fromCharCode(code);
            }
        }        
        newNum = Math.trunc(newNum / 10);
        
        console.log(output);
    }
}

main(2049);