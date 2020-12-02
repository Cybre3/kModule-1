/*
- while loop question -
He rents a hall and buys ​N​ computers.
He begins transferring the computers
​calculates the free space in the room after John moves the computers​.

Note: One computer is of exact size:  1m. x 1m. x 1m.


Input
• Width of free space - integer in range [1...1000];
• Length of free space - an integer in the range [1...1000];
• Height of free space - an integer in the range [1...1000];
• On the following lines ​(until the"​Done​"command is received)
    -​number of computers that are transferred to the hall - integer numbers in the range​​[1...10000];
    
The program must end reading data at command ​"Done" 
​​or if there is no free space left.

Output:
• If you reach the ​"​Done​"​ command and there is still ​free space​:
    "{free space} Cubic meters left."
• If there is no more free space before the ​"Done"​ command is received:
    "No more free space! You need {space needed} Cubic meters more."
*/



function main(fSWidth, fSLength, fSHeight, incomingPCs) {
    // get total space available
     let totalSpaceAvail = fSWidth * fSLength * fSHeight;
    // get space comupters will take up
     let pcSpace = 0;

    // track each delivery
     let pcDelivery = incomingPCs.shift();
     

     while (pcDelivery !== 'Done' && pcDelivery !== undefined) {
         // add in first delivery
         pcSpace += pcDelivery;
         pcDelivery = incomingPCs.shift();    
    }

    let freeSpace = totalSpaceAvail - pcSpace; 
        // check total pc space minus total space available to see if we have enough space
        // If you reach the ​"​Done​"​ command and there is still ​free space​:

    if (totalSpaceAvail >= pcSpace) {        
        // calc available free space
        // print "{totalSpaceAvail - pcSpace} Cubic meters left."
        console.log(`${freeSpace} left space.`);
    } else {
        // If there is no more free space before the ​"Done"​ command is received:
        // print "No more free space! You need {Math.abs(totalSpaceAvail - pcSpace)} Cubic meters more."
        console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
    }
        
}

main(10, 10, 2, [20, 20, 20, 20, 122, 'Done']);
// No more free space! Youneed 2 Cubic meters more.

// 10 * 10 * 2 = 200 cubic meters.
// 20 + 20 + 20 + 20 + 122 = 202 cubic meters.
// 200 - 202 = 2 needed cubic meters.

main(10, 1, 2, [4, 6, 'Done']);
// 10 Left space.

// 10 * 1 * 2 = 20 cubic meters.
// 4 + 6 = 10 cubic meters.
// 20 - 10 = 10 cubic meters.