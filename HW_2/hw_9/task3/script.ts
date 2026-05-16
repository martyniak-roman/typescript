export type Course = {
    title: string,
    monthDuration: number
}

let coursesAndDurationArray: Course[] = [

    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}

];

for (const item of coursesAndDurationArray) {
    const div:HTMLDivElement = document.createElement('div')
    div.innerText = `${item.title} ${item.monthDuration}`
    document.body.append(div)
}