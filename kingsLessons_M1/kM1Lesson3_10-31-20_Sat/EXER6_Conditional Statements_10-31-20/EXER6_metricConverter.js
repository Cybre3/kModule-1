function main(num, input, output) {
    let mm = 1000;
    let cm = 100; 
    let mi = 0.000621371192; 
    let inch = 39.3700787;
    let km = 0.001;
    let ft = 3.2808399;
    let yd = 1.0936133;
    let m = 1;
    

    if (input == 'mm') {
        if (output == 'cm'){
            console.log(`${(num / mm * cm).toFixed(10)}`);
        } else if (output == 'mi') {
            console.log(`${(num / mm * mi).toFixed(10)}`);
        } else if (output == 'in') {
            console.log(`${(num / mm * inch).toFixed(10)}`);
        } else if (output == 'km') {
            console.log(`${(num / mm * km).toFixed(10)}`);
        } else if (output == 'ft') {
            console.log(`${(num / mm * ft).toFixed(10)}`);
        } else if (output == 'yd') {
            console.log(`${(num / mm * yd).toFixed(10)}`);
        } else if (output == 'm') {
            console.log(`${(num / mm * m).toFixed(10)}`);
        }
    } else if (input == 'cm') {
        if (output == 'mm'){
            console.log(`${(num / cm * mm).toFixed(10)}`);
        } else if (output == 'mi') {
            console.log(`${(num / cm * mi).toFixed(10)}`);
        } else if (output == 'in') {
            console.log(`${(num / cm * inch).toFixed(10)}`);
        } else if (output == 'km') {
            console.log(`${(num / cm * km).toFixed(10)}`);
        } else if (output == 'ft') {
            console.log(`${(num / cm * ft).toFixed(10)}`);
        } else if (output == 'yd') {
            console.log(`${(num / cm * yd).toFixed(10)}`);
        } else if (output == 'm') {
            console.log(`${(num / cm * m).toFixed(10)}`);
        }
    } else if (input == 'mi') {
        if (output == 'mm'){
            console.log(`${(num / mi * mm).toFixed(10)}`);
        } else if (output == 'cm') {
            console.log(`${(num / mi * cm).toFixed(10)}`);
        } else if (output == 'in') {
            console.log(`${(num / mi * inch).toFixed(10)}`);
        } else if (output == 'km') {
            console.log(`${(num / mi * km).toFixed(10)}`);
        } else if (output == 'ft') {
            console.log(`${(num / mi * ft).toFixed(10)}`);
        } else if (output == 'yd') {
            console.log(`${(num / mi * yd).toFixed(10)}`);
        } else if (output == 'm') {
            console.log(`${(num / mi * m).toFixed(10)}`);
        }
    } else if (input == 'in') {
        if (output == 'mm'){
            console.log(`${(num / inch * mm).toFixed(10)}`);
        } else if (output == 'cm') {
            console.log(`${(num / inch * mi).toFixed(10)}`);
        } else if (output == 'mi') {
            console.log(`${(num / inch * cm).toFixed(10)}`);
        } else if (output == 'km') {
            console.log(`${(num / inch * km).toFixed(10)}`);
        } else if (output == 'ft') {
            console.log(`${(num / inch * ft).toFixed(10)}`);
        } else if (output == 'yd') {
            console.log(`${(num / inch * yd).toFixed(10)}`);
        } else if (output == 'm') {
            console.log(`${(num / inch * m).toFixed(10)}`);
        }
    } else if (input == 'km') {
        if (output == 'mm'){
            console.log(`${(num / km * mm).toFixed(10)}`);
        } else if (output == 'cm') {
            console.log(`${(num / km * mi).toFixed(10)}`);
        } else if (output == 'mi') {
            console.log(`${(num / km * inch).toFixed(10)}`);
        } else if (output == 'in') {
            console.log(`${(num / km * cm).toFixed(10)}`);
        } else if (output == 'ft') {
            console.log(`${(num / km * ft).toFixed(10)}`);
        } else if (output == 'yd') {
            console.log(`${(num / km * yd).toFixed(10)}`);
        } else if (output == 'm') {
            console.log(`${(num / km * m).toFixed(10)}`);
        }
    } else if (input == 'ft') {
        if (output == 'mm'){
            console.log(`${(num / ft * mm).toFixed(10)}`);
        } else if (output == 'cm') {
            console.log(`${(num / ft * mi).toFixed(10)}`);
        } else if (output == 'mi') {
            console.log(`${(num / ft * inch).toFixed(10)}`);
        } else if (output == 'km') {
            console.log(`${(num / ft * km).toFixed(10)}`);
        } else if (output == 'in') {
            console.log(`${(num / ft * cm).toFixed(10)}`);
        } else if (output == 'yd') {
            console.log(`${(num / ft * yd).toFixed(10)}`);
        } else if (output == 'm') {
            console.log(`${(num / ft * m).toFixed(10)}`);
        }
    } else if (input == 'yd') {
        if (output == 'mm'){
            console.log(`${(num / yd * mm).toFixed(10)}`);
        } else if (output == 'cm') {
            console.log(`${(num / yd * mi).toFixed(10)}`);
        } else if (output == 'mi') {
            console.log(`${(num / yd * inch).toFixed(10)}`);
        } else if (output == 'km') {
            console.log(`${(num / yd * km).toFixed(10)}`);
        } else if (output == 'ft') {
            console.log(`${(num / yd * ft).toFixed(10)}`);
        } else if (output == 'yd') {
            console.log(`${(num / yd * cm).toFixed(10)}`);
        } else if (output == 'm') {
            console.log(`${(num / yd * m).toFixed(10)}`);
        }
    } else if (input == 'm') {
        if (output == 'mm'){
            console.log(`${(num / m * mm).toFixed(10)}`);
        } else if (output == 'cm') {
            console.log(`${(num / m * cm).toFixed(10)}`);
        } else if (output == 'mi') {
            console.log(`${(num / m * mi).toFixed(10)}`);
        } else if (output == 'km') {
            console.log(`${(num / m * km).toFixed(10)}`);
        } else if (output == 'ft') {
            console.log(`${(num / m * ft).toFixed(10)}`);
        } else if (output == 'yd') {
            console.log(`${(num / m * yd).toFixed(10)}`);
        } else if (output == 'in') {
            console.log(`${(num / m * inch).toFixed(10)}`);
        }
    }
}

main(12, 'km', 'ft');
main(150, 'mi', 'in');
main(450, 'yd', 'km');