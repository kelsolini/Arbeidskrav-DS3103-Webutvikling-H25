const ShoppingChartModule = ( () => {

const productKey = "FoodArray";

const addToCart = ( newProduct ) => {

    if( localStorage.getItem(productKey) != null && localStorage.getItem(productKey) != undefined ){
        const products = JSON.parse(localStorage.getItem( productKey ));
        products.push( newProduct );
        localStorage.setItem( productKey, JSON.stringify( products ) )

    } else {
        localStorage.setItem( productKey, JSON.stringify([ newProduct ]) );
    }
};

const removeFromCart = ( productToRemove ) => {

    const products = JSON.parse(localStorage.getItem(productKey));

    const indexToRemove = products.findIndex(product =>
        product.id === productToRemove.id
    
    );

    if (indexToRemove !== -1) {
        products.splice(indexToRemove, 1);
        localStorage.setItem(productKey, JSON.stringify(products));
    }
};

return {
    addToCart,
    removeFromCart
};

} )();

export default ShoppingChartModule;