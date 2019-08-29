import React, { useState, useEffect } from 'react'
import { randomQuotes } from './../../API/random_quotes'
import DailyQuote from "../../Components/DailyQuote";

const QuoteList = () => {
    const [allQuotes, setQuotes] = useState([])    
    useEffect(() => {
        randomQuotes().then(data => setQuotes(data)); 
    });   
    
    return (
        <div>
            {allQuotes && allQuotes.map((quotelistitem) => <DailyQuote todayQuote={quotelistitem} /> )}
        </div>
    )
}

export default QuoteList;