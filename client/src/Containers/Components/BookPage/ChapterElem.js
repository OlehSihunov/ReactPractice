import React from 'react';




export class ChapterElement extends React.Component
{
    render()
    {
        console.log(this.props)
        return(
                <a className="chapter card-1"  href= {'/Book/'+this.props.chapter.BookId+
                        '/'+this.props.chapter.ChapterNumber}>
                    <div>{this.props.chapter.Title} </div> 
                    <div>{this.props.chapter.DatePublish} </div>
                </a>
        )
    }
}

