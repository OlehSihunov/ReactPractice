import React from 'react'


export default class ChapterText extends React.Component
{
    render(){
        return(
            <React.Fragment>
               <div><h1>{this.props.chapt.ChapterNumber} {this.props.chapt.Title}</h1></div>
                <div>{this.props.chapt.Text}</div>
            </React.Fragment>
        )
    }
   
}