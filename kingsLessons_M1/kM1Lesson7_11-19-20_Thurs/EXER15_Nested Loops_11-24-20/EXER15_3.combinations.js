function main(num){
    comboCount = 0;

    for(let d1 = 0; d1 <= num; d1++){
        for(let d2 = 0; d2 <= num; d2++){
            for(let d3 = 0; d3 <= num; d3++){
                for(let d4 = 0; d4 <= num; d4++){
                    for(let d5 = 0; d5 <= num; d5++){
                        if(d1+d2+d3+d4+d5 === num){
                            comboCount++;
                        }                        
                    }
                }
            }
        }
    }
    console.log(`${comboCount}`);
}

main(25);
main(10);