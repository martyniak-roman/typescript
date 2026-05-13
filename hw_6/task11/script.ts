type Course = {title: string, monthDuration: number}

let coursesAndDurationArray:Course[] = [

    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}

];

// TODO: — відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));

//TODO:  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
const Duration = coursesAndDurationArray.filter(arr => arr.monthDuration > 5)
console.log(Duration)

//TODO: — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
const mapArr = coursesAndDurationArray.map((item, idx) => ({id: idx + 1, title: item.title, monthDuration: item.monthDuration}))
console.log(mapArr)