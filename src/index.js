
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];
    if (matrix == undefined || matrix == 0) {
        return [];
    }
    for (let i = 0; i < matrix.length; i++) {
        if (i > 0 && i % 2 !== 0) {
            let rev = matrix[i].reverse();
            for(let item = 0; item < rev.length; item++) {
                result.push(rev[item]);
            }
        } else {
            let part = matrix[i];
            for(let n = 0; n < part.length; n++) {
                result.push(part[n]);
            }
        }
    }
    return result;
}
