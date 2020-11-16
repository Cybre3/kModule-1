function calcArea(length,width){
    console.log(typeof(length));
    let castLength = Number(length);
    console.log(typeof(castLength));
    let castWidth = Number(width);

    let area = castLength * castWidth;

    console.log(area.toFixed(2));
}

calcArea("2.5","3");