import type {Course} from "../task3/script.ts";

let coursesAndDurationArray:Course[] = [

    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}

];

for (const course of coursesAndDurationArray) {

    const div:HTMLDivElement = document.createElement('div');

    const h2:HTMLHeadingElement = document.createElement('h2');
    h2.innerText = course.title;
    const p:HTMLParagraphElement = document.createElement('p');
    p.innerText = `${course.monthDuration}`

    div.append(h2, p);

    document.body.appendChild(div);
}