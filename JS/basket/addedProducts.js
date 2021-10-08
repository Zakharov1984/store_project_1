let elementCardBox = document.querySelector('.card_box');


/**
 * Функция принимает объект продукта из массива products в файле products.js и генерирует с этими данными разметку
 * @param {ProductDTO} product Объект с информацией о продукте
 * @returns {String} На Выходе получаем готовую разметку для элемента
 */
function getProductMurkup(product) {
    return `<div class="card_box_min">
                <div class="image_card">
                    <img src="image/catalog/${product.image}" alt="${product.name}" class="image_card_box">
                    <button class="hover_add_card" data-productId="${product.id}">
                        <img src="image/index/header/basket.png" alt="basket" class="hover_add_card_image">
                        <div class="hover_add_card_text">Add to Cart</div>
                    </button>
                </div>
                <div class="info_card">
                    <div class="name_text">${product.name}</div>   
                    <div class="description_text">${product.description}</div>
                    <div class="price_text pink">$${product.price}</div>
                </div>
            </div>`;
}

function addingMarkupToHhePage(products, elementCardBox) {
    let productMarkup = '';
    for (let product of products) {
        productMarkup += getProductMurkup(product);
    }
    elementCardBox.insertAdjacentHTML("afterbegin", productMarkup);
}

addingMarkupToHhePage(products,elementCardBox);