import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const navigation =[
        {
            path: '/', name: 'List Book'

        }
        ,
        {
            path: '/add', name: 'Add Book'
        }
    ]
 
    
  return (
    <header>
        <h1>Book Library</h1>
        <nav>
            {
                //map through all navigation
                navigation.map(nav =>(
                    <NavLink
                    key={nav.name}
                    to={nav.path}
                    >
                        {nav.name}
                    </NavLink>
                ))
            }
        </nav>
    </header>
  )
}

export default Header