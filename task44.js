function fakeBin(x) {
    return x.split('').map(item => (item < 5) ? item = 0 : item = 1).join('');
}
