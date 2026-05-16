interface Course {
    title: string;
    monthDuration: number;
    hourDuration: number;
    modules: string[];
}


let coursesArray:Course[] = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

const wrapper = document.getElementById('wrapper') as HTMLDivElement;

for (const course of coursesArray) {

    const courseBlock:HTMLDivElement = document.createElement('div');
    courseBlock.classList.add('course-item');

    const titleBlock:HTMLDivElement = document.createElement('div');
    titleBlock.classList.add('course-title');
    titleBlock.innerText = course.title;

    const durationContainer:HTMLDivElement = document.createElement('div');
    durationContainer.classList.add('duration-container');

    const monthBlock:HTMLDivElement = document.createElement('div');
    monthBlock.classList.add('duration-item');
    monthBlock.innerText = `Month duration: ${course.monthDuration}`;

    const hourBlock:HTMLDivElement = document.createElement('div');
    hourBlock.classList.add('duration-item');
    hourBlock.innerText = `Hour duration: ${course.hourDuration}`;

    durationContainer.append(monthBlock, hourBlock);

    const modulesBlock:HTMLDivElement = document.createElement('div');
    modulesBlock.classList.add('modules-block');

    const ul:HTMLUListElement = document.createElement('ul');

    for (const moduleItem of course.modules) {
        const li = document.createElement('li');
        li.innerText = moduleItem;
        ul.appendChild(li);
    }
    modulesBlock.appendChild(ul);

    courseBlock.append(titleBlock, durationContainer, modulesBlock);

    wrapper.appendChild(courseBlock);
}