const ProductModule = ( () => {
// Produkt array 
const foodArray = [
    {
        id: 1,
        name: "chipotle pølse",
        image: "chipotle-pølse.jpg",
        price: 200
    },
    {
        id: 2,
        name: "fårikålkjøtt",
        image: "fårikålkjøtt.jpg",
        price: 300 
    },
    {
        id: 3,
        name: "grillpølser",
        image: "grillpølser.jpg",
        price: 100 
    },
    {
        id: 4,
        name: "karbonadedeig",
        image: "karbonadedeig.jpg",
        price: 350 
    },
    {
        id: 5,
        name: "karbonader",
        image: "karbonader.jpg",
        price: 1000 
    },
    {
        id: 6,
        name: "kyllingkjøttdeig",
        image: "kyllingkjøttdeig.jpg",
        price: 325 
    },
    {
        id: 7,
        name: "røkte kjøttpølser",
        image: "røkte-kjøttpølser.jpg",
        price: 115 
    },
    {
        id: 8,
        name: "wienerpølser",
        image: "wienerpølser.jpg",
        price: 115 
    }
];

const getAll = () => {
    return(foodArray);
}

const getId = (id) => {
    const choosenProduct = foodArray.find(product => product.id === id);
    return choosenProduct;
}

return{
    getAll,
    getId
}


} )();

export default ProductModule;

