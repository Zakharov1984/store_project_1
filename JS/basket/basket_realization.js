'use strict';
let elementBasket = document.querySelector('.link_basket');
let elementBasketModule = document.querySelector('.basket_module');
let elementsHoverAddCard = document.querySelectorAll('.hover_add_card');
let controlCounterElement = document.querySelector('.basket_counter_number');
let basketModuleTotalSum = document.querySelector('.basket_module_total_sum');
let basketModuleTotalSumInSpan = document.querySelector('.basket_module_total_sum span');

/**
 * Показывает или скрывает модуль корзины при клике на элемент корзины
 */
elementBasket.addEventListener('click', function (event) {
    if (!elementBasketModule.classList.contains('basket_hidden')) {
        elementBasketModule.classList.add('basket_hidden');
    } else {
        elementBasketModule.classList.remove('basket_hidden');
    }
});

let basket = {};

elementsHoverAddCard.forEach(function (element) {
    element.addEventListener('click', addedProduct);
});

/**
 * Функция добавляет продукт в объект basket
 * @param {number} productId 
 */
function addProductToObjektBasket (productId) {
    if (!(productId in basket)) {
        basket[productId] = 1;
    } else {
        basket[productId]++;
    }
}

/**
 * Функция увеличивает счетчик количества товаров при добавлении товара(клике по кнопке)
 */
 function controlCounterAddedProduct () {
    controlCounterElement.textContent++;
}

/**
 * Функция регулирует добавление товаров в модуль корзины
 * @param {number} productId 
 */
function renderProductInBasket (productId) {
    let productExist = document.querySelector(`.productCount[data-productId="${productId}"]`);
    if (productExist) {
        increaseProductCount(productId);
        recalculateSumForProduct(productId);
   } else {
        renderNewProductInBasket(productId);
    }
}

/**
 * Функция увеличивает количество одного конкретного товара.
 * @param {number} productId 
 */
function increaseProductCount (productId) {
    document.querySelector(`.productCount[data-productId="${productId}"]`).textContent++;

}
/**
 * Функция считает общую сумму в зависимости ок количества конретного товара.
 * @param {number} productId 
 */
function recalculateSumForProduct (productId) {
    let productTotalRowEl = document.querySelector(`.productTotalRow[data-productId="${productId}"]`);
    productTotalRowEl.textContent =  document.querySelector(`.productCount[data-productId="${productId}"]`).textContent * products[productId].price; 
}

/**
 * Функция добавляет разметку товара в модуль корзины
 * @param {number} productId 
 */
function renderNewProductInBasket (productId) {
    let productRow = `
        <div class="basketRow">
            <div>${products[productId].name}</div>
            <div>
                <span class="productCount" data-productId="${productId}">1</span> шт.
            </div>
            <div>$${products[productId].price}</div>
            <div>
                $<span class="productTotalRow" data-productId="${productId}">${products[productId].price}</span>
            </div>
        </div>    
        `;
        basketModuleTotalSum.insertAdjacentHTML('beforebegin', productRow);
}

function calculateAndRenderTotalBasketSum () {
   let totalSum = 0;
   for (let productId in basket) {
       totalSum += basket[productId] * products[productId].price;
   }
   basketModuleTotalSumInSpan.textContent = totalSum;
}

function addedProduct  (event) { 
    const productId = event.currentTarget.getAttribute('data-productId');
    addProductToObjektBasket(productId);
    controlCounterAddedProduct();
    renderProductInBasket(productId);
    calculateAndRenderTotalBasketSum();
}


