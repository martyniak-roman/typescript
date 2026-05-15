const arr = []

function addToLocalStorage(arrayName:string,objToAdd:object):void{
    const isItem = localStorage.getItem(arrayName)
    if(!isItem){
        throw new Error('Error');
    }

    const array:object[] = JSON.parse(isItem)
    if (typeof objToAdd == 'object'){
        array.push(objToAdd);
    }

    localStorage.setItem(arrayName, JSON.stringify(array))
}

addToLocalStorage('sessionsList', {})