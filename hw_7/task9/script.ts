//TODO: *Через Array.prototype. створити власний foreach, filter

declare global {
    interface Array<T> {
        myForEach(callback: (value: T, index: number) => void): void;
        myFilter(callback: (value: T, index: number) => boolean): T[];
    }
}

const arr:number[] = [1,2,3,33,4,564,6757,8,22]

Array.prototype.myForEach = function<T>(callback: (value: T, index: number) => void): void {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i);
    }
};

Array.prototype.myFilter = function<T>(callback: (value: T, index: number) => boolean): T[] {
    const filteredArray: T[] = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i)) {
            filteredArray.push(this[i]);
        }
    }
    return filteredArray;
};

arr.myForEach(item => console.log(item));
console.log(arr.myFilter(array => array % 2 === 0))