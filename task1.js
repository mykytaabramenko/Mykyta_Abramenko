function filter_list(array) {
    return array.filter((item) => typeof item === 'number'); // filters out item that has type which is not 'number'
}
// examples
document.write('Example 1: ');
document.write(filter_list([1, 2, 'a', 'b']) + ' ');
document.write('Example 2: ');
document.write(filter_list([1, 'a', 'b', 0, 15]) + ' ');
document.write('Example 3: ');
document.write(filter_list([1, 2, 'aasf', '1', '123', 123]) + ' ');
