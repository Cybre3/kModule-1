let exit = false;
for (; ;) {
    console.log('echo');
    // if something happens
    if (exit == true) {
        break; // stops all loop execution after this point
    }
    
    exit = true;
}

// let exit = true;

// for (;exit !== false;) {
//     console.log('echo');
// } this is an infinite loop