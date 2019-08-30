import React, {useState, useEffect} from 'react'
import { Quotes } from '../../Components/Quotes'
import { randomQuotes } from './../../API/random_quotes'

const DailyQuote = () => {
    const todayDate = new Date().getDate();

    const [dailyQuote, setDailyQuote] = useState([]);
    useEffect(()=> {
        randomQuotes(todayDate).then(data => setDailyQuote(data))
    })
    return <Quotes todayQuote={dailyQuote} />    
}

export default DailyQuote;