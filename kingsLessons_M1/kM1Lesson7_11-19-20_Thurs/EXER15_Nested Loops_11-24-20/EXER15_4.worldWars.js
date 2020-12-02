function main(listWords){
    let word = listWords.shift();
    let winWord = '';
    let maxSum = 0;
    
    while(word !== 'STOP' && word !== undefined){
        let sum = 0;
        let index = 0;
        let letter = word.charCodeAt(index);
        while(!isNaN(letter)){
            sum += letter;
            index++;
            letter = word.charCodeAt(index);
        }
        
        if(sum > maxSum){
            maxSum = sum;
            winWord = word;
        }
        word = listWords.shift();
    }    
    console.log(`Winner is ${winWord} - ${maxSum}!`);
}

main(['House', 'Dog', 'Destination', 'STOP']);