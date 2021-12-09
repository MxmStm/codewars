function arrayPlusArray(arr1, arr2) {
    const sumArr1 = arr1.reduce((sum, elem) => sum + elem, 0);
    const sumArr2 = arr2.reduce((sum, elem) => sum + elem, 0);
    return sumArr1 + sumArr2; //something went wrong
}

