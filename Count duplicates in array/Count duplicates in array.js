const getRepeats = (array) => {
    const duplicates = {};
    array.forEach(element => {
        duplicates[element] = duplicates[element] + 1 || 1;
    });
    return duplicates
}

// Variant with reduce
const array = ['one', 'two', 'one', 'one', 'two', 'three'];
    const getRepeats2 = (array) => {
        const count = array.reduce((accumulator, value) => {
            return {...accumulator, [value]: (accumulator[value] || 0) + 1};
        }, {});
    return count;
}
