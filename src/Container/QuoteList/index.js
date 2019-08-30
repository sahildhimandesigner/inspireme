import React, { useState, useEffect } from 'react'
import { allQuotes } from './../../API/'
import DailyQuote from "../../Components/DailyQuote";

const QuoteList = () => {
    const [allQuote, setQuotes] = useState([])    
    useEffect(() => {
        allQuotes().then(data => setQuotes(data)); 
    });   
    
    return (
        <div>
            {allQuote && allQuote.map((quotelistitem, index) => <DailyQuote key={`allquote_${index}`} todayQuote={quotelistitem} /> )}
        </div>
    )
}

export default QuoteList;