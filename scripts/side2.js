import ProductModule from "./modules/ProductModule.js";
import ShoppingChartModule from "./modules/ShoppingChartModule.js";

const outputSection = document.querySelector(".shoppingChart-section");


const showShoppingChart = () => {
    
    const products = JSON.parse(localStorage.getItem("FoodArray"));
    let htmlTxt = "";
    
    products.forEach(product => {
        htmlTxt += `
            <article class="shoppingChart-box xs-12">
                <img class="img-responsive product-image shoppingChart__img" src="images/${product.image}" alt="${product.name}. foto."/>
                <h3>${product.name}</h3>
                <p>${product.price},-</p>
                <button class="button--del" data-id="${product.id}">Slett</button>

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

    showShoppingChart();
    onBtnClick();
}

showShoppingChart();
onBtnClick();