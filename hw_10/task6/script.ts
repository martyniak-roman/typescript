const sessionsList = JSON.parse(String(localStorage.getItem('sessionsList')))

for (const sessionsListElement of sessionsList) {
    const div:HTMLDivElement = document.createElement('div');
    div.innerText = sessionsListElement.toString();
    document.body.appendChild(div);
}