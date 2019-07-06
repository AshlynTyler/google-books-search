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
            <div>
                <p>Saved Books</p>

                <BookList buttonClick={props.saveBook} buttonText="Delete" list={props.saved}/>
            </div>
        </>
    )
}

export {Search, Saved};

function BookList(props){


    return(
        <>
            {props.list.map(index=>(

                <BookDisplay title={index.title} 
                    authors={index.authors} 
                    description={index.description}
                    image={index.image}
                    link={index.link}
                    buttonText={props.buttonText}
                    buttonClick={props.buttonClick}/>
                )

            )}
        </>
    )
}

function BookDisplay(props){
    return(
        <div>
            <p>{props.title}</p>
            <p>{props.authors}</p>
            <div className = "flex-container">
                <img src ={props.image} alt="book-image"></img>
                <p>{props.description}</p>
            </div>
            <a href={props.link}>view</a>
            <button onClick={props.buttonClick}>{props.buttonText}</button>
        </div>
    )
}