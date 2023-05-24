function numberOfPairsThatGiveTargetInSum(array, target) {
    let count = 0;
    Array.from(array).forEach((item) => {
        for (let element of array) {
            if (array.indexOf(element) === array.indexOf(item)) {
                continue;
            }
            if (item + element === target) {
                count++;
            }
        }
    });
    return count / 2;
}
// example
document.write('Example 1: ');
document.write(numberOfPairsThatGiveTargetInSum([1, 3, 6, 2, 2, 0, 4, 5], 5));
