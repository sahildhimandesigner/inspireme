import React, { useState, useEffect } from 'react';
import { authorsDetails } from './../../API/'
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
        padding:'0',
        fontSize:'18px',
    },
    quoteDetail:{
        margin:'0',
        padding:'0',
        lineHeight:'18px'
    },
    backButton:{
        backgroundColor:'#000',
        color:'#FFF',
        fontSize:'14px;',
        border:'0',
        padding:'10px',
        cursor:'pointer',
        margin:'0 0 10px 0'
    }
}

const AuthourDetail = ({classes, history, match: { params: { id } } }) => {
    const [authourList, setQuotes] = useState([]);
    useEffect(()=> {
        authorsDetails(id).then(data => setQuotes(data));        
    })
    
    return(
        <div>     
            <button className={classes.backButton} onClick={() => history.push('/Author')}>&lt; Go Back</button>       
            {
                 authourList && authourList.quote && authourList.quote.map( (quotelistitem, index) => ( 
                    <div key={`quote_${index}`} className={classes.quoteContainer}> 
                        <p className={classes.quoteDetail}><strong>Quote: {quotelistitem.id}</strong> {quotelistitem.quote}</p>
                    </div>
                 ))                                
            }
        </div>
    )
}

export default withStyle(comStyle)(AuthourDetail);