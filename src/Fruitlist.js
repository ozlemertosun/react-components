
const FruitList = () => {

    const fruits = ['æbl', 'banan', 'melon'];

    const newFruits = fruits.map(fruit => (`${fruit}er`))

    return ( 
        <>
        {console.log(newFruits)}
        </>
    );
}
 
export default FruitList;