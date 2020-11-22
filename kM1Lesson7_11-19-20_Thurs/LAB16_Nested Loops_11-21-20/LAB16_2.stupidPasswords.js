function main(num) {
    let result = '';

    for (let even = 2; even <= num; even += 2) {
        for (let odd = 1; odd <= num; odd += 2) {
            result += `${even}${odd}${even * odd} `;
        }
    }
    console.log(result);
}

main(11);
main(5);
main(6);