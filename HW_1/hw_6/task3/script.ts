let nums = [11,21,3];

const sortNums = (array: number[] ,direction:string) => {
    if (direction === 'ascending'){
        return array.sort((a, b) => a - b);
    }
    else if (direction === 'descending'){
        return array.sort((a, b) => b - a);
    }
}

console.log(sortNums(nums, 'ascending')); // [3,11,21]

console.log(sortNums(nums, 'descending')); // [21,11,3]