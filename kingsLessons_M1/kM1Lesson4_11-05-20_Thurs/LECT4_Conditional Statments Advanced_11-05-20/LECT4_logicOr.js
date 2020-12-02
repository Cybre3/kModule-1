function main(s) {

    if (s === 'tea' || s === 'water' || s === 'coffee') {
        console.log('Drink');
    } else if (s === 'curry' || s === 'noodles' || s === 'sushi' || s === 'spaghetti') {
        console.log('Food');
    } else {
        console.log('Unknown');
    }
}

main('noodles');
main('coffee');
main('nails');