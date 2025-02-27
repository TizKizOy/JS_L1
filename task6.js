function toWeirdCase(string){
    const world = string.split(" ");
    const arr = []
    for(let i =0; i<world.length;i++){
        let tmp = ""
        for(let j=0;j<world[i].length;j++){
            if(j%2 ===0)
                tmp+=world[i][j].toUpperCase();
            else
                tmp+=world[i][j].toLowerCase();
        }
        arr.push(tmp);
    }
    return(arr.join(" "))
}