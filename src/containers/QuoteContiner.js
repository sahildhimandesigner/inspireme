import React, {useState, useEffect} from 'react'
import {Quote} from '../components/Quote'
import {getQuote} from '../API/quotes'


const QuoteContainer = () => {
    const todayDay = new Date().getDate();
    const [quote, setQuote] = useState({});
    useEffect(()=> {
        getQuote(todayDay).then(data => setQuote(data))
    })    

    return(
        <Quote quote={quote} />
    )
}

export default QuoteContainer;