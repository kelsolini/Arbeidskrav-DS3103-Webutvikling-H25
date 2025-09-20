import ProductModule from "./modules/ProductModule.js";
import ShoppingChartModule from "./modules/ShoppingChartModule.js";
const outputSection = document.querySelector(".product-section");


const showShoppingChart = () => {
    let htmlTxt = "";
    const products = JSON.parse(localStorage.getItem("FoodArray"));

    products.forEach(product => {
        htmlTxt += `
            <article class="product-box xs-6 sm-6 md-4 lg-3">
                <img class="img-responsive product-image" src="images/${product.image}" alt="${product.name}. foto."/>
                <h3>${product.name}</h3>
                <p>${product.price},-</p>
                <button class="button button--delete" data-id="${product.id}">Slett</button>
            </article>
        `;
    });

    outputSection.innerHTML = htmlTxt;

}

const onBtnClick = () => {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(btn => {
        btn.addEventListener("click", removeFromBasket);
    })
}

const removeFromBasket = ( event ) => {
    const id = Number(event.target.dataset.id);
    const productToRemove = ProductModule.getId(id);

    ShoppingChartModule.removeFromCart( productToRemove );
}

showShoppingChart();
onBtnClick();