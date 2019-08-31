import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Author } from '../components/Authors';
import { authors } from "../API/";

const AuthorsContainer = () => {
    const [author, setAuthors] = useState([]);
    useEffect(() => {
        authors().then(data => setAuthors(data))
    })
    
    return author.map((author) => <Link to={`/authors/${author.id}`}>{<p>{author.author}</p>}</Link>)
    }

export default AuthorsContainer;
