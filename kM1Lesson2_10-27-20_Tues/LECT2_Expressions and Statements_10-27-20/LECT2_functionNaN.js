function main(age){
    console.log( age);
    //age++;
    age = age +1;

    console.log( age);
     age = true;
     console.log(typeof(age));
}

    //age = 5
main(5);
main(-1);

// cannot have two function with the same name (main)
// function main(length, width){
//     let area = length * width;

//     console.log(area);
// }

//     //length = 5; width = 5
// main(5,10);
// main(3,4);

// add a number/anything else to make the function different
function main2(length, width){
    let area = length * width;

    console.log(area);
}

    //length = 5; width = 5
main2(5,10);
main2(3,4);