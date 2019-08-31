import React, {useState, useEffect} from 'react'
import { getAllQuotes } from '../API/quotes'
import { Quotes } from '../components/Quotes'

const AllQuotes = () => {
    const [quote, setAllQuote] = useState([]);
    useEffect(()=> {
        getAllQuotes().then(data => setAllQuote(data))
    })
    return(
        <div>
            {quote && quote.map(allquote => {
                return(
                    <Quotes quote={allquote} />
                )
            })}
        </div>
    )
}

export default AllQuotes