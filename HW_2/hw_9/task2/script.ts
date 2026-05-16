const arr:string[] =  ['Main', 'Products','About us','Contacts']

const ul:HTMLUListElement = document.createElement('ul')

document.body.appendChild(ul)

for (const item of arr) {
    const li:HTMLLIElement = document.createElement('li')
    li.innerText = item
    document.body.append(li)
}