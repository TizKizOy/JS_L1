function hasTwoCubeSums(n) {
    if(n < 1729) return false;
    const array = [];
    for (let a = 1; a <= Math.cbrt(n); a++) {
        for (let b = a + 1; b <= Math.cbrt(n); b++) {
        const sumOfCubes = Math.pow(a, 3) + Math.pow(b, 3);
        if (sumOfCubes === n) {
            if(array.length === 0) {array.push([a, b]);}
            else if(!array.includes(a)) {return true;}
            }
        }
    }
    return false;
}