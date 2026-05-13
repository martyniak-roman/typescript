function create_list(text:string,count:number) {
    for (let i = 0; i < count; i++) {
        document.write(`<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
`)
    }
}

create_list('test', 1)