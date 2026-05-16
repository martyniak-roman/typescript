type Item = { id: number; title: string };

const container = document.getElementById('items-container') as HTMLDivElement;
const prevBtn = document.getElementById('prev-btn') as HTMLButtonElement;
const nextBtn = document.getElementById('next-btn') as HTMLButtonElement;

let currentPage = 1;
const itemsPerPage = 10;
const allItems: Item[] = [];

for (let i = 1; i <= 100; i++) {
    allItems.push({ id: i, title: `Object ${i}` });
}

const totalPages = Math.ceil(allItems.length / itemsPerPage);

function renderPage() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentItems = allItems.slice(startIndex, endIndex);

    container.innerHTML = '';

    currentItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item';
        div.textContent = item.title;
        container.appendChild(div);
    });

    prevBtn.disabled = (currentPage === 1);
    nextBtn.disabled = (currentPage === totalPages);
}

prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderPage();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        renderPage();
    }
});

renderPage();