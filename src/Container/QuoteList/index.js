import React, { useState, useEffect } from 'react'
import { allQuotes } from './../../API/'
import { Quotes } from "../../Components/Quotes";

const QuoteList = () => {
    const [allQuote, setQuotes] = useState([])    
    useEffect(() => {
        allQuotes().then(data => setQuotes(data)); 
    });   
    
    return (
        <div>
            {allQuote && allQuote.map((quotelistitem, index) => <Quotes key={`allquote_${index}`} todayQuote={quotelistitem} /> )}
        </div>
    )
}

export default QuoteList;