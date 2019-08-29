import React from 'react'
import withStyle from 'react-jss'

const comStyle = {
    quoteContainer : {
        backgroundColor:'#f9f9f9',   
        border:'#e1e1e1 solid 1px',
        padding:'20px',
        margin: '10px auto 10px auto',
        maxWidth:'800px',
        borderRadius:'5px',
        textAlign:'left'
    },
    authourName: {
        margin:'0',
        padding:'0 0 10px 0',
        fontSize:'18px',
    },
    quoteDetail:{
        margin:'0',
        padding:'0 0 10px 0',
        lineHeight:'18px'
    }
}

const DailyQuote = ({classes, ...props}) => {    
    return(
        <div className={classes.quoteContainer}>
             <h1 className={classes.authourName}>Authour Name: {props.todayQuote.author}</h1>              
             <p className={classes.quoteDetail}><strong>Quote:</strong> {props.todayQuote.quote}</p>
             <span><strong>Category</strong> {props.todayQuote.category}</span>
        </div>        
    )
}

export default withStyle(comStyle)(DailyQuote);