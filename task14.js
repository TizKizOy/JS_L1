function hexStringToRGB(hexString) {
    hexString = hexString.replace('#', '').toUpperCase();
    const r = parseInt(hexString.substring(0, 2), 16);
    const g = parseInt(hexString.substring(2, 4), 16);
    const b = parseInt(hexString.substring(4, 6), 16);
    return { r, g, b };
}