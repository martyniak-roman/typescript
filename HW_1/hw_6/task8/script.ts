let str:string = 'Ревуть воли як ясла повні';

const stringToArray = (str: string) => {
    if (str){
        const result = str.split(' ')
        return result
    }
    return ['']
}

console.log(stringToArray(str))
