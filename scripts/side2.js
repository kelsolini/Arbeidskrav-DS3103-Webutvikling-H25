
const outputSection = document.querySelector(".product-section");


const showShoppingChart = () => {
    let htmlTxt = "";
    const lsp = JSON.parse(localStorage.getItem("FoodArray"));

    lsp.forEach(product => {
        htmlTxt += `
            <article class="product-box xs-6 sm-6 md-4 lg-3">
                <img class="img-responsive product-image" src="images/${product.image}" alt="${product.name}. foto."/>
                <h3>${product.name}</h3>
                <p>${product.price},-</p>
            </article>
        `;
    })

    outputSection.innerHTML = htmlTxt;

}

showShoppingChart();