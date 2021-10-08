'use strict';

class productDTO {
    /**
     * 
     * @param {number} id уникальный, отличительный индетификатор товара
     * @param {string} name имя товара
     * @param {string} image название файла с картинкой
     * @param {string} description описание товара
     * @param {numder} price цена товара 
     */
    constructor(id, name, image, description, price) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.description = description;
        this.price = price;
    }
}