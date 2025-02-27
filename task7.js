function wave(str){
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        let tmp = "";
        for (let j = 0; j < str.length; j++) {
            if (j === i) {
                tmp += str[j].toUpperCase();
            } else {
                tmp += str[j];
            }
        }
        if (tmp !== str) {
            arr.push(tmp);
        }
    }
    return arr;
}