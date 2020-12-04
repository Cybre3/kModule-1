function main(fSWidth, fSLength, fSHeight, incomingComputers){
    let totalSpaceAvailable = fSWidth * fSLength * fSHeight;
    let computerSpace = 0;
    let computerdelivery = incomingComputers.shift();
    while(computerdelivery != "Done" && computerdelivery != undefined){
        computerSpace += computerdelivery;
        computerdelivery = incomingComputers.shift();
    }
    if(totalSpaceAvailable >= computerSpace){
        let freespace = totalSpaceAvailable - computerSpace;
        console.log(`${freespace}  Left space.`);
    }else{
        let neededfreespace = computerSpace - totalSpaceAvailable;
        console.log(`No more free space! You need ${neededfreespace} Cubic meters more.`);
    }
}

main(10, 10, 2, [20, 20, 20, 20, 122, 'Done']);