const btn = document.getElementById("checkBtn") as HTMLButtonElement | null;

if (btn) {
    btn.addEventListener("click", () => {
        const form = document.forms.namedItem('f1') as HTMLFormElement | null;

        if (form) {
            const ageInput = form.elements.namedItem('ageCheck') as HTMLInputElement | null;

            if (ageInput) {
                const age = parseInt(ageInput.value, 10);

                if (!isNaN(age) && age >= 18) {
                    console.log('Welcome');
                } else {
                    alert('Access denied. You must be at least 18 years old');
                    console.log('Access denied');
                }

                ageInput.value = '';
            }
        }
    });
}