function main(usd){
    let euro = usd * 0.88;

    console.log(euro + ' EUR');
    console.log(`${euro} EUR`);
    console.log(`${usd} USD --> ${euro} EUR`);
}

main(17);
main(87);
main(42);