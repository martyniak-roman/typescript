const table = document.getElementById('table') as HTMLTableElement

const tableForm = document.forms.namedItem('tableForm') as HTMLFormElement

tableForm.onsubmit = function (e: SubmitEvent) {
    e.preventDefault();
    const strings:number = +(tableForm.elements.namedItem('strings') as HTMLInputElement).value;
    const cells:number   = +(tableForm.elements.namedItem('cells')   as HTMLInputElement).value;
    const data:string    =  (tableForm.elements.namedItem('data')    as HTMLInputElement).value;
    console.log(strings,cells,data)

    for (let i = 0; i < strings; i++) {
        const tr:HTMLTableRowElement = document.createElement('tr');
        for (let j = 0; j < cells; j++) {
            const td:HTMLTableCellElement = document.createElement('td');
            td.innerText = data;
            tr.appendChild(td);
        }
        tableForm.appendChild(tr);
    }
}