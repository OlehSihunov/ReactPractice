import React from 'react'
import './Book.css'

export default class Header extends React.Component
{
    render()
    {
        return(
            <div className= "Header">
                <div className="headerLogo"><a href='/'><p>VictoryAlliance</p></a></div>
                <div className ="headerText"><p>about us</p></div>
                <div></div>
            </div>
        )
    }
}