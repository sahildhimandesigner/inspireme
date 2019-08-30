import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { authors } from './../../API/'

const AuthourList = () => {
    const [authourList, setQuotes] = useState([]);
    useEffect(()=> {
        authors().then(data => setQuotes(data));        
    })
    
    return(
        <div>            
            {//console.log(authourList)                
                 authourList && authourList.map( quotelistitem => ( 
                     <p key={quotelistitem.id}>                
                        <Link to={`/author/${quotelistitem.id}`}>{quotelistitem.author}</Link>
                    </p>
                 ))                                
            }
        </div>
    )
}

export default AuthourList;