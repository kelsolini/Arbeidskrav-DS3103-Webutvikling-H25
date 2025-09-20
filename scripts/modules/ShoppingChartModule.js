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

    console.log(productToRemove)

    const products = JSON.parse(localStorage.getItem(productKey));

    console.log(products);

    const filtered = products.filter(product => product.id !== productToRemove.id);

    localStorage.setItem(productKey, JSON.stringify(filtered));

    console.log(filtered);

    /*
        TODO: lag en funksjon som sletter velgt product
        men ikke sletter alle produkter med samme id.
    */

};

return {
    addToCart,
    removeFromCart
};

} )();

export default ShoppingChartModule;