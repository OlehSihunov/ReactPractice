import React from 'react';
import {connect} from 'react-redux'



export class ChapterElement extends React.Component
{
    render()
    {
        console.log(this.props)
        return(
            <React.Fragment>
               <div style={{border:"1px solid black"}}>
                   <div>{ this.props.chapter.ChapterNumber} {this.props.chapter.Title} </div> 
                   <div>{this.props.chapter.DatePublish} </div>
                
                
                
               </div>
            </React.Fragment>
        )
    }
}

