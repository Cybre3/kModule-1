/* 
Write a function to check for fruit or vegetable:
• Receive an item from the greengrocery
• Fruits: banana, apple, kiwi, cherry, lemon, grapes
• Vegetables: cucumber, pepper, carrot, onion
• Print: "vegetable", "fruit" or "unknown"
*/

function main(type) {

    // if (type === 'banana' || type === 'apple' || type === 'kiwi' || type === 'cherry' || type === 'lemons' || type === 'grapes') {

    // }

    switch (type) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemons':
        case 'grapes':
            console.log('Fruit');
            break;
        case 'cucumber':
        case 'pepper':
        case 'carrot':
        case 'onion':
            console.log('Vegetable');
            break;
        default:
            console.log('Unknown');
    }
}

main('banana');
main('carrot');
main('nails');