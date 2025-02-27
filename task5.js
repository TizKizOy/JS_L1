function primeFactors(n){
    const factors = [];
    let divisor = 2;
    while (n >= 2) {
        while (n % divisor === 0) {
            factors.push(divisor);
            n = n / divisor;
        }
        divisor++;
        if (divisor * divisor > n) {
            if (n > 1) {
                factors.push(n);
                break;
            }
        }
    }
    const factorCounts = {};
    factors.forEach(e => {
        factorCounts[e] = (factorCounts[e] || 0) + 1;
    });
    return Object.entries(factorCounts)
        .map(([e, count]) => `(${e}${count > 1 ? `**${count}` : ''})`)
        .join('');
}