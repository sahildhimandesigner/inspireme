import React, {useState, useEffect} from 'react'
import { Quotes } from '../components/Quotes'
import { getQuote } from '../API/quotes'

const QuotesContainer = () => {
    const todayDate = new Date().getDate();
    const [quote, setQuote] = useState({});
    useEffect(() => {
        getQuote(todayDate).then(data => setQuote(data))
    })

    return(
        <div>
            <Quotes quote={quote} />        
        </div>
    )
}

export default QuotesContainer;