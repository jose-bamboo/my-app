import React from "react"

function Jokes(props){
    // use javascript code to hide the answer if it is not specifiedd
    let {question, answer} = props.joke;
    let out = `Joke: ${answer}`;
    if(answer == null){
        out = " ";
    }
    return (
        <div>
            <h3 style={{display: question ? "block" : "none", textDecoration: "underline", color: answer ? "black": "gray"}}>Question: {question}</h3>
            {/* use inline style to hide answer if the value is none */}
            <h3 style={{display: answer ? "block" : "none", color: !question ? "black" : "gray"}}>Answer: {answer}</h3>
        </div>
    )
}

export default Jokes