function first_non_repeated_letter(expression) {
    for (let letter of expression) {
        let count = 0; // stores the number of occurences of the letter i  expression
        let index = expression.indexOf(letter);
        while (index != -1) {
            count++;
            index = expression.indexOf(letter, index + 1);
        }
        if (count === 1) {
            return letter;
        }
    }
    return 'None';
}
// examples
document.write('Example 1: ');
document.write(first_non_repeated_letter('stress') + ' ');
document.write('Example 2: ');
document.write(first_non_repeated_letter('sssss'));
