/**
 * Product Class
 */
 export class Product {
    /**
     *
     * @param {string} empleo The Product empleo
     * @param {number} price The Product Price
     * @param {number} year The year creation of the Product
     */
    constructor(empleo, price, year) {
      this.empleo = empleo;
      this.price = price;
      this.year = year;
    }
  }