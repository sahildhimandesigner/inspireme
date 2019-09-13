import React, { useState, useEffect } from 'react'
import { allQuotes } from './../../API/'
import { Quotes } from "../../Components/Quotes";

const QuoteList = () => {    
    const [allQuote, setQuotes] = useState([])    
    let getquote = JSON.parse(localStorage.getItem('formdata'));
    useEffect(() => {
        allQuotes().then(data => setQuotes(data)); 
    });   
    
    return (
        <div>
            {getquote && getquote.map(addquote => {
                return(
                    <div>
                        <h1>{addquote.author}</h1>
                        <p>{addquote.quote}</p>
                    </div>
                )
            })}
            {allQuote && allQuote.map((quotelistitem, index) => <Quotes key={`allquote_${index}`} todayQuote={quotelistitem} /> )}
        </div>
    )
}

export default QuoteList;