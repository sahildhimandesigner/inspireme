import React from 'react'
import withStyle from 'react-jss'
import { quoteStyle } from './Quote.style';

const DailyQuote = ({classes, ...props}) => {    
    return(
        <div className={classes.quoteContainer}>
             <h1 className={classes.authourName}>Authour Name: {props.todayQuote.author}</h1>              
             <p className={classes.quoteDetail}><strong>Quote:</strong> {props.todayQuote.quote}</p>
             <span><strong>Category</strong> {props.todayQuote.category}</span>
        </div>        
    )
}

export default withStyle(quoteStyle)(DailyQuote);