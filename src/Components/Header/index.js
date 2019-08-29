import React from 'react'
import Logo from './../../images/logo.png'
import MenuList from './../../Components/MenuList'
import withStyle from 'react-jss'

const headerStyle = {
    headerContainer:{
        margin:'20px 0',
    },
    logo: {
        maring:'15px 0',
    }
}

const menuList = [
    {
      id: 1,
      url: '/',
      link:'Daily Quote'
    },
    {
      id: 2,
      url: '/Quotes',
      link:'Quote List'
    },
    {
        id: 3,
        url: '/Author',
        link:'Authour List'
    },    
  ]
  

const Header = ({classes}) => {
    return(
        <div className={classes.headerContainer}>
            <img className={classes.logo} src={Logo} alt={Logo} width="250" />
            <MenuList nav={menuList} />
        </div>
        )
}
export default withStyle(headerStyle)(Header);