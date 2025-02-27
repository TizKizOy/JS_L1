function whatCentury(year){
    const intYear = Number.parseInt(year);
    const century = Math.ceil(intYear/100)
    if ([11, 12, 13].includes(century % 100))
        {return `${century}th`;} 
    switch(century%10){
        case 1: return `${century}st`;
        case 2: return `${century}nd`;
        case 3: return `${century}rd`;
        default: return `${century}th`
    }
}