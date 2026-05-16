const cartsDiv = document.getElementById('carts') as HTMLDivElement;
fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    .then(cartsObject => {
        const {carts} = cartsObject;
        console.log(carts);

        for (const cart of carts) {
            const div:HTMLDivElement = document.createElement('div');
            div.classList.add('cart-container');
            const divWithInfo:HTMLDivElement = document.createElement('div');
            divWithInfo.innerText = `
                    "total": ${cart.total},
                    "discountedTotal": ${cart.discountedTotal},
                    "userId": ${cart.userId},
                    "totalProducts": ${cart.totalProducts},
                    "totalQuantity": ${cart.totalQuantity}
                `

            const ol:HTMLOListElement = document.createElement('ol');
            for (const product of cart.products) {
                const li:HTMLLIElement = document.createElement('li');
                const info:HTMLParagraphElement = document.createElement('p');
                info.innerText = `
                      "id": ${product.id},
                      "title": ${product.title},
                      "price": ${product.price},
                      "quantity": ${product.quantity},
                      "total": ${product.total},
                      "discountPercentage": ${product.discountPercentage},
                      "discountedTotal": ${product.discountedTotal},
                    `

                const img:HTMLImageElement = document.createElement('img');
                img.src = product.thumbnail;
                li.append(img, info);
                ol.appendChild(li);

            }

            div.append(divWithInfo, ol);
            cartsDiv.appendChild(div);

        }

    });