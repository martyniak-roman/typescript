function sum(arr:number[]):number {
    let res:number = 0
    for (const num of arr) {
        res += num;
    }
    return res
}

console.log(sum([1,3,5]))
console.log(sum([1,20,10]))