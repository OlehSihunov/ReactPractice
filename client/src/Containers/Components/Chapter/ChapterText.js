import React from 'react'


export default class ChapterText extends React.Component
{
    render(){
        return(
            <React.Fragment>
                <h1>{this.props.chapt.Title}</h1>
                <p dangerouslySetInnerHTML={{ __html: this.props.chapt.Text }}></p>
            </React.Fragment>
        )
    }
   
}