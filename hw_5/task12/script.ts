const arrayMinValue = (array: number[]): number | undefined => {
    if (array.length === 0) return undefined;

    let min = array[0] as number;
    for (const number of array) {
        if (number < min) {
            min = number
        }
    }
    return min
}

console.log(arrayMinValue([5,10,23,55,1,4,25]))