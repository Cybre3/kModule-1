function main(nums, list) {
    result = 0;

    for (i = 1; i <= nums; i++) {
        selectedNumber = list.shift();
        if (i % 2 === 0) {
            result -= selectedNumber;
        } else {
            result += selectedNumber;
        }
    }

    console.log(result);
}

main(2, [10, -20]);
main(3, [10, 20, 5]);