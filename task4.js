function findMissing(list) {  
    const d = (list[list.length - 1] - list[0]) / (list.length);
    for (let i = 0; i <= list.length; i++) {
        const tmp = list[0] + i * d;
        if(list[i]!=tmp)
            return tmp
    }
}