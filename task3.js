function sum_of_digits(number) {
    if (number / 10 < 1) return number; // number contains only one digit
    return sum_of_digits(
        Array.from(number.toString()).reduce(
            //  sum of digits for number is passed as an argument for next step
            (previousValue, currentValue) =>
                parseInt(previousValue) + parseInt(currentValue)
        )
    );
}
// examples
document.write('Example 1: ');
document.write(sum_of_digits(16) + ' ');
document.write('Example 2: ');
document.write(sum_of_digits(942) + ' ');
document.write('Example 3: ');
document.write(sum_of_digits(132189) + ' ');
document.write('Example 4: ');
document.write(sum_of_digits(493193) + ' ');
