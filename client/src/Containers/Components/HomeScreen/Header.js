import React from 'react'


export default class Header extends React.Component
{
    render()
    {
        return(
            <div className= "Header">
                <div className="headerLogo"><a href='/'><h1>VictoryAlliance</h1></a></div>
                <a href="" className ="headerText"><p>About Us</p></a>
                <div></div>
            </div>
        )
    }
}