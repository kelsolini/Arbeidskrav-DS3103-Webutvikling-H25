import ProductModule from "./modules/ProductModule.js";
import ShoppingChartModule from "./modules/ShoppingChartModule.js";

const productSection = document.querySelector(".product-section");

const printAllproducts = () => {
    const gettAllProducts = ProductModule.getAll();
    let htmlTxt = "";

    gettAllProducts.forEach(product => {
        htmlTxt += `
            <article class="product-box xs-6 sm-6 md-4 lg-3">
                <img class="img-responsive product-image" src="images/${product.image}" alt="${product.name}. foto."/>
                <h3>${product.name}</h3>
                <p>${product.price},-</p>
                <button data-id="${product.id}">Kjøp</button>
                
            </article>
        `;
    });

    productSection.innerHTML = htmlTxt;
}

const onBtnClick = () => {
    const btn = document.querySelectorAll("button");

    btn.forEach(btn => {
        btn.addEventListener("click", addToBasket);
    })
}

const addToBasket = ( event ) => {
    const id = Number(event.target.dataset.id);
    const choosenProduct = ProductModule.getId(id);

    ShoppingChartModule.addToCart( choosenProduct )

}

printAllproducts();
onBtnClick();
