import React from 'react'
import PropTypes from 'prop-types'

const Quotes = (props) => {
   return (
       <div>
           <h4>Author Name: {props.quote.author}</h4>
           <p>Quote: {props.quote.quote}</p>
       </div>
   )
}

Quotes.propTypes = {
    quote : PropTypes.object.isRequired
}

export default Quotes;