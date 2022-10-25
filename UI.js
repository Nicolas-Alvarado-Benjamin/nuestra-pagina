/**
 * User Interface Class
 */
 export class UI {
    /**
     * Add a New Product 
     * @param {Object} product A new product Object
     */
    addProduct(product) {
      const productList = document.getElementById("product-list");
      const element = document.createElement("div");
      element.innerHTML = `
              <div class="card text-center mb-4">
                  <div class="card-body">
                      <strong>Producto</strong>: ${product.empleo} -
                      <strong>Precio</strong>: ${product.price} - 
                      <strong>cantidad</strong>: ${product.year}
                      <a href="#" class="btn btn-danger" name="delete">borrar</a>
                  </div>
              </div>
          `;
      productList.appendChild(element);
    }
  
    /**
     * Reset Form Values
     */
    resetForm() {
      document.getElementById("product-form").reset();
    }
  
    deleteProduct(element) {
      if (element.name === "delete") {
        element.parentElement.parentElement.remove();
        this.showMessage("Product Deleted Succsssfully", "success");
      }
    }
  
    showMessage(message, cssClass) {
      const div = document.createElement("div");
      div.className = `alert alert-${cssClass} mt-2`;
      div.appendChild(document.createTextNode(message));
  
      // Show in The DOM
      const container = document.querySelector(".container");
      const app = document.querySelector("#App");
  
      // Insert Message in the UI
      container.insertBefore(div, app);
  
      // Remove the Message after 3 seconds
      setTimeout(function () {
        document.querySelector(".alert").remove();
      }, 3000);
    }
  }