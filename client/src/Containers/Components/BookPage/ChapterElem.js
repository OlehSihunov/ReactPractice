import React from 'react';




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
                    <div>
                        <a href= {'/Book/'+this.props.chapter.BookId+
                    '/'+this.props.chapter.ChapterNumber}>Read</a>
                    </div>
                
                
               </div>
            </React.Fragment>
        )
    }
}

