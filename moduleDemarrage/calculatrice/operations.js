module.exports.addition = (...numbers) => {
    return numbers.reduce((accu, number) => accu += number,0);
}

