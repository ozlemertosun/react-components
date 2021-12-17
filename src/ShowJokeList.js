import React, {useEffect} from "react";

const ShowJokeList = () => {

    useEffect (() => {
        fetch('https://icanhazdadjoke.com/', {
                headers: { Accept: "application/json"},
            })
            .then(respone => respone.json())
            .then((data) => (document.querySelector('ul').textContent = data.joke));
        });

    return (  
        <>
        <ul></ul>
       </> 
    );
}
 
export default ShowJokeList;