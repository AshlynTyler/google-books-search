import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PromiseProvider } from "mongoose";


function Search(props){
    return(
        <>
            <div id = "search-container">
                <p>Book Search</p>

                <input id = "search-input"></input>

                <button id = "search-submit" onClick={props.submitSearch}></button>
            </div>

            <div id = "results-container">
                <p> Results:</p>

                <BookList buttonClick={props.saveBook} buttonText="Save" list={props.results} />
            </div>
        </>
    );
}



function Saved(props){
    return(
        <>
        </>
    )
}

export {Search, Saved};

function BookList(props){
    return(
        <>
        </>
    )
}

function BookDisplay(props){
    return(
        <>
        </>
    )
}