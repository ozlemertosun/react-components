import React, {useEffect, useRef} from "react";

const JokeRef = () => {

    let jokeRef = useRef();

    useEffect(() => {
        fetch('https://icanhazdadjoke.com/', {
            headers: { Accept: "application/json"},
        })
        .then((response) => {

            jokeRef.current.textContent = response.data.joke;
        });
    });

    return ( 
        <p ref={jokeRef}>blabla</p>
    );
}
 
export default JokeRef;