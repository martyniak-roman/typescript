const buttons:HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName('button');
const button:HTMLButtonElement | undefined = buttons[0];

if (button) {
    button.onclick = function (): void {
        const div = document.getElementById('text') as HTMLElement | null;

        if (div) {
            div.style.display = 'none';
        } else {
            console.warn("Element with ID 'text' was not found.");
        }
    };
}