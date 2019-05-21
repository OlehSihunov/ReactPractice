import React from 'react'


export default class Chapter extends React.Component
{
    

    
    render(){
        return(<div className="Chapter">
            <p>{ this.props.chapter.Title}</p>
            <p>{this.props.chapter.BookId}</p>
            <button onClick = {()=>this.clickHandler()}>Delete</button>
        </div>)
    }
}