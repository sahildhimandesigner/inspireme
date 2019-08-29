import React from 'react'
import DailyQuotes from './../../Components/DailyQuote'
import { RandomQuotes } from './../../API/random_quotes'

const todayDate = new Date().getDate();
const todayQuote = RandomQuotes[todayDate + 1];

const DailyQuote = () => {
    return (
        <div>
            <DailyQuotes todayQuote={todayQuote} />
        </div>
    )
}

export default DailyQuote;