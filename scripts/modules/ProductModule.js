const ProductModule = ( () => {
// Produkt array 
const foodArray = [
    {
        name: "chipotle pølse",
        image: "chipotle-pølse.jpg",
        price: 200
    },
    {
        name: "fårikålkjøtt",
        image: "fårikålkjøtt.jpg",
        price: 300 
    },
    {
        name: "grillpølser",
        image: "grillpølser.jpg",
        price: 100 
    },
    {
        name: "karbonadedeig",
        image: "karbonadedeig.jpg",
        price: 350 
    },
    {
        name: "kyllingkjøttdeig",
        image: "kyllingkjøttdeig.jpg",
        price: 325 
    },
    {
        name: "røkte kjøttpølser",
        image: "røkte-kjøttpølser.jpg",
        price: 115 
    },
    {
        name: "wienerpølser",
        image: "wienerpølser.jpg",
        price: 115 
    }
];

const getAll = () => {
    return(foodArray);
} 

return{
    getAll
}


} )();

export default ProductModule;

