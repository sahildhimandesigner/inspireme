import React from 'react'
import { Link } from 'react-router-dom'
import withStyle from 'react-jss'

const menuStyle = {
    menuContainer:{
        margin:'10px auto',
        padding:'14px 0',
        listStyle:'none',
        display:'flex',
        maxWidth:'840px',
        backgroundColor:'#000',
        borderRadius:'3px'
    },
    navLink: {
        margin:'0',
        padding:'0 20px'
    },
    menuIteam:{        
        color:'#FFF'        
    }
}

const MenuList = ({classes, ...props}) => {
    return (
        <ul className={classes.menuContainer}>            
            {props.nav.map((menlink) => {
                return (
                    <li key={menlink.id} className={classes.navLink}> <Link className={classes.menuIteam} to={menlink.url}>{menlink.link}</Link></li>
                )
            })}        
        </ul>
    )
}

export default withStyle(menuStyle)(MenuList);