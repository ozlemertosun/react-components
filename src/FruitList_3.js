import React from "react";

import ListItem from "./ListItem"

const FruitList_3 = () => {

    const fruits = ['æbler', 'bananer', 'meloner'];

    const newFruits = fruits.map((fruit, index) => (
    
    <ListItem key={index} mykey={index} fruit={fruit} />

));
    return  <ul>{newFruits}</ul>;
};
 
export default FruitList_3;