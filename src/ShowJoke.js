import React, {useEffect} from "react";


const ShowJoke = () => {
    
    useEffect (() => {
    fetch('https://icanhazdadjoke.com/', {
            headers: { Accept: "application/json"},
        })
        .then(respone => respone.json())
        .then((data) => (document.querySelector('p').textContent = data.joke));
    });

    return (  
       <>
        <p></p>
       </> 
    );

}
 
export default ShowJoke;