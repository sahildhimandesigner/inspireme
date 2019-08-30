import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { authors } from './../../API/'
import withStyle from 'react-jss'

const authListDesign = {
    container: {
        backgroundColor: '#f1f1f1',
        padding: '10px 20px',
        display: 'block',
        width: '800px',
        margin: '0 auto 5px auto',
        textAlign:'left'
    },
    listStyle: {
        color:'#000',
        textDecoration:'none',
        
    }
}

const AuthourList = ({classes}) => {
    const [authourList, setQuotes] = useState([]);
    useEffect(()=> {
        authors().then(data => setQuotes(data));        
    })
    
    return(
        <div>            
            {//console.log(authourList)                
                 authourList && authourList.map( quotelistitem => ( 
                     <p className={classes.container} key={quotelistitem.id}>                
                        <Link className={classes.listStyle} to={`/author/${quotelistitem.id}`}>{quotelistitem.author}</Link>
                    </p>
                 ))                                
            }
        </div>
    )
}

export default withStyle(authListDesign)(AuthourList);