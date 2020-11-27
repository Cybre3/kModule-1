function main(degreesCelcius, timeOfDay) {

    let outfit = '';
    let shoes = '';

    if (degreesCelcius >= 10 && degreesCelcius <= 18) {
        if (timeOfDay === 'Morning') {
            outfit = 'Sweatshirt';
            shoes = 'Sneakers';
        } else if (timeOfDay === 'Afternoon' || timeOfDay === 'Evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    } else if (degreesCelcius > 18 && degreesCelcius <= 24) {
        if (timeOfDay === 'Morning' || timeOfDay === 'Evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        } else if (timeOfDay === 'Afternoon') {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        }
    } else if (degreesCelcius >= 25) {
        if (timeOfDay === 'Morning') {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
        } else if (timeOfDay === 'Afternoon') {
            outfit = 'SwimSuit';
            shoes = 'Barefoot';
        } else if (timeOfDay === 'Evening') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
        }
    }

    console.log(`It's ${degreesCelcius} degrees, get your ${outfit} and ${shoes}.`);
}

main(16, 'Morning');
main(22, 'Afternoon');
main(28, 'Evening');