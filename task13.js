function longest(arr, n) {
    let arrcopy = arr.slice(0);
    arrcopy.sort(function (a, b){
        return b.length - a.length || arr.indexOf(a) - arr.indexOf(b)
    });
    return arrcopy[n - 1];
}