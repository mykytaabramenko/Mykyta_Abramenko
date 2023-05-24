function nextBiggerNumber(num) {
    // convert the number to an array of digits
    const digits = Array.from(String(num), Number);

    // find the first digit from the right that is smaller than the digit on its right
    let i = digits.length - 2;
    while (i >= 0 && digits[i] >= digits[i + 1]) {
        i--;
    }

    if (i === -1) {
        // No next bigger number is possible
        return -1;
    }

    // find the smallest digit on the right side of digits[i] that is larger than digits[i]
    let j = digits.length - 1;
    while (digits[j] <= digits[i]) {
        j--;
    }

    // swap digits[i] and digits[j]
    [digits[i], digits[j]] = [digits[j], digits[i]];

    // reverse the digits to the right of i
    const nextPermutation = [
        ...digits.slice(0, i + 1),
        ...digits.slice(i + 1).reverse(),
    ];

    // convert the array of digits back to a number
    const result = parseInt(nextPermutation.join(''));

    return result;
}

// example
document.write('Example 1: ');
document.write(nextBiggerNumber(21) + ' ');
document.write('Example 2: ');
document.write(nextBiggerNumber(531) + ' ');
document.write('Example 3: ');
document.write(nextBiggerNumber(2017) + ' ');
document.write('Example 4: ');
document.write(nextBiggerNumber(9) + ' ');
document.write('Example 5: ');
document.write(nextBiggerNumber(111) + ' ');
document.write('Example 6: ');
document.write(nextBiggerNumber(531) + ' ');
