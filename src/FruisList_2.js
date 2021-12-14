
const FruitList_2 = () => {

    const fruits = ['æbler', 'bananer', 'meloner'];

    const newFruits = fruits.map((fruit, index)=> <li key={index}>{fruit} {index}</li>);

    return ( 
        <ul>{newFruits}</ul>
    );
}
 
export default FruitList_2;