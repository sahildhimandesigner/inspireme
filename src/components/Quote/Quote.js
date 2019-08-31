import React from 'react'
import injectSheet from 'react-jss'

const quoteStyle = {
    container:{
        backgroundColor:'#f1f1f1',
        padding:'10px',
    },
    authorName:{
        fontSize:'20px',
        color:'#000',
    }
}

const Quote = ({classes, ...props}) => {
    return(
        <div className={classes.container}>
            <h1 className={classes.authorName}>Author Name: {props.quote.author}</h1>
            <p>Quote: {props.quote.quote}</p>
        </div>
    )
}

export default injectSheet(quoteStyle)(Quote);