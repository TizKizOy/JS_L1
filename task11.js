function bingo(ticket, win){
    let count=0;
    for(let i=0;i<ticket.length;i++){
        for(let j=0;j<ticket[i][0].length;j++){
            if(ticket[i][0][j].charCodeAt(0) === ticket[i][1]){
                count++;
                break;
            }
        }
    }
    return (count >= win) ? "Winner!" : "Loser!"
}
