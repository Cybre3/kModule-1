/* function main(drink, extra) {
    let coffee = 1.00;
    let tea = 0.60;
    let sugar = 0.40;

    if (drink === 'coffee') {
        if (extra === 'sugar'){
            console.log(`Final Price: $${(coffee + sugar).toFixed(2)}`);
        } else if (extra === 'no') {
            console.log(`Final Price: $${coffee.toFixed(2)}`);
        }
    } else if (drink === 'tea') {
        if (extra === 'sugar'){
            console.log(`Final Price: $${(tea + sugar).toFixed(2)}`);
        } else if (extra === 'no') {
            console.log(`Final Price: $${tea.toFixed(2)}`);
        }
    } 
} */

function main(drink, extra) {

    let total = 0;

    if (drink === 'coffee') {
        total += 1.00;
    } else if (drink === 'tea') {
        total += 0.60;
    } 

    if (extra === 'sugar') {
        total += 0.40;
    }

    console.log(`Final Price: $${total.toFixed(2)}`);
}



main('coffee', 'sugar');
main('tea', 'no');