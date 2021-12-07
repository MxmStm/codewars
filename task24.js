function squareDigits(num) {
    let str = String(num);
    return Number(str.split('').map(Number).map(i => i * i).map(String).join(''));
}
