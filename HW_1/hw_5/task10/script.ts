const swap = (arr:number[], index1:number, index2: number) => {
    let temp:number = arr[index1] as number;
    arr[index1] = arr[index2] as number;
    arr[index2] = temp;
    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1))