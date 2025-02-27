function ipv4Parser(ip, mask){
    const arrIp = ip.split('.');
    const arrMask = mask.split('.');
    const netAddress = arrIp.map((e,i)=> e & arrMask[i])
    const idHost = arrIp.map((e,i)=> e - netAddress[i]);
    return [netAddress.join('.'), idHost.join('.')]
}