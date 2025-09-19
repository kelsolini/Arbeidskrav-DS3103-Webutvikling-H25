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

return {
    addToCart
};

} )();

export default ShoppingChartModule;