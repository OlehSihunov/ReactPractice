import React from 'react'


export default class Header extends React.Component
{
    render()
    {
        return(
            <div className= "Header">
                <div className="headerLogo"><a href='/'><p>VictoryAlliance</p></a></div>
                <a href="#" className ="headerText">about us</a>
                <div></div>
            </div>
        )
    }
}