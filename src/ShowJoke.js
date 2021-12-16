import React, {useEffect} from "react";


const ShowJoke = () => {

    useEffect (() => {
        fetch('https://icanhazdadjoke.com/', {
            headers: { Accept: "application/json"},
        })
        .then(respone => respone.json())
        .then();
    });

    return (  
       <>
        <p> Her skal der vises joke </p>
       </> 
    );

}
 
export default ShowJoke;