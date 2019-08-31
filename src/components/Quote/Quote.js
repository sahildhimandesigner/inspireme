import React from 'react'

const Quote = (props) => {
    return(
        <div>
            <h1>Author Name: {props.quote.author}</h1>
            <p>Quote: {props.quote.quote}</p>
        </div>
    )
}

export default Quote;